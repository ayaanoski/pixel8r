"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, Coins, Clock, CheckCircle2, XCircle } from 'lucide-react'
import { useMarketplaceContext } from "@/context/MarketplaceProvider"
import { toast } from "sonner"
import { ethers } from "ethers"
import { MARKETPLACE_CONTRACT_ADDRESS } from "@/constants"
import marketplaceAbi from "@/marketplaceAbi"
import { motion } from "framer-motion"

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
  const [listingHistory, setListingHistory] = useState<ListingDetails[]>([])
  const [isLoadingHistory, setIsLoadingHistory] = useState(true)

  // Fetch proceeds balance
  useEffect(() => {
    const fetchProceeds = async () => {
      if (!account || !window.ethereum) return

      try {
        setIsLoading(true)
        const provider = new ethers.BrowserProvider(window.ethereum)
        const contract = new ethers.Contract(
          MARKETPLACE_CONTRACT_ADDRESS,
          marketplaceAbi,
          provider
        )
        const proceeds = await contract.getProceeds(account)
        setProceeds(ethers.formatEther(proceeds).slice(0, 7))

        // Fetch listing history
        const history = await contract.getUserListingHistory(account)
        const formattedHistory = history.map((item: any) => ({
          nftAddress: item.nftAddress,
          tokenId: Number(item.tokenId),
          price: ethers.formatEther(item.price),
          seller: item.seller,
          isActive: item.isActive,
          timestamp: Number(item.timestamp)
        }))
        console.log(formattedHistory)
        setListingHistory(formattedHistory)
      } catch (err) {
        console.error("Error fetching data:", err)
        setProceeds("Error")
        toast.error("Failed to fetch data.")
      } finally {
        setIsLoading(false)
        setIsLoadingHistory(false)
      }
    }

    fetchProceeds()
  }, [account])

  const handleWithdrawProceeds = async () => {
    if (!account || !window.ethereum) return

    try {
      const provider = new ethers.BrowserProvider(window.ethereum)
      const signer = await provider.getSigner()
      const contract = new ethers.Contract(
        MARKETPLACE_CONTRACT_ADDRESS,
        marketplaceAbi,
        signer
      )

      setIsLoading(true)
      const tx = await contract.withdrawProceeds()
      toast("Transaction submitted. Waiting for confirmation...")
      await tx.wait()
      toast.success("Proceeds withdrawn successfully!")
      setProceeds("0.0")
    } catch (err) {
      console.error("Error withdrawing proceeds:", err)
      toast.error("Failed to withdraw proceeds.")
    } finally {
      setIsLoading(false)
    }
  }

  const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleDateString()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-center mb-8 pixel-font bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            My Proceeds & Listing History
          </h1>

          <Card className="bg-gray-900/50 backdrop-blur-md border-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl text-center pixel-font">Available Proceeds</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center gap-6">
                {isLoading ? (
                  <div className="flex items-center justify-center p-4">
                    <Loader2 className="h-8 w-8 animate-spin text-purple-500" />
                  </div>
                ) : proceeds === "Error" ? (
                  <p className="text-center text-red-500 pixel-font">Failed to load proceeds. Please try again.</p>
                ) : (
                  <div className="text-center">
                    <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                      {proceeds} TLOS
                    </p>
                    <p className="text-gray-400 pixel-font">Available to withdraw</p>
                  </div>
                )}

                <Button
                  onClick={handleWithdrawProceeds}
                  disabled={isLoading || proceeds === "0.0" || proceeds === null}
                  className="relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl pixel-font
                    hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300
                    disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <>
                      <Coins className="mr-2 h-5 w-5" />
                      Withdraw Proceeds
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-8 bg-gray-900/50 backdrop-blur-md border-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl text-center pixel-font">Listing History</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoadingHistory ? (
                <div className="flex items-center justify-center p-4">
                  <Loader2 className="h-8 w-8 animate-spin text-purple-500" />
                </div>
              ) : listingHistory.length === 0 ? (
                <p className="text-center text-gray-400 pixel-font">No listing history found</p>
              ) : (
                <div className="space-y-4">
                  {listingHistory.map((listing, index) => (
                    <motion.div
                      key={`${listing.nftAddress}-${listing.tokenId}-${listing.timestamp}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between flex-wrap gap-4">
                        <div>
                          <p className="text-sm text-gray-400 pixel-font">Token ID: {listing.tokenId}</p>
                          <p className="text-lg font-bold pixel-font">{listing.price} TLOS</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {listing.isActive ? (
                            <div className="flex items-center text-yellow-500">
                              <Clock className="h-4 w-4 mr-1" />
                              <span className="text-sm pixel-font">Active</span>
                            </div>
                          ) : (
                            <div className="flex items-center text-green-500">
                              <CheckCircle2 className="h-4 w-4 mr-1" />
                              <span className="text-sm pixel-font">Sold</span>
                            </div>
                          )}
                        </div>
                        <div className="w-full">
                          <p className="text-sm text-gray-400 pixel-font">
                            Listed on: {formatDate(listing.timestamp)}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
