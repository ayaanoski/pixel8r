"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import BackgroundCollage from "../components/BackgroundCollage"
import useMarketplaceContext from "@/context/MarketplaceProvider"
import { Loader2, Plus, ArrowLeft, X } from "lucide-react"
import { formatIPFSUrl } from "@/lib/ipfs"
import Link from "next/link"
import Image from "next/image"

interface NFT {
  tokenId: string
  price: string
  imageUrl: string | null
  name: string
  description: string
}

export default function MyCollection() {
  const [isLoading, setIsLoading] = useState(true)
  const [nfts, setNfts] = useState<NFT[]>([])
  const [selectedNFT, setSelectedNFT] = useState<NFT | null>(null)
  const { getNFTs, account, connectWallet } = useMarketplaceContext()

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        if (!account) {
          await connectWallet()
        }
        const userNFTs = await getNFTs()
        const nftData = await Promise.all(
          userNFTs.map(async (nft: any) => {
            const metadataUrl = formatIPFSUrl(nft.tokenURI)
            const metadataResponse = await fetch(metadataUrl)
            const metadata = await metadataResponse.json()

            return {
              tokenId: nft.tokenId,
              price: nft.price,
              imageUrl: formatIPFSUrl(metadata.image),
              name: metadata.name,
              description: metadata.description,
            }
          }),
        )
        setNfts(nftData)
      } catch (error) {
        console.error("Error fetching NFTs:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchNFTs()
  }, [account])

  const renderNFTCard = (nft: NFT) => (
    <motion.div
      key={nft.tokenId}
      layoutId={`nft-${nft.tokenId}`}
      onClick={() => setSelectedNFT(nft)}
      className="bg-gray-800 rounded-xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-purple-500 hover:border-pink-500"
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.95 }}
    >
      {nft.imageUrl && (
        <div className="relative w-full h-60 mb-4">
          <Image
            src={nft.imageUrl || "/placeholder.svg"}
            alt={`NFT ${nft.tokenId}`}
            layout="fill"
            objectFit="cover"
            className="rounded-lg pixelated"
          />
        </div>
      )}
      <div className="space-y-2">
        <h3 className="text-xl font-semibold pixel-font text-purple-400">{nft.name}</h3>
        <p className="text-sm text-gray-300 pixel-font line-clamp-2">{nft.description}</p>
        {nft.price !== "0" && <p className="text-sm text-green-400 pixel-font">Listed for: {nft.price} TLOS</p>}
      </div>
    </motion.div>
  )

  return (
    <div className="container mx-auto my-10 px-4 min-h-screen via-black to-blue-900 text-white">
      <BackgroundCollage />
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Link
          href="/"
          className="inline-flex items-center pixel-font text-lg mb-8 mt-8 hover:text-purple-400 transition-colors"
        >
          <ArrowLeft className="mr-2" />
          Back to Marketplace
        </Link>
        <h1 className="text-4xl sm:text-5xl font-bold mb-8 pixel-font mt-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          My NFT Collection
        </h1>
      </motion.div>

      {isLoading ? (
        <motion.div
          className="flex flex-col items-center justify-center mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Loader2 className="w-12 h-12 animate-spin text-purple-400" />
          <p className="text-center mt-4 pixel-font text-xl">Loading your NFTs...</p>
        </motion.div>
      ) : nfts.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.2 }}
        >
          {nfts.map(renderNFTCard)}
        </motion.div>
      ) : (
        <motion.div
          className="text-center mt-10 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="pixel-font text-2xl py-5 text-purple-400">You don't have any NFTs yet.</p>
          <Link href="/marketplace">
            <motion.button
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity pixel-font text-lg"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
            >
              Buy Your First NFT
            </motion.button>
          </Link>
        </motion.div>
      )}

      <AnimatePresence>
        {selectedNFT && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedNFT(null)}
          >
            <motion.div
              layoutId={`nft-${selectedNFT.tokenId}`}
              className="bg-gray-800 rounded-xl p-8 max-w-lg w-full border-4 border-purple-500"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
                onClick={() => setSelectedNFT(null)}
              >
                <X className="w-6 h-6" />
              </button>
              {selectedNFT.imageUrl && (
                <div className="relative w-full h-80 mb-4">
                  <Image
                    src={selectedNFT.imageUrl || "/placeholder.svg"}
                    alt={`NFT ${selectedNFT.tokenId}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg pixelated"
                  />
                </div>
              )}
              <h2 className="text-2xl font-bold mb-2 pixel-font text-purple-400">{selectedNFT.name}</h2>
              <div className="max-h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-700">
                <p className="text-gray-300 pixel-font">{selectedNFT.description}</p>
              </div>
              {selectedNFT.price !== "0" && <p className="text-green-400 pixel-font mt-2">Listed for: {selectedNFT.price} TLOS</p>}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
