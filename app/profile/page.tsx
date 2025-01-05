'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ethers } from 'ethers'
import WalletCard from '../components/WalletCard'
import BackgroundCollage from '../components/BackgroundCollage'

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
        setCustomAvatar(event.target?.result as string)
        setAvatar(event.target?.result as string)
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

  return (
    <div className="flex flex-col items-center p-8 max-w-4xl mx-auto">
      <BackgroundCollage />
      <h1 className="text-4xl font-bold mb-8 pixel-font neon-text">Profile</h1>
      {!isEditing ? (
        <div className="w-full max-w-2xl mt-20">
          <WalletCard username={username} avatar={avatar} walletAddress={walletAddress} />
          <div className="mt-8 space-y-4 flex flex-col items-center">
            <button onClick={handleEdit} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg pixel-font neon-border transition-all duration-300 w-full max-w-xs">
              Edit Profile
            </button>
            {!walletAddress ? (
              <div className="w-full max-w-xs">
                <button
                  onClick={connectWallet}
                  disabled={isLoading}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg pixel-font neon-border transition-all duration-300 w-full disabled:opacity-50"
                >
                  {isLoading ? 'Connecting...' : 'Connect Wallet'}
                </button>
                {errorMessage && (
                  <p className="text-red-500 pixel-font text-sm mt-2">{errorMessage}</p>
                )}
              </div>
            ) : (
              <button
                onClick={disconnectWallet}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg pixel-font neon-border transition-all duration-300 w-full max-w-xs"
              >
                Disconnect Wallet
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg neon-border">
          <div className="mb-6">
            <label htmlFor="username" className="block mb-2 pixel-font neon-text">Username:</label>
            <input
              type="text"
              id="username"
              value={editedUsername}
              onChange={handleUsernameChange}
              className="border rounded px-3 py-2 w-full pixel-font bg-black text-white"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="avatar" className="block mb-2 pixel-font neon-text">Avatar:</label>
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              {['/assets/1.png', '/assets/2.png', '/assets/3.png', '/assets/4.png'].map((avatarOption, index) => (
                <div key={index} className="cursor-pointer">
                  <Image
                    src={avatarOption}
                    alt={`Avatar ${index + 1}`}
                    width={80}
                    height={80}
                    className={`rounded-full transition-all duration-300 ${avatar === avatarOption ? 'border-4 border-blue-500 scale-110' : 'hover:scale-105'}`}
                    onClick={() => handleAvatarSelect(avatarOption)}
                  />
                </div>
              ))}
              {customAvatar && (
                <Image
                  src={customAvatar}
                  alt="Custom Avatar"
                  width={80}
                  height={80}
                  className={`rounded-full transition-all duration-300 ${avatar === customAvatar ? 'border-4 border-blue-500 scale-110' : 'hover:scale-105'}`}
                  onClick={() => handleAvatarSelect(customAvatar)}
                />
              )}
            </div>
            <input type="file" onChange={handleCustomAvatarUpload} className="mt-2 text-white pixel-font" />
          </div>
          <button onClick={handleSave} className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg pixel-font neon-border transition-all duration-300 w-full">
            Save Changes
          </button>
        </div>
      )}
    </div>
  )
}

