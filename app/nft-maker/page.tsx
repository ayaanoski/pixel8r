'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import BackgroundCollage from '../components/BackgroundCollage'

const DynamicImage = dynamic(() => import('next/image'), { ssr: false })

export default function NFTMaker() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState<string | null>(null)
  const [isDeploying, setIsDeploying] = useState(false)
  const [deploymentStatus, setDeploymentStatus] = useState('')

  // Load image from URL params on the client side
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)
    const imageFromParams = searchParams.get('image')
    if (imageFromParams) {
      setImage(decodeURIComponent(imageFromParams))
    }
  }, [])

  // Dummy deployNFT function to simulate an error
  const deployNFT = () => {
    if (!name || !description || !price || !image) {
      alert('Please fill in all fields and upload an image before deploying.')
      return
    }

    setIsDeploying(true)
    setDeploymentStatus('Deploying NFT...')

    // Simulate the deployment process with a 3-second delay
    setTimeout(() => {
      setIsDeploying(false)
      setDeploymentStatus('Error deploying NFT: Not enough TLOS')
    }, 3000)
  }

  return (
    <div className="container mx-auto px-4">
      <BackgroundCollage />
      <h1 className="text-3xl font-bold mb-8 pixel-font neon-text mt-20">Create Your NFT</h1>
      <div className="max-w-md mx-auto neon-border p-6 rounded-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 pixel-font neon-text">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded pixel-font bg-black text-white"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-2 pixel-font neon-text">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border rounded pixel-font bg-black text-white"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block mb-2 pixel-font neon-text">Price (TLOS):</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-3 py-2 border rounded pixel-font bg-black text-white"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block mb-2 pixel-font neon-text">Image:</label>
          {!image && (
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={(e) => {
                if (typeof window === 'undefined') return
                const file = e.target.files?.[0]
                if (file) {
                  const reader = new FileReader()
                  reader.onload = (e) => {
                    setImage(e.target?.result as string)
                  }
                  reader.readAsDataURL(file)
                }
              }}
              className="w-full px-3 py-2 bg-gray-800 rounded-lg pixel-font text-white"
            />
          )}
          {image && (
            <div className="mt-2">
              <DynamicImage src={image} alt="NFT Preview" width={300} height={300} className="rounded" />
            </div>
          )}
        </div>
        <button
          onClick={deployNFT}
          disabled={isDeploying}
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded pixel-font neon-border disabled:opacity-50"
        >
          {isDeploying ? 'Deploying...' : 'Deploy NFT'}
        </button>
        {deploymentStatus && (
          <p className="mt-4 text-center pixel-font neon-text">{deploymentStatus}</p>
        )}
      </div>
    </div>
  )
}
