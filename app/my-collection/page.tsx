'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ethers } from 'ethers'
import PixelNFTABI from '../../build/contracts/PixelNFT.json'
import BackgroundCollage from '../components/BackgroundCollage'

// Make sure contractAddress is defined and handle potential undefined case
const contractAddress = process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS
if (!contractAddress) {
  throw new Error('Contract address not set in environment variables')
}

interface NFT {
  id: number
  name: string
  description: string
  price: string
  image: string
}

export default function MyCollection() {
  const [myNFTs, setMyNFTs] = useState<NFT[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchMyNFTs()
  }, [])

  const fetchMyNFTs = async () => {
    if (!window.ethereum) {
      setError('Please install MetaMask to view your NFTs')
      setIsLoading(false)
      return
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum)
      await provider.send("eth_requestAccounts", [])
      const signer = await provider.getSigner()
      const contract = new ethers.Contract(
        contractAddress,

        PixelNFTABI.abi,
        signer
      )
      const userAddress = await signer.getAddress()

      // Get past NFTMinted events where the creator is the current user
      const filter = contract.filters.NFTMinted(userAddress)
      const events = await contract.queryFilter(filter)

      const nfts: NFT[] = []

      for (const event of events) {
        // Properly type and access event arguments
        const eventArgs = (event as ethers.EventLog).args
        if (!eventArgs) continue

        const tokenId = eventArgs[1] // Token ID is the second argument
        
        try {
          // Check if the current user still owns the NFT
          const currentOwner = await contract.ownerOf(tokenId)
          if (currentOwner.toLowerCase() === userAddress.toLowerCase()) {
            const tokenURI = await contract.tokenURI(tokenId)
            const price = await contract.getPrice(tokenId)
            
            // Fetch metadata from IPFS
            const response = await fetch(tokenURI.replace('ipfs://', 'https://ipfs.io/ipfs/'))
            const metadata = await response.json()

            nfts.push({
              id: tokenId.toString(),
              name: metadata.name,
              description: metadata.description,
              price: ethers.formatEther(price),
              image: metadata.image.replace('ipfs://', 'https://ipfs.io/ipfs/')
            })
          }
        } catch (error) {
          console.warn(`Error fetching NFT ${tokenId}:`, error)
          continue
        }
      }

      setMyNFTs(nfts)
    } catch (error) {
      console.error('Error fetching NFTs:', error)
      setError('Error fetching your NFTs. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const updateNFTPrice = async (tokenId: number, newPrice: string) => {
    if (!contractAddress) {
      setError('Contract address not configured')
      return
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum)
      const signer = await provider.getSigner()
      const contract = new ethers.Contract(
        contractAddress,
        PixelNFTABI.abi,
        signer
      )
      
      const priceInWei = ethers.parseEther(newPrice)
      const tx = await contract.updatePrice(tokenId, priceInWei)
      await tx.wait()
      
      // Refresh NFTs after price update
      await fetchMyNFTs()
    } catch (error) {
      console.error('Error updating price:', error)
      alert('Failed to update price. Please try again.')
    }
  }

  // Rest of your component remains the same...
  return (
    <div className="container mx-auto px-4">
      <BackgroundCollage />
      <h1 className="text-3xl font-bold mt-20 mb-8 pixel-font">My NFT Collection</h1>
      {isLoading ? (
        <p className="text-center pixel-font">Loading your NFTs...</p>
      ) : myNFTs.length === 0 ? (
        <p className="text-center pixel-font">You haven't created any NFTs yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {myNFTs.map((nft) => (
            <div key={nft.id} className="border rounded-lg p-4 shadow-md">
              <Image 
                src={nft.image} 
                alt={nft.name} 
                width={300} 
                height={300} 
                className="w-full h-48 object-cover mb-4" 
              />
              <h2 className="text-xl font-bold mb-2 pixel-font">{nft.name}</h2>
              <p className="text-gray-600 mb-2 pixel-font">{nft.description}</p>
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold pixel-font">{nft.price} TLOS</p>
                <button
                  onClick={() => {
                    const newPrice = prompt('Enter new price in TLOS:')
                    if (newPrice) {
                      updateNFTPrice(Number(nft.id), newPrice)
                    }
                  }}
                  className="bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded pixel-font"
                >
                  Update Price
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}