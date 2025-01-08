// Profile.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ethers } from 'ethers'
import WalletCard from '../components/WalletCard'
import BackgroundCollage from '../components/BackgroundCollage'
import html2canvas from 'html2canvas'
import { motion } from 'framer-motion'

declare global {
  interface Window {
    ethereum?: any
  }
}

export default function Profile() {
  const [username, setUsername] = useState<string>('PixelArtist')
  const [avatar, setAvatar] = useState<string>('/assets/1.png')
  const [walletAddress, setWalletAddress] = useState<string>('')
  const [isEditing, setIsEditing] = useState(false)
  const [editedUsername, setEditedUsername] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [customAvatar, setCustomAvatar] = useState<string | null>(null)

  const walletCardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUsername = localStorage.getItem('username') || 'PixelArtist'
      const storedAvatar = localStorage.getItem('avatar') || '/assets/1.png'
      setUsername(storedUsername)
      setAvatar(storedAvatar)
      setEditedUsername(storedUsername)
    }
    checkWalletConnection()
  }, [])

  const checkWalletConnection = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum)
        const accounts = await provider.listAccounts()
        if (accounts.length > 0) {
          setWalletAddress(accounts[0].address)
        }
      } catch (error) {
        console.error('Error checking wallet connection:', error)
      }
    }
  }

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      setIsLoading(true)
      setErrorMessage('')
      try {
        const provider = new ethers.BrowserProvider(window.ethereum)
        const accounts = await provider.send('eth_requestAccounts', [])
        if (accounts.length > 0) {
          setWalletAddress(accounts[0])
        }
      } catch (error: any) {
        setErrorMessage(`Failed to connect wallet: ${error.message || 'Unknown error'}`)
      } finally {
        setIsLoading(false)
      }
    } else {
      setErrorMessage('MetaMask is not installed. Please install MetaMask and try again.')
    }
  }

  const disconnectWallet = () => {
    setWalletAddress('')
    setErrorMessage('')
  }

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedUsername(e.target.value)
  }

  const handleAvatarSelect = (selectedAvatar: string) => {
    setAvatar(selectedAvatar)
  }

  const handleCustomAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const result = event.target?.result as string
        setCustomAvatar(result)
        setAvatar(result)
      }
      reader.readAsDataURL(e.target.files[0])
    }
  }

  const handleEdit = () => {
    setIsEditing(true)
    setEditedUsername(username)
  }

  const handleSave = () => {
    setUsername(editedUsername)
    localStorage.setItem('username', editedUsername)
    localStorage.setItem('avatar', avatar)
    setIsEditing(false)
  }

  // Download WalletCard as PNG
  const downloadWalletCard = async () => {
    if (walletCardRef.current) {
      try {
        const canvas = await html2canvas(walletCardRef.current, {
          backgroundColor: null, // Ensures transparent background
          scale: 2, // High resolution
        })
        const image = canvas.toDataURL('image/png')
        const link = document.createElement('a')
        link.href = image
        link.download = 'wallet-card.png'
        link.click()
      } catch (error) {
        console.error('Error generating image:', error)
      }
    }
  }

  return (
    <div className="flex flex-col items-center p-4 sm:p-8 max-w-4xl mx-auto">
      <BackgroundCollage />
      <h1 className="text-3xl mt-36 sm:text-4xl font-bold mb-4 sm:mb-2 pixel-font neon-text">Profile</h1>
      {!isEditing ? (
        <div className="w-full max-w-2xl mt-4 sm:mt-10">
          <WalletCard
            ref={walletCardRef}
            username={username}
            avatar={avatar}
            walletAddress={walletAddress}
          />
          <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 flex flex-col items-center">
            <motion.button
              onClick={handleEdit}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-3 px-6 rounded-full pixel-font transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg hover:from-cyan-500 hover:to-blue-500"
              whileHover={{ scale: 1.1, rotate: 1 }}
              whileTap={{ scale: 0.95, rotate: -1 }}
            >
              Edit Profile
            </motion.button>
            {!walletAddress ? (
              <div className="w-full max-w-xs">
                <button
                  onClick={connectWallet}
                  disabled={isLoading}
                  className="bg-gradient-to-r from-green-500 to-green-700 text-white font-bold py-3 px-6 ml-5 rounded-full pixel-font transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg hover:from-green-700 hover:to-green-500"

                >
                  {isLoading ? 'Connecting...' : 'Connect Wallet'}
                </button>
                {errorMessage && (
                  <p className="text-red-500 pixel-font text-sm mt-2 break-words">{errorMessage}</p>
                )}
              </div>
            ) : (
              <motion.button
                onClick={disconnectWallet}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-full pixel-font transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg hover:from-pink-500 hover:to-purple-500"
                whileHover={{ scale: 1.1, rotate: 1 }}
                whileTap={{ scale: 0.95, rotate: -1 }}
              >
                Disconnect Wallet
              </motion.button>
            )}
            <motion.button
              onClick={downloadWalletCard}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-3 px-6 rounded-full pixel-font transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg hover:from-cyan-500 hover:to-blue-500"
              whileHover={{ scale: 1.1, rotate: 1 }}
              whileTap={{ scale: 0.95, rotate: -1 }}
            >
              Download Wallet Card
            </motion.button>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-md bg-gray-800 p-4 sm:p-8 rounded-lg shadow-lg neon-border mt-8 sm:mt-0">
          <div className="mb-4 sm:mb-6">
            <label htmlFor="username" className="block mb-2 pixel-font neon-text">
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={editedUsername}
              onChange={handleUsernameChange}
              className="border rounded px-3 py-2 w-full pixel-font bg-black text-white"
            />
          </div>
          <div className="mb-4 sm:mb-6">
            <label htmlFor="avatar" className="block mb-2 pixel-font neon-text">
              Avatar:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-4">
              {['/assets/1.png', '/assets/2.png', '/assets/3.png', '/assets/4.png'].map(
                (avatarOption, index) => (
                  <div key={index} className="cursor-pointer flex justify-center">
                    <Image
                      src={avatarOption}
                      alt={`Avatar ${index + 1}`}
                      width={80}
                      height={80}
                      className={`rounded-full transition-all duration-300 ${
                        avatar === avatarOption
                          ? 'border-4 border-blue-500 scale-110'
                          : 'hover:scale-105'
                      }`}
                      onClick={() => handleAvatarSelect(avatarOption)}
                    />
                  </div>
                )
              )}
              {customAvatar && (
                <div className="cursor-pointer flex justify-center">
                  <Image
                    src={customAvatar}
                    alt="Custom Avatar"
                    width={80}
                    height={80}
                    className={`rounded-full transition-all duration-300 ${
                      avatar === customAvatar ? 'border-4 border-blue-500 scale-110' : 'hover:scale-105'
                    }`}
                    onClick={() => handleAvatarSelect(customAvatar)}
                  />
                </div>
              )}
            </div>
            <input
              type="file"
              onChange={handleCustomAvatarUpload}
              className="mt-2 text-white pixel-font text-sm sm:text-base w-full"
            />
          </div>
          <motion.button
            onClick={handleSave}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-full pixel-font transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg hover:from-pink-500 hover:to-purple-500"
          whileHover={{ scale: 1.1, rotate: 1 }}
          whileTap={{ scale: 0.95, rotate: -1 }}
          >
            Save Changes
          </motion.button>
        </div>
      )}
    </div>
  )
}
