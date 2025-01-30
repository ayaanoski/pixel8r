"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useMarketplaceContext } from "@/context/MarketplaceProvider"
import { formatIPFSUrl } from "@/lib/ipfs"
import { NFT_CONTRACT_ADDRESS } from "@/constants"
import { Loader, Sparkles, Clock, User, Download } from "lucide-react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

const SingleNft = ({ id }) => {
  const router = useRouter()
  const { getSingleNFTData, isLoading, buyNFT, account } = useMarketplaceContext()
  const [nft, setNft] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [buying, setBuying] = useState(false)

  useEffect(() => {
    const fetchNFTData = async () => {
      setLoading(true)
      try {
        const data = await getSingleNFTData(NFT_CONTRACT_ADDRESS, id)
        const nftData = await fetch(formatIPFSUrl(data.tokenURI)).then((res) => res.json())

        if (!nftData) throw new Error("NFT data is incomplete or missing")

        setNft({
          name: nftData.name || "Unnamed NFT",
          description: nftData.description || "No description available",
          price: Number.parseFloat(nftData.attributes[0].value) || 0,
          image: nftData.image ? formatIPFSUrl(nftData.image) : "/fallback-image.png",
          seller: data.seller ? data.seller : "Unknown",
          nftAddress: NFT_CONTRACT_ADDRESS,
          tokenURI: nftData.tokenURI,
          tokenId: id,
          attributes: nftData.attributes || [],
          createdAt: new Date().toISOString(),
        })
      } catch (err) {
        console.error("Error fetching NFT details:", err)
        setError("Failed to load NFT details. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchNFTData()
    }
  }, [id, account])

  const handleBuy = async () => {
    if (!nft) return
    setBuying(true)
    try {
      await buyNFT(nft.nftAddress, id, nft.price.toString())
      alert("Purchase successful!")
      router.push("/marketplace")
    } catch (error) {
      console.error("Error buying NFT:", error)
      alert("Failed to purchase NFT. Please try again.")
    } finally {
      setBuying(false)
    }
  }

  const handleDownload = () => {
    if (!nft) return

    const downloadData = {
      ...nft,
      downloadedAt: new Date().toISOString(),
      blockchain: {
        network: "Telos",
        contractAddress: NFT_CONTRACT_ADDRESS,
        tokenId: id
      }
    }

    const blob = new Blob([JSON.stringify(downloadData, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${nft.name.toLowerCase().replace(/\s+/g, "-")}-${id}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center min-h-screen"
      >
        <Loader size={48} className="animate-spin text-purple-500 mb-4" />
        <span className="pixel-font text-xl">Loading NFT Data...</span>
      </motion.div>
    )
  }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-center min-h-screen"
      >
        <Card className="p-8 bg-red-50 border-red-200">
          <div className="text-red-500 pixel-font text-center text-xl">{error}</div>
        </Card>
      </motion.div>
    )
  }

  if (!nft) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-center min-h-screen"
      >
        <Card className="p-8 bg-yellow-50 border-yellow-200">
          <div className="text-yellow-500 pixel-font text-center text-xl">No NFT found</div>
        </Card>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen p-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Image */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="sticky top-8">
            <div className="relative aspect-square rounded-3xl overflow-hidden border-4 border-purple-500 shadow-2xl">
              <Image
                src={nft.image || "/placeholder.svg"}
                alt={nft.name}
                layout="fill"
                objectFit="cover"
                className="pixelated transform transition-transform duration-700 hover:scale-110"
              />
            </div>
            <div className="mt-6">
              <Button
                variant="outline"
                size="lg"
                className="w-full pixel-font bg-gray-800/50 border-purple-500/20 hover:bg-gray-700/50"
                onClick={handleDownload}
              >
                <Download className="mr-2 h-5 w-5" />
                Download NFT Data
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Details */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-8"
        >
          {/* Title and Description */}
          <div>
            <h1 className="text-5xl font-bold pixel-font bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
              {nft.name}
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">{nft.description}</p>
          </div>

          <Separator className="border-purple-500/30" />

          {/* Price and Action */}
          <div className="bg-gray-800/50 rounded-2xl p-6 border border-purple-500/20">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-gray-400 pixel-font">Current Price</p>
                <p className="text-4xl font-bold text-white">{nft.price.toFixed(2)} TLOS</p>
              </div>
              <div>
                <p className="text-gray-400 pixel-font">Token ID</p>
                <p className="text-xl text-white">#{id}</p>
              </div>
            </div>
            <motion.button
              className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl pixel-font text-xl relative overflow-hidden group"
              onClick={handleBuy}
              disabled={buying}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center justify-center">
                {buying ? "Processing..." : "Buy Now"}
                <Sparkles className="ml-2 h-5 w-5" />
              </span>
              <div className="absolute inset-0 h-full w-3 bg-white transform -skew-x-[20deg] group-hover:w-full opacity-10 transition-all duration-500 ease-out" />
            </motion.button>
          </div>

          {/* Details */}
          <div className="space-y-4">
            <div className="bg-gray-800/50 rounded-xl p-4 border border-purple-500/20">
              <div className="flex items-center text-gray-300 mb-2">
                <User className="h-5 w-5 mr-2" />
                <span className="pixel-font">Seller</span>
              </div>
              <p className="text-white break-all font-mono">{nft.seller}</p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-4 border border-purple-500/20">
              <div className="flex items-center text-gray-300 mb-2">
                <Clock className="h-5 w-5 mr-2" />
                <span className="pixel-font">Created</span>
              </div>
              <p className="text-white">
                {new Date(nft.createdAt).toLocaleString(undefined, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
          </div>

          {/* Attributes */}
          {nft.attributes && nft.attributes.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold pixel-font text-white mb-4">Attributes</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {nft.attributes.map((attr, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/50 rounded-xl p-4 border border-purple-500/20"
                  >
                    <p className="text-gray-400 pixel-font text-sm">{attr.trait_type}</p>
                    <p className="text-white font-semibold">{attr.value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default SingleNft