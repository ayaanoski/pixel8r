'use client'

import { useState, useRef, useEffect } from 'react'
import BackgroundCollage from '../components/BackgroundCollage'
import Confetti from 'react-confetti'
import { motion } from 'framer-motion'
import { Sparkles, Wand2 } from 'lucide-react'

export default function Pixelate() {
  const [originalImage, setOriginalImage] = useState(null)
  const [pixelatedImage, setPixelatedImage] = useState(null)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 })
  const [showConfetti, setShowConfetti] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const canvasRef = useRef(null)
  const sliderRef = useRef(null)

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        if (e.target?.result) {
          const img = new window.Image()
          img.onload = () => {
            setImageDimensions({ width: img.width, height: img.height })
            setOriginalImage(img.src)
            setPixelatedImage(null) // Reset pixelated image when new image is uploaded
          }
          img.src = e.target.result
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleCancelUpload = () => {
    setOriginalImage(null)
    setPixelatedImage(null)
    setImageDimensions({ width: 0, height: 0 })
    const fileInput = document.getElementById('imageUpload')
    if (fileInput) {
      fileInput.value = ''
    }
  }

  const handleSliderChange = (e) => {
    setSliderPosition(Number(e.target.value))
  }

  const pixelateImage = () => {
    if (!originalImage || !canvasRef.current) return
    setIsProcessing(true)

    const img = new window.Image()
    img.onload = () => {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')

      canvas.width = img.width
      canvas.height = img.height

      ctx.drawImage(img, 0, 0, img.width, img.height)

      const pixelSize = Math.max(Math.floor(Math.min(img.width, img.height) / 100), 5)
      
      for (let y = 0; y < img.height; y += pixelSize) {
        for (let x = 0; x < img.width; x += pixelSize) {
          const pixelData = ctx.getImageData(x, y, pixelSize, pixelSize)
          let r = 0, g = 0, b = 0, count = 0
          
          for (let i = 0; i < pixelData.data.length; i += 4) {
            r += pixelData.data[i]
            g += pixelData.data[i + 1]
            b += pixelData.data[i + 2]
            count++
          }
          
          r = Math.floor(r / count)
          g = Math.floor(g / count)
          b = Math.floor(b / count)
          
          ctx.fillStyle = `rgb(${r}, ${g}, ${b})`
          ctx.fillRect(x, y, pixelSize, pixelSize)
        }
      }

      setPixelatedImage(canvas.toDataURL())
      setShowConfetti(true)
      setIsProcessing(false)
      setTimeout(() => setShowConfetti(false), 5000)
    }
    img.src = originalImage
  }

  const getResponsiveDimensions = () => {
    if (typeof window === 'undefined') return { width: 0, height: 0 }
    
    const screenWidth = window.innerWidth
    const padding = screenWidth < 640 ? 32 : 64
    const maxWidth = Math.min(imageDimensions.width, screenWidth - padding)
    const aspectRatio = imageDimensions.height / imageDimensions.width
    const height = maxWidth * aspectRatio
    
    const maxHeight = window.innerHeight * 0.6
    if (height > maxHeight) {
      return {
        width: maxHeight / aspectRatio,
        height: maxHeight
      }
    }
    
    return { width: maxWidth, height }
  }

  const downloadPixelatedImage = () => {
    if (pixelatedImage) {
      const link = document.createElement('a')
      link.href = pixelatedImage
      link.download = 'pixelated_image.png'
      link.click()
    }
  }

  const features = [
    { 
      icon: '🎨',
      text: 'Upload HD quality images',
      color: 'from-cyan-500 to-blue-500',
      description: 'Support for high-resolution images up to 4K'
    },
    {
      icon: '🚀',
      text: 'Perfect for NFT art',
      color: 'from-purple-500 to-indigo-500',
      description: 'Create unique digital collectibles'
    },
    {
      icon: '✨',
      text: 'Maintain crisp edges',
      color: 'from-yellow-400 to-orange-500',
      description: 'Advanced pixel-perfect algorithms'
    },
    {
      icon: '🎮',
      text: 'Add retro gaming vibes',
      color: 'from-pink-500 to-rose-500',
      description: '8-bit style transformations'
    }
  ]

  const responsiveDimensions = getResponsiveDimensions()

  return (
    <div className="min-h-screen bg-gray-900 overflow-hidden">
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={200}
          gravity={0.3}
          colors={['#4ade80', '#60a5fa', '#f472b6', '#fbbf24']}
        />
      )}
      
      <div className="relative flex flex-col items-center px-4 py-6 sm:p-8 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 z-0"
        >
          <BackgroundCollage />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full flex flex-col items-center"
        >
          <motion.h1 
            className="text-3xl sm:text-4xl lg:text-5xl mt-20 font-bold mb-4 pixel-font text-center max-w-[90vw]"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Image Pixelator
            </span>
          </motion.h1>

          <motion.div 
            className="w-full sm:w-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="typewriter-text pixel-font text-base sm:text-xl lg:text-2xl text-green-400 text-center px-4 flex items-center justify-center">
              Transform your NFT masterpieces into 8-bit art
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="ml-2"
              >
                <Sparkles className="w-6 h-6 text-yellow-400" />
              </motion.span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 w-full max-w-2xl px-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, rotateY: 10 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <div className={`
                  h-full p-6 rounded-xl
                  bg-gradient-to-br ${feature.color}
                  transform transition-all duration-300
                  group-hover:shadow-2xl group-hover:shadow-${feature.color.split('-')[1]}/50
                  relative z-10 backdrop-blur-sm bg-opacity-20
                  border border-white/20
                `}>
                  <div className="flex flex-col items-center space-y-3">
                    <span className="text-3xl">{feature.icon}</span>
                    <h3 className="pixel-font text-white text-center">
                      {feature.text}
                    </h3>
                    <p className="text-sm text-white/80 text-center">
                      {feature.description}
                    </p>
                  </div>
                </div>
                
                <div className={`
                  absolute inset-0 rounded-xl
                  bg-gradient-to-br ${feature.color}
                  transform translate-y-1 translate-x-1
                  -z-10 opacity-50 blur-sm
                  transition-transform duration-300
                  group-hover:translate-y-2 group-hover:translate-x-2
                `}/>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="w-full max-w-md mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-white/10">
              <label
                htmlFor="imageUpload"
                className="block mb-3 pixel-font text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
              >
                Upload Your Image:
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  id="imageUpload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full px-4 py-2 bg-gray-700/50 rounded-lg pixel-font text-white text-sm
                    border border-white/10 focus:border-green-400/50 transition-all duration-300
                    file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0
                    file:text-sm file:font-semibold file:pixel-font
                    file:bg-green-400 file:text-gray-900
                    hover:file:bg-green-500"
                />
                {originalImage && (
                  <motion.button
                    onClick={handleCancelUpload}
                    className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg pixel-font transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Cancel
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>

          {originalImage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <motion.button
                onClick={pixelateImage}
                disabled={isProcessing}
                className={`
                  flex items-center space-x-2 
                  bg-gradient-to-r from-green-400 to-blue-500
                  text-white font-bold py-3 px-6 rounded-lg 
                  pixel-font transition-all duration-300
                  hover:from-blue-500 hover:to-green-400
                  disabled:opacity-50 disabled:cursor-not-allowed
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Wand2 className="w-6 h-6" />
                <span>{isProcessing ? 'Processing...' : 'Pixelate Image'}</span>
              </motion.button>
            </motion.div>
          )}

          {originalImage && pixelatedImage && (
            <motion.div 
              className="w-full flex flex-col items-center space-y-4 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="comparison-slider relative overflow-hidden rounded-lg neon-border"
                style={{
                  width: `${responsiveDimensions.width}px`,
                  height: `${responsiveDimensions.height}px`,
                  maxWidth: '100%',
                }}
              >
                <div
                  className="absolute top-0 left-0 h-full"
                  style={{
                    width: `${sliderPosition}%`,
                    backgroundImage: `url(${originalImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'left',
                    borderRight: '2px solid #4ade80'
                  }}
                />
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage: `url(${pixelatedImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'left'
                  }}
                />
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={handleSliderChange}
                  className="absolute top-0 left-0 w-full h-full opacity-0 cursor-ew-resize"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pixel-font text-white bg-black bg-opacity-50 px-3 py-2 rounded text-sm backdrop-blur-sm">
                  Slide to Compare
                </div>
              </div>

              <div className="text-center text-sm text-gray-400 pixel-font">
                Original size: {imageDimensions.width} x {imageDimensions.height}
              </div>

              <motion.button
                onClick={downloadPixelatedImage}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-full pixel-font 
                  transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl
                  hover:from-pink-500 hover:to-purple-500 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Download Pixelated Image</span>
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </div>

      <style jsx>{`
        .typewriter-text {
          overflow: hidden;
          border-right: 2px solid #4ade80;
          white-space: nowrap;
          margin: 0 auto;
          animation: 
            typing 3.5s steps(40, end),
            blink-caret .75s step-end infinite;
        }
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #4ade80 }
        }
        .comparison-slider {
          box-shadow: 0 0 20px rgba(74, 222, 128, 0.5);
          transition: box-shadow 0.3s ease;
        }
        .comparison-slider:hover {
          box-shadow: 0 0 30px rgba(74, 222, 128, 0.7);
        }
        @media (max-width: 640px) {
          .typewriter-text {
            white-space: normal;
            animation: none;
            border-right: none;
            text-align: center;
          }
        }
        .pixel-font {
          font-family: 'Press Start 2P', monospace;
          letter-spacing: 0.05em;
        }
        .neon-border {
          box-shadow: 0 0 10px rgba(74, 222, 128, 0.3),
                      0 0 20px rgba(74, 222, 128, 0.2),
                      0 0 30px rgba(74, 222, 128, 0.1);
        }
      `}</style>

      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  )
}
