"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import BackgroundCollage from "@/app/components/BackgroundCollage"
import { motion } from "framer-motion"
import { Sparkles, Upload } from "lucide-react"
import { formatIPFSUrl, uploadMetadataToIPFS, uploadToIPFS } from "@/lib/ipfs"
import { useMarketplaceContext } from "@/context/MarketplaceProvider"
import DeploymentStatus from "@/app/components/DeploymentStatus"

export default function NFTMaker() {
  const router = useRouter()
  // State variables
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [isDeploying, setIsDeploying] = useState(false)
  const [deploymentStatus, setDeploymentStatus] = useState("")
  const [isHovered, setIsHovered] = useState(false)

  const { listNFT, mintNFT } = useMarketplaceContext()

  // Load image from URL params if available
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)
    const imageFromParams = searchParams.get("image")
    if (imageFromParams) {
      setImage(decodeURIComponent(imageFromParams))
      setImagePreview(decodeURIComponent(imageFromParams))
    }
  }, [])

  // Handle image upload and preview
  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      setImage(file)
      const reader = new FileReader()
      reader.onload = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  // NFT deployment function
  const deployNFT = async () => {
    if (!name || !description || !price || !image) {
      alert("Please fill in all fields and upload an image before deploying.")
      return
    }

    setIsDeploying(true)
    setDeploymentStatus("Uploading image to IPFS...")

    try {
      // Step 1: Upload image to IPFS
      const imageIPFSUrl = await uploadToIPFS(image)
      setDeploymentStatus("Creating metadata...")

      // Step 2: Create metadata object
      const metadata = {
        name,
        description,
        image: imageIPFSUrl,
        attributes: [{ trait_type: "Price", value: `${price} TLOS` }],
      }

      // Step 3: Upload metadata to IPFS
      setDeploymentStatus("Uploading metadata to IPFS...")
      const metadataIPFSUrl = await uploadMetadataToIPFS(metadata)
      setDeploymentStatus("Minting NFT...")

      // Step 4: Mint the NFT
      const { tokenId, nftAddress } = await mintNFT(metadataIPFSUrl)
      console.log("NFT minted:", { tokenId, nftAddress })

      // Step 5: List the NFT
      setDeploymentStatus("Listing NFT...")
      await listNFT(nftAddress, tokenId, price)

      setDeploymentStatus("NFT successfully created and listed!")

      // Redirect to marketplace after a short delay
      setTimeout(() => {
        router.push("/marketplace")
      }, 3000)
    } catch (error) {
      console.error("Error deploying NFT:", error)
      setIsDeploying(false)
      setDeploymentStatus(`Error deploying NFT: ${error.message}`)
    }
  }

  return (
    <div className="min-h-screen overflow-hidden relative w-full">
      <BackgroundCollage />

      {/* Title */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-5xl mt-36 font-bold text-center pixel-font text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 pt-20 mb-12"
      >
        Create Your NFT
        <Sparkles className="inline-block ml-4 text-purple-400" />
      </motion.h1>

      {/* NFT Maker Form */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto backdrop-blur-lg bg-black/30 p-8 rounded-xl shadow-2xl"
        style={{
          transform: isHovered ? "translateZ(20px)" : "translateZ(0)",
          transition: "transform 0.3s ease-out",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="space-y-6">
          {/* Image upload and preview section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Image upload */}
            <motion.div
              className="form-group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <label className="block mb-2 pixel-font text-purple-400">Upload Image:</label>
              <input
                type="file"
                onChange={handleImageUpload}
                disabled={isDeploying}
                className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-500/30 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 text-white pixel-font transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </motion.div>

            {/* Image preview in 3D card */}
            <motion.div
              className="relative w-full h-64 bg-black/50 border border-purple-500/30 rounded-lg overflow-hidden shadow-lg flex items-center justify-center"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ duration: 0.5 }}
            >
              {imagePreview ? (
                <img
                  src={imagePreview || "/placeholder.svg"}
                  alt="NFT Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center text-purple-400 pixel-font">
                  <Upload size={48} className="mx-auto mb-2" />
                  <p>Your NFT image will appear here</p>
                </div>
              )}
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name input */}
            <motion.div
              className="form-group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <label className="block mb-2 pixel-font text-purple-400">Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isDeploying}
                className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-500/30 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 text-white pixel-font transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Enter NFT name"
              />
            </motion.div>

            {/* Price input */}
            <motion.div
              className="form-group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <label className="block mb-2 pixel-font text-purple-400">Price (TLOS):</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                disabled={isDeploying}
                className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-500/30 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 text-white pixel-font transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Enter NFT price"
              />
            </motion.div>
          </div>

          {/* Description input */}
          <motion.div
            className="form-group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <label className="block mb-2 pixel-font text-purple-400">Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              disabled={isDeploying}
              className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-500/30 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 text-white pixel-font transition-all duration-300 h-32 disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="Describe your NFT"
            />
          </motion.div>

          {/* Deploy button */}
          <button
            onClick={deployNFT}
            disabled={isDeploying}
            className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg pixel-font disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isDeploying ? "Deploying..." : "Deploy NFT"}
          </button>

          {/* Deployment status */}
          {deploymentStatus && <DeploymentStatus status={deploymentStatus} />}
        </div>
      </motion.div>
    </div>
  )
}

