'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Sparkles } from 'lucide-react'

interface NFT {
  id: number
  name: string
  description: string
  price: number
  image: string
}

const baseNFTs = [
  {
    id: 1,
    name: "Angel of Death",
    description: "A haunting pixel art depicting the ethereal Angel of Death, wings spread wide against a darkened sky, wielding a gleaming scythe.",
    image: "/assets/nft/1.png"
  },
  {
    id: 2,
    name: "Freeze",
    description: "An icy masterpiece capturing the moment of absolute zero, where time stands still and crystals form in mesmerizing patterns.",
    image: "/assets/nft/2.png"
  }
  // Add more NFTs here...
]

export default function Marketplace() {
  const [nfts, setNfts] = useState<NFT[]>([])
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  useEffect(() => {
    const nftsWithPrices = baseNFTs.map(nft => ({
      ...nft,
      price: parseFloat((Math.random() * 10 + 0.1).toFixed(2))
    }))
    setNfts(nftsWithPrices)
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center p-4 sm:p-8 max-w-6xl mx-auto bg-gradient-to-br from-purple-900 via-black to-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 pixel-font mt-20 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            NFT Marketplace
          </h1>
          <p className="text-gray-300 pixel-font text-sm sm:text-base">Collect Unique Digital Art</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12">
          <Link
            href="/my-collection"
            className="group relative px-6 py-3 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 pixel-font text-center"
          >
            <div className="absolute inset-0 w-3 bg-white transition-all duration-250 ease-out group-hover:w-full opacity-10"></div>
            <div className="relative flex items-center justify-center gap-2">
              <Sparkles size={16} />
              <span>My Collection</span>
            </div>
          </Link>

          <Link
            href="/nft-maker"
            className="group relative px-6 py-3 overflow-hidden rounded-xl bg-gradient-to-r from-green-500 to-green-600 pixel-font text-center"
          >
            <div className="absolute inset-0 w-3 bg-white transition-all duration-250 ease-out group-hover:w-full opacity-10"></div>
            <div className="relative flex items-center justify-center gap-2">
              <Sparkles size={16} />
              <span>Make Your Own</span>
            </div>
          </Link>
        </div>

        {/* NFT Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {nfts.map((nft) => (
            <div
              key={nft.id}
              className="group relative w-full max-w-xs mx-auto"
              onMouseEnter={() => setHoveredId(nft.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className={`relative bg-gray-900 rounded-2xl p-4 transform transition-all duration-300 ease-out
                  hover:scale-105 hover:-rotate-1 border border-gray-800 hover:border-purple-500
                  ${hoveredId === nft.id ? 'shadow-2xl shadow-purple-500/20' : 'shadow-xl'}
                `}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Image Section */}
                <div className="relative w-full h-48 sm:h-56 mb-4 transform group-hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl" />
                  <Image
                    src={nft.image}
                    alt={nft.name}
                    fill
                    priority={nft.id === 1}
                    className="object-cover rounded-xl"
                  />
                </div>

                {/* NFT Info */}
                <h2 className="text-lg sm:text-xl font-bold mb-2 pixel-font bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  {nft.name}
                </h2>

                <p className="text-gray-400 pixel-font text-sm line-clamp-3 mb-4">
                  {nft.description}
                </p>

                {/* Price and Buy Button */}
                <div className="border-t border-gray-800 pt-4 mt-auto">
                  <div className="flex flex-col sm:flex-row items-center justify-between">
                    <div className="pixel-font text-center sm:text-left mb-4 sm:mb-0">
                      <p className="text-sm text-gray-400">Current Price</p>
                      <p className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                        {nft.price ? `${nft.price} TLOS` : 'Loading...'}
                      </p>
                    </div>

                    <Link
                      href={`/marketplace/${nft.id}`}
                      className="relative px-4 py-2 w-full sm:w-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl pixel-font text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                    >
                      <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 rounded-xl transition-opacity" />
                      <span>Buy NFT</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
