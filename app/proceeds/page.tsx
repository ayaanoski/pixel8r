"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, Coins, Clock, CheckCircle2, XCircle, AlertCircle } from "lucide-react"
import { useMarketplaceContext } from "@/context/MarketplaceProvider"
import { toast } from "sonner"
import { ethers } from "ethers"
import { MARKETPLACE_CONTRACT_ADDRESS } from "@/constants"
import marketplaceAbi from "@/marketplaceAbi"
import { motion, AnimatePresence } from "framer-motion"

interface ListingDetails {
  nftAddress: string
  tokenId: number
  price: string
  seller: string
  isActive: boolean
  timestamp: number
}

export default function ProceedsPage() {
  const { account } = useMarketplaceContext()
  const [proceeds, setProceeds] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isWithdrawing, setIsWithdrawing] = useState(false)
  const [listingHistory, setListingHistory] = useState<ListingDetails[]>([])
  const [isLoadingHistory, setIsLoadingHistory] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch proceeds balance and listing history
  useEffect(() => {
    const fetchData = async () => {
      if (!account || !window.ethereum) {
        setError("Please connect your wallet")
        setIsLoading(false)
        setIsLoadingHistory(false)
        return
      }

      try {
        setIsLoading(true)
        setIsLoadingHistory(true)
        setError(null)

        const provider = new ethers.BrowserProvider(window.ethereum)
        const contract = new ethers.Contract(MARKETPLACE_CONTRACT_ADDRESS, marketplaceAbi, provider)

        // Fetch proceeds
        const proceedsBalance = await contract.getProceeds(account)
        setProceeds(ethers.formatEther(proceedsBalance).slice(0, 7))

        // Fetch listing history
        const history = await contract.getUserListingHistory(account)
        const formattedHistory = history
          .map((item: any) => ({
            nftAddress: item.nftAddress,
            tokenId: Number(item.tokenId),
            price: ethers.formatEther(item.price),
            seller: item.seller,
            isActive: item.isActive,
            timestamp: Number(item.timestamp),
          }))
          .sort((a: ListingDetails, b: ListingDetails) => b.timestamp - a.timestamp) // Sort by newest first

        setListingHistory(formattedHistory)
      } catch (err) {
        console.error("Error fetching data:", err)
        setError("Failed to fetch data. Please try again.")
        setProceeds(null)
      } finally {
        setIsLoading(false)
        setIsLoadingHistory(false)
      }
    }

    fetchData()

    // Set up event listener for account changes
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", fetchData)
      return () => {
        window.ethereum.removeListener("accountsChanged", fetchData)
      }
    }
  }, [account])

  const handleWithdrawProceeds = async () => {
    if (!account || !window.ethereum) {
      toast.error("Please connect your wallet")
      return
    }

    try {
      setIsWithdrawing(true)
      const provider = new ethers.BrowserProvider(window.ethereum)
      const signer = await provider.getSigner()
      const contract = new ethers.Contract(MARKETPLACE_CONTRACT_ADDRESS, marketplaceAbi, signer)

      const tx = await contract.withdrawProceeds()

      toast.promise(tx.wait(), {
        loading: "Transaction in progress...",
        success: "Proceeds withdrawn successfully!",
        error: "Failed to withdraw proceeds",
      })

      await tx.wait()
      setProceeds("0.0")
    } catch (err: any) {
      console.error("Error withdrawing proceeds:", err)
      toast.error(err.message || "Failed to withdraw proceeds")
    } finally {
      setIsWithdrawing(false)
    }
  }

  const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  if (!account) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-900 text-white flex items-center justify-center">
        <Card className="bg-gray-900/50 backdrop-blur-md border-gray-800 w-full max-w-md mx-4">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <AlertCircle className="mx-auto h-12 w-12 text-yellow-500" />
              <p className="text-lg pixel-font">Please connect your wallet to view proceeds</p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-3xl font-bold text-center mb-8 pixel-font bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            My Proceeds & Listing History
          </h1>

          <Card className="bg-gray-900/50 backdrop-blur-md border-gray-800 hover:border-purple-500/30 transition-colors duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-center pixel-font">Available Proceeds</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center gap-6">
                {isLoading ? (
                  <div className="flex items-center justify-center p-4">
                    <Loader2 className="h-8 w-8 animate-spin text-purple-500" />
                  </div>
                ) : error ? (
                  <div className="text-center space-y-2">
                    <XCircle className="mx-auto h-8 w-8 text-red-500" />
                    <p className="text-red-400 pixel-font">{error}</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                      {proceeds} TLOS
                    </p>
                    <p className="text-gray-400 pixel-font">Available to withdraw</p>
                  </div>
                )}

                <Button
                  onClick={handleWithdrawProceeds}
                  disabled={isWithdrawing || isLoading || !proceeds || Number(proceeds) <= 0}
                  className="relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl pixel-font
                    hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300
                    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
                >
                  <span className="flex items-center gap-2">
                    {isWithdrawing ? <Loader2 className="h-5 w-5 animate-spin" /> : <Coins className="h-5 w-5" />}
                    {isWithdrawing ? "Withdrawing..." : "Withdraw Proceeds"}
                  </span>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-8 bg-gray-900/50 backdrop-blur-md border-gray-800 hover:border-purple-500/30 transition-colors duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-center pixel-font">Listing History</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoadingHistory ? (
                <div className="flex items-center justify-center p-4">
                  <Loader2 className="h-8 w-8 animate-spin text-purple-500" />
                </div>
              ) : error ? (
                <div className="text-center space-y-2">
                  <XCircle className="mx-auto h-8 w-8 text-red-500" />
                  <p className="text-red-400 pixel-font">{error}</p>
                </div>
              ) : listingHistory.length === 0 ? (
                <div className="text-center space-y-2">
                  <p className="text-gray-400 pixel-font">No listing history found</p>
                  <p className="text-sm text-gray-500 pixel-font">Your listing history will appear here</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <AnimatePresence>
                    {listingHistory.map((listing, index) => (
                      <motion.div
                        key={`${listing.nftAddress}-${listing.tokenId}-${listing.timestamp}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between flex-wrap gap-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <p className="text-sm text-gray-400 pixel-font">Token ID:</p>
                              <p className="text-sm font-medium text-white pixel-font">{listing.tokenId}</p>
                            </div>
                            <p className="text-2xl font-bold pixel-font bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                              {listing.price} TLOS
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            {listing.isActive ? (
                              <div className="flex items-center text-yellow-500 bg-yellow-500/10 px-3 py-1 rounded-full">
                                <Clock className="h-4 w-4 mr-1" />
                                <span className="text-sm pixel-font">Active</span>
                              </div>
                            ) : (
                              <div className="flex items-center text-green-500 bg-green-500/10 px-3 py-1 rounded-full">
                                <CheckCircle2 className="h-4 w-4 mr-1" />
                                <span className="text-sm pixel-font">Sold</span>
                              </div>
                            )}
                          </div>
                          <div className="w-full">
                            <p className="text-sm text-gray-400 pixel-font flex items-center gap-2">
                              <Clock className="h-4 w-4" />
                              {formatDate(listing.timestamp)}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

