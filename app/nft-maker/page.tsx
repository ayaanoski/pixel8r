'use client'

import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import PixelNFTABI from '../../build/contracts/PixelNFT.json'
import BackgroundCollage from '../components/BackgroundCollage'

const contractAddress = process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS

export default function NFTMaker() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState<string | null>(null)
  const [isDeploying, setIsDeploying] = useState(false)
  const [deploymentStatus, setDeploymentStatus] = useState('')
  const searchParams = useSearchParams()

  useEffect(() => {
    const imageFromParams = searchParams.get('image')
    if (imageFromParams) {
      setImage(decodeURIComponent(imageFromParams))
    }
  }, [searchParams])

  const deployNFT = async () => {
    if (!window.ethereum) {
      alert('Please install MetaMask to mint NFTs')
      return
    }

    if (!name || !description || !price || !image) {
      alert('Please fill in all fields and upload an image before deploying.')
      return
    }

    setIsDeploying(true)
    setDeploymentStatus('Deploying NFT...')

    try {
      const provider = new ethers.BrowserProvider(window.ethereum)
      await provider.send('eth_requestAccounts', [])
      const signer = await provider.getSigner()

      const response = await fetch('/api/nft', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, description, image, price }),
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`API error: ${response.status} ${response.statusText}\n${errorText}`)
      }

      const data = await response.json()

      if (data.success) {
        const contract = new ethers.Contract(contractAddress!, PixelNFTABI.abi, signer)
        const tx = await contract.mintNFT(await signer.getAddress(), data.tokenURI)
        await tx.wait()

        setDeploymentStatus(`NFT minted successfully! Token ID: ${data.tokenId}`)
      } else {
        throw new Error(data.error || 'Failed to mint NFT')
      }
    } catch (error: any) {
      console.error('Error deploying NFT:', error)
      setDeploymentStatus(`Error deploying NFT: ${error.message}`)
    } finally {
      setIsDeploying(false)
    }
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
              <Image src={image} alt="NFT Preview" width={300} height={300} className="rounded" />
            </div>
          )}
        </div>
        <button
          onClick={deployNFT}
          disabled={isDeploying || !name || !description || !price || !image}
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
