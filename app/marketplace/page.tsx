'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

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
  },
  {
    id: 3,
    name: "Rick and Morty",
    description: "Wubba lubba dub dub! A pixelated adventure featuring everyone's favorite dimension-hopping duo in their most bizarre situation yet.",
    image: "/assets/nft/3.png"
  },
  {
    id: 4,
    name: "Grumpy Sonic",
    description: "The world's fastest hedgehog having a seriously bad day. No chili dogs in sight, and he's not happy about it.",
    image: "/assets/nft/4.png"
  },
  {
    id: 5,
    name: "Pixel Puss",
    description: "A mischievous feline captured in perfect pixel form, plotting its next adventure with gleaming eyes and a swishing tail.",
    image: "/assets/nft/5.png"
  },
  {
    id: 6,
    name: "Deadpool",
    description: "The Merc with a Mouth in 8-bit glory, breaking the fourth wall and probably making a joke about being pixelated.",
    image: "/assets/nft/6.png"
  },
  {
    id: 7,
    name: "Chill Dog",
    description: "The coolest canine in the crypto world, wearing shades and living its best life without a care in the digital universe.",
    image: "/assets/nft/7.png"
  },
  {
    id: 8,
    name: "Pixel Hero Fireman",
    description: "A brave pixel firefighter ready to save the day, complete with classic gear and an unwavering commitment to duty.",
    image: "/assets/nft/8.png"
  },
  {
    id: 9,
    name: "Jotaro Kujo",
    description: "Yare yare daze... The legendary JoJo protagonist strikes his iconic pose in pixel perfect detail, Star Platinum lurking in the shadows.",
    image: "/assets/nft/9.png"
  },
  {
    id: 10,
    name: "Pixel Dragon",
    description: "A fearsome dragon rendered in stunning pixel art, its scales gleaming as it prepares to unleash its digital fury.",
    image: "/assets/nft/10.png"
  },
  {
    id: 11,
    name: "Skull Meme",
    description: "The internet's favorite skeletal reaction, now immortalized in pixel form. Perfect for when you literally can't even.",
    image: "/assets/nft/11.png"
  },
  {
    id: 12,
    name: "Ninja Turtle",
    description: "Cowabunga! A heroic half-shell warrior brings retro gaming vibes to the blockchain, pizza not included.",
    image: "/assets/nft/12.png"
  }
]

export default function Marketplace() {
  const [nfts, setNfts] = useState<NFT[]>([])

  useEffect(() => {
    // Generate prices on the client side only
    const nftsWithPrices = baseNFTs.map(nft => ({
      ...nft,
      price: parseFloat((Math.random() * 10 + 0.1).toFixed(2))
    }))
    setNfts(nftsWithPrices)
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 pixel-font">NFT Marketplace</h1>

      <div className="flex justify-between mb-8">
        <Link
          href="/my-collection"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded pixel-font transition-colors duration-300"
        >
          My Collection
        </Link>
        <Link
          href="/nft-maker"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded pixel-font transition-colors duration-300"
        >
          Make Your Own
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {nfts.map((nft) => (
          <div 
            key={nft.id} 
            className="border rounded-lg p-4 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-blue-500 flex flex-col h-[450px]"
          >
            <div className="relative w-full h-48 mb-4">
              <Image
                src={nft.image}
                alt={nft.name}
                fill
                priority={nft.id === 1}
                className="object-cover rounded-lg"
              />
            </div>
            
            <h2 className="text-xl font-bold mb-2 pixel-font">{nft.name}</h2>
            
            <p className="text-gray-600 mb-4 pixel-font line-clamp-3">{nft.description}</p>
            
            <div className="mt-auto">
              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold pixel-font">
                    {nft.price ? `${nft.price} TLOS` : 'Loading...'}
                  </p>
                  <Link
                    href={`/marketplace/${nft.id}`}
                    className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded pixel-font transition-colors duration-300"
                  >
                    Buy NFT
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}