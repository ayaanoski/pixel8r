// app/marketplace/[id]/page.tsx
'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface NFT {
  id: number
  name: string
  description: string
  price: number
  image: string
}

const mockNFTs: NFT[] = [
  {
    id: 1,
    name: "Angel of Death",
    description: "A haunting pixel art depicting the ethereal Angel of Death, wings spread wide against a darkened sky, wielding a gleaming scythe.",
    price: 6.89,
    image: "/assets/nft/1.png"
  },
  {
    id: 2,
    name: "Freeze",
    description: "An icy masterpiece capturing the moment of absolute zero, where time stands still and crystals form in mesmerizing patterns.",
    price: 4.12,
    image: "/assets/nft/2.png"
  },
  {
    id: 3,
    name: "Rick and Morty",
    description: "Wubba lubba dub dub! A pixelated adventure featuring everyone's favorite dimension-hopping duo in their most bizarre situation yet.",
    price: 3.32,
    image: "/assets/nft/3.png"
  },
  {
    id: 4,
    name: "Grumpy Sonic",
    description: "The world's fastest hedgehog having a seriously bad day. No chili dogs in sight, and he's not happy about it.",
    price: 7.45,
    image: "/assets/nft/4.png"
  },
  {
    id: 5,
    name: "Pixel Puss",
    description: "A mischievous feline captured in perfect pixel form, plotting its next adventure with gleaming eyes and a swishing tail.",
    price: 2.99,
    image: "/assets/nft/5.png"
  },
  {
    id: 6,
    name: "Deadpool",
    description: "The Merc with a Mouth in 8-bit glory, breaking the fourth wall and probably making a joke about being pixelated.",
    price: 8.55,
    image: "/assets/nft/6.png"
  },
  {
    id: 7,
    name: "Chill Dog",
    description: "The coolest canine in the crypto world, wearing shades and living its best life without a care in the digital universe.",
    price: 5.10,
    image: "/assets/nft/7.png"
  },
  {
    id: 8,
    name: "Pixel Hero Fireman",
    description: "A brave pixel firefighter ready to save the day, complete with classic gear and an unwavering commitment to duty.",
    price: 9.30,
    image: "/assets/nft/8.png"
  },
  {
    id: 9,
    name: "Jotaro Kujo",
    description: "Yare yare daze... The legendary JoJo protagonist strikes his iconic pose in pixel perfect detail, Star Platinum lurking in the shadows.",
    price: 6.75,
    image: "/assets/nft/9.png"
  },
  {
    id: 10,
    name: "Pixel Dragon",
    description: "A fearsome dragon rendered in stunning pixel art, its scales gleaming as it prepares to unleash its digital fury.",
    price: 4.87,
    image: "/assets/nft/10.png"
  },
  {
    id: 11,
    name: "Skull Meme",
    description: "The internet's favorite skeletal reaction, now immortalized in pixel form. Perfect for when you literally can't even.",
    price: 3.14,
    image: "/assets/nft/11.png"
  },
  {
    id: 12,
    name: "Ninja Turtle",
    description: "Cowabunga! A heroic half-shell warrior brings retro gaming vibes to the blockchain, pizza not included.",
    price: 8.99,
    image: "/assets/nft/12.png"
  }
]

export default function NFTPage() {
  const params = useParams()
  const id = typeof params.id === 'string' ? parseInt(params.id) : null
  const [nft, setNFT] = useState<NFT | null>(null)

  useEffect(() => {
    if (id) {
      const selectedNFT = mockNFTs.find((n) => n.id === id)
      setNFT(selectedNFT || null)
    }
  }, [id])

  if (!nft) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold mb-6 pixel-font text-red-600">NFT Not Found</h1>
        <Link 
          href="/marketplace"
          className="bg-gradient-to-r from-red-500 to-yellow-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg pixel-font hover:opacity-90 transition duration-300"
        >
          Back to Marketplace
        </Link>
      </div>
    )
  }

  const handleBuyNFT = () => {
    alert(`Processing purchase of ${nft.name} for ${nft.price} TLOS`)
  }

  return (
    <div className="container mt-20 mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <nav className="mb-8">
          <Link 
            href="/marketplace"
            className="text-purple-500 hover:text-purple-700 pixel-font flex items-center gap-2"
          >
            ← Back to Marketplace
          </Link>
        </nav>

        <div className="flex flex-col md:flex-row gap-10 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 p-8 rounded-lg shadow-2xl">
          <div className="md:w-1/2">
            <Image
              src={nft.image}
              alt={nft.name}
              width={500}
              height={500}
              className="rounded-lg shadow-xl w-full h-auto object-cover border-4 border-indigo-200"
              priority
            />
          </div>
          
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-6 pixel-font text-purple-700">{nft.name}</h1>
            <p className="text-gray-700 mb-8 pixel-font text-lg leading-relaxed">{nft.description}</p>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600 pixel-font">Current Price</span>
                <span className="text-3xl font-bold pixel-font text-green-600">{nft.price} TLOS</span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-500 pixel-font">
                <span>Token ID: #{nft.id}</span>
                <span>Available: 1 of 1</span>
              </div>
            </div>
            
            <button
              onClick={handleBuyNFT}
              className="w-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white font-bold py-4 px-6 rounded-lg pixel-font shadow-xl hover:opacity-90 transition duration-300 flex items-center justify-center gap-3"
            >
              <span>Buy Now</span>
              <span className="text-sm">({nft.price} TLOS)</span>
            </button>
            
            <div className="mt-8 p-6 bg-indigo-50 rounded-lg border-l-4 border-purple-500">
              <h2 className="text-2xl font-bold mb-4 pixel-font text-indigo-800">NFT Details</h2>
              <div className="space-y-3 text-gray-600 pixel-font">
                <p>• Unique pixel art collectible</p>
                <p>• Stored on the Telos blockchain</p>
                <p>• Instant transfer on purchase</p>
                <p>• Full ownership rights included</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
