'use client'

import { useState, useEffect } from 'react'
import BackgroundCollage from '../components/BackgroundCollage'

export default function MyCollection() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate a delay to show loading message
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    // Clean up the timer
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="container mx-auto px-4">
      <BackgroundCollage />
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 pixel-font mt-36 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">My NFT Collection</h1>
      {isLoading ? (
        <p className="text-center pixel-font">Loading your NFTs...</p>
      ) : (
        <p className="text-center pixel-font">You haven't created any NFTs yet.</p>
      )}
    </div>
  )
}
