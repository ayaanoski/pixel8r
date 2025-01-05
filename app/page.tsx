'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const TypewriterText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[index])
        setIndex((prev) => prev + 1)
      }, 100)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => {
        setDisplayText('')
        setIndex(0)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [index, text])

  return (
    <span className="inline-block min-h-[3em]">
      {displayText}
      <span className="animate-blink">|</span>
    </span>
  )
}

const BackgroundCollage = () => {
  const images = Array.from({ length: 12 }, (_, i) => i + 1)
  
  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Top row */}
      <motion.div 
        className="absolute top-[-10%] left-[-10%] w-[120%] h-[40%] flex justify-around"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      >
        {images.slice(0, 4).map((num) => (
          <div key={`top-${num}`} className="relative w-64 h-64 transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
            <Image
              src={`/assets/nft/${num}.png`}
              alt={`NFT ${num}`}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </motion.div>

      {/* Middle row */}
      <motion.div 
        className="absolute top-[30%] left-[-5%] w-[110%] h-[40%] flex justify-around"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 1, delay: 0.1 }}
      >
        {images.slice(4, 8).map((num) => (
          <div key={`middle-${num}`} className="relative w-64 h-64 transform rotate-[5deg] hover:rotate-0 transition-transform duration-500">
            <Image
              src={`/assets/nft/${num}.png`}
              alt={`NFT ${num}`}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </motion.div>

      {/* Bottom row */}
      <motion.div 
        className="absolute top-[70%] left-[-10%] w-[120%] h-[40%] flex justify-around"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1.0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        {images.slice(8, 12).map((num) => (
          <div key={`bottom-${num}`} className="relative w-64 h-64 transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
            <Image
              src={`/assets/nft/${num}.png`}
              alt={`NFT ${num}`}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </motion.div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
    </div>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center relative overflow-hidden bg-black">
      <BackgroundCollage />
      
      <motion.h1
        className="text-4xl md:text-6xl mt-20 font-bold mb-4 pixel-font neon-purple-text relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to Pixel8r
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl mb-8 pixel-font neon-text relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <TypewriterText text="Transform your photos into awesome 8-bit pixelated art!" />
      </motion.p>

      <div className="space-y-4 relative z-10">
        <Link href="/pixelate" className="block">
          <motion.button
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg pixel-font transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </Link>
        <Link href="/marketplace" className="block">
          <motion.button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg pixel-font transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Marketplace
          </motion.button>
        </Link>
      </div>

      <motion.div
        className="mt-12 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-xl md:text-2xl font-bold mb-4 pixel-font neon-text">How It Works</h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {['Upload', 'Pixelate', 'Mint NFT'].map((step, index) => (
            <motion.div
              key={step}
              className="w-64 h-64 relative bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-2xl border-2 border-purple-500/30 p-6 flex flex-col items-center justify-center group hover:border-purple-500 transition-colors duration-300"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
            >
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-purple-500/5 rounded-lg filter blur-md group-hover:bg-purple-500/10 transition-all duration-300" />
              
              {/* Step number */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center border border-purple-500/30">
                <p className="pixel-font text-sm text-purple-300">{index + 1}</p>
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 pixel-font neon-purple-text text-center relative">
                {step}
              </h3>
              
              {/* Add relevant icons or descriptions */}
              <p className="pixel-font text-sm text-gray-300 text-center mb-4">
                {index === 0 && "Choose your image to transform"}
                {index === 1 && "Convert to pixel art style"}
                {index === 2 && "Create your unique NFT"}
              </p>
              
              {/* Bottom border accent */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-purple-500/30 rounded-t-lg group-hover:w-2/3 group-hover:bg-purple-500/50 transition-all duration-300" />
            </motion.div>
          ))}
</div>
      </motion.div>
    </div>
  )
}
