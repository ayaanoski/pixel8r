"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Sparkles, Search, Filter, Info } from "lucide-react"
import { useMarketplaceContext } from "@/context/MarketplaceProvider"
import { formatIPFSUrl } from "@/lib/ipfs"
import { motion } from "framer-motion"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface NFT {
  tokenId: number | string
  name: string
  description: string
  price: number | string
  image: string
  seller: string
  nftAddress: string
  tokenURI: string
}

export default function Marketplace() {
  const [nfts, setNfts] = useState<NFT[]>([])
  const [filteredNfts, setFilteredNfts] = useState<NFT[]>([])
  const [isLoadingNFTs, setIsLoadingNFTs] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("recent")

  const { account, connectWallet, isLoading: isLoadingWallet, getAllListings, buyNFT } = useMarketplaceContext()

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        setIsLoadingNFTs(true)
        setError(null)
        const listings = await getAllListings()

        const updatedListings: NFT[] = []

        for (const listing of listings) {
          try {
            const ipfsHash = await fetch(formatIPFSUrl(listing.tokenURI))
            const metaDataUrl = ipfsHash.url
            const response = await fetch(metaDataUrl)

            if (!response.ok) {
              throw new Error(`Failed to fetch NFT metadata: ${response.statusText}`)
            }

            const nftData = await response.json()

            updatedListings.push({
              tokenId: listing.tokenId,
              name: nftData.name,
              description: nftData.description,
              image: formatIPFSUrl(nftData.image),
              price: listing.price,
              seller: listing.seller,
              nftAddress: listing.nftAddress,
              tokenURI: listing.tokenURI,
            })
          } catch (err) {
            console.error(`Error processing NFT ${listing.tokenId}:`, err)
            // Continue with other NFTs even if one fails
          }
        }

        setNfts(updatedListings)
        setFilteredNfts(updatedListings)
      } catch (error) {
        console.error("Error fetching NFT listings:", error)
        setError("Failed to load NFTs. Please try again later.")
      } finally {
        setIsLoadingNFTs(false)
      }
    }

    fetchNFTs()
  }, [account])

  useEffect(() => {
    const filtered = nfts.filter(
      (nft) =>
        nft.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        nft.description.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === "price_asc") return Number(a.price) - Number(b.price)
      if (sortBy === "price_desc") return Number(b.price) - Number(a.price)
      // For "recent", assume the order in the array is already from most recent to oldest
      return 0
    })

    setFilteredNfts(sorted)
  }, [nfts, searchTerm, sortBy])

  const handleConnectWallet = async () => {
    try {
      await connectWallet()
    } catch (error) {
      console.error("Failed to connect wallet:", error)
    }
  }

  const truncatePrice = (price: number | string) => {
    const numPrice = typeof price === "string" ? Number.parseFloat(price) : price
    return numPrice.toFixed(2)
  }

  if (!account) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-900 text-white flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center p-8 rounded-2xl bg-gray-900/50 backdrop-blur-md"
        >
          <p className="text-gray-400 mb-4 pixel-font">Please connect your wallet to view NFTs</p>
          <button
            onClick={handleConnectWallet}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl pixel-font hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
          >
            Connect Wallet
          </button>
        </motion.div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-900 text-white flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center p-8 rounded-2xl bg-gray-900/50 backdrop-blur-md"
        >
          <p className="text-red-400 mb-4 pixel-font">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl pixel-font hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
          >
            Try Again
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
        >
          <Link
            href="/my-collection"
            className="group relative px-6 py-3 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 pixel-font text-sm sm:text-base"
          >
            <div className="absolute inset-0 w-3 bg-white transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
            <div className="relative flex items-center gap-2">
              <Sparkles size={16} />
              <span>My Collection</span>
            </div>
          </Link>

          <Link
            href="/nft-maker"
            className="group relative px-6 py-3 overflow-hidden rounded-xl bg-gradient-to-r from-green-500 to-green-600 pixel-font text-sm sm:text-base"
          >
            <div className="absolute inset-0 w-3 bg-white transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
            <div className="relative flex items-center gap-2">
              <Sparkles size={16} />
              <span>Make Your Own</span>
            </div>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4"
        >
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search NFTs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-xl bg-gray-800 text-white pixel-font focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
          <div className="flex items-center gap-2">
            <Filter size={20} className="text-gray-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-xl bg-gray-800 text-white pixel-font focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="recent">Most Recent</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
            </select>
          </div>
        </motion.div>

        {isLoadingNFTs ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : filteredNfts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 pixel-font">No NFTs available at the moment</p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {filteredNfts.map((nft, index) => (
              <motion.div
                key={nft.tokenId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
                onMouseEnter={() => setHoveredId(nft.tokenId)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div
                  className={`relative bg-gray-900 rounded-2xl p-6 transform transition-all duration-300 ease-out
                    hover:scale-105 hover:-rotate-1
                    border border-gray-800 hover:border-purple-500
                    ${hoveredId === nft.tokenId ? "shadow-2xl shadow-purple-500/20" : "shadow-xl"}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative w-full h-48 sm:h-56 mb-6 transform group-hover:scale-105 transition-transform duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl" />
                    <Image
                      src={nft.image || "/placeholder.svg"}
                      alt={nft.name}
                      fill
                      priority={index < 6}
                      className="object-cover rounded-xl"
                    />
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold mb-3 pixel-font bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 truncate">
                    {nft.name}
                  </h2>

                  <p className="text-gray-400 pixel-font text-sm sm:text-base line-clamp-3 mb-6 h-18">
                    {nft.description}
                  </p>

                  <div className="border-t border-gray-800 pt-6 mt-auto">
  <div className="flex flex-col justify-between gap-4">
    {/* Current Price Section */}
    <div className="pixel-font">
      <p className="text-xs sm:text-sm text-gray-400">Current Price</p>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div className="flex items-center cursor-pointer">
              <p className="text-2xl sm:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 truncate max-w-[160px]">
                {`${truncatePrice(nft.price)} TLOS`}
              </p>
              <Info size={18} className="ml-2 text-gray-400 transition-all duration-200 hover:text-purple-300" />
            </div>
          </TooltipTrigger>
          <TooltipContent side="top" align="center" className="bg-gray-800 text-white text-sm p-2 rounded-lg shadow-lg">
            <p>{`${nft.price} TLOS`}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>

    {/* Buy NFT Button */}
    <Link
      href={`/marketplace/${nft.tokenId}`}
      className="relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl pixel-font text-sm sm:text-base font-semibold text-white transform transition-all duration-300 
        hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 focus:ring-4 focus:ring-purple-500/50"
    >
      <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 rounded-xl transition-opacity" />
      <span className="relative z-10 flex items-center justify-center w-full">Buy NFT</span>
    </Link>
  </div>
</div>

                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}

