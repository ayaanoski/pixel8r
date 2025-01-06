'use client'

import { useState, useRef, useEffect } from 'react'
import BackgroundCollage from '../components/BackgroundCollage'
import Confetti from 'react-confetti'


export default function Pixelate() {
  const [originalImage, setOriginalImage] = useState<string | null>(null)
  const [pixelatedImage, setPixelatedImage] = useState<string | null>(null)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 })
  const [showConfetti, setShowConfetti] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        if (e.target?.result) {
          const img = new window.Image() // Using window.Image instead of Image
          img.onload = () => {
            setImageDimensions({ width: img.width, height: img.height })
            setOriginalImage(img.src)
          }
          img.src = e.target.result as string
        }
      }
      reader.readAsDataURL(file)
    }
  }

  // Rest of the code remains the same...
  const handleCancelUpload = () => {
    setOriginalImage(null)
    setPixelatedImage(null)
    setImageDimensions({ width: 0, height: 0 })
    const fileInput = document.getElementById('imageUpload') as HTMLInputElement
    if (fileInput) {
      fileInput.value = ''
    }
  }

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value))
  }

  const pixelateImage = () => {
    if (!originalImage || !canvasRef.current) return

    const img = new window.Image() // Using window.Image here as well
    img.onload = () => {
      const canvas = canvasRef.current!
      const ctx = canvas.getContext('2d')!

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
      // Hide confetti after 5 seconds
      setTimeout(() => setShowConfetti(false), 5000)
    }
    img.src = originalImage
  }

  useEffect(() => {
    if (originalImage) {
      pixelateImage()
    }
  }, [originalImage])

  const downloadPixelatedImage = () => {
    if (pixelatedImage) {
      const link = document.createElement('a')
      link.href = pixelatedImage
      link.download = 'pixelated_image.png'
      link.click()
    }
  }

  const getResponsiveDimensions = () => {
    if (typeof window === 'undefined') return { width: 0, height: 0 }
    
    const screenWidth = window.innerWidth
    const padding = screenWidth < 640 ? 32 : 64 // Smaller padding on mobile
    const maxWidth = Math.min(imageDimensions.width, screenWidth - padding)
    const aspectRatio = imageDimensions.height / imageDimensions.width
    const height = maxWidth * aspectRatio
    
    // Limit height on mobile
    const maxHeight = window.innerHeight * 0.6
    if (height > maxHeight) {
      return {
        width: maxHeight / aspectRatio,
        height: maxHeight
      }
    }
    
    return { width: maxWidth, height }
  }

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
        <div className="absolute inset-0 z-0">
          <BackgroundCollage />
        </div>

        <div className="relative z-10 w-full flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mt-20 font-bold mb-4 pixel-font neon-text text-center max-w-[90vw]">
            Image Pixelator
          </h1>

          <div className="w-full sm:w-auto mb-6">
            <p className="typewriter-text pixel-font text-base sm:text-xl lg:text-2xl text-green-400 text-center px-4">
              Transform your NFT masterpieces into 8-bit art ✨
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full max-w-2xl px-4">
            {[
              { icon: '🎨', text: 'Upload HD quality images', color: 'text-cyan-300' },
              { icon: '🚀', text: 'Perfect for NFT art', color: 'text-purple-300' },
              { icon: '✨', text: 'Maintain crisp edges', color: 'text-yellow-300' },
              { icon: '🎮', text: 'Add retro gaming vibes', color: 'text-pink-300' }
            ].map((feature, index) => (
              <div
                key={index}
                className={`${feature.color} pixel-font text-sm sm:text-base p-3 bg-gray-800 bg-opacity-50 rounded-lg text-center transform hover:scale-105 transition-transform duration-200`}
              >
                <span className="mr-2">{feature.icon}</span>
                {feature.text}
              </div>
            ))}
          </div>

          <div className="w-full max-w-md mb-6">
            <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg">
              <label
                htmlFor="imageUpload"
                className="block mb-3 pixel-font neon-text text-sm sm:text-base"
              >
                Upload Image:
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  id="imageUpload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full px-3 py-2 bg-gray-700 rounded-lg pixel-font text-white text-sm"
                />
                {originalImage && (
                  <button
                    onClick={handleCancelUpload}
                    className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg pixel-font transition-all duration-300"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </div>
          </div>

          {originalImage && pixelatedImage && (
            <div className="w-full flex flex-col items-center space-y-4 px-4">
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
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pixel-font text-white bg-black bg-opacity-50 px-3 py-2 rounded text-sm">
                  Slide to Compare
                </div>
              </div>

              <div className="text-center text-sm text-gray-400">
                Original size: {imageDimensions.width} x {imageDimensions.height}
              </div>

              <button
                onClick={downloadPixelatedImage}
                className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg pixel-font neon-border transition-all duration-300 text-sm sm:text-base mb-6"
              >
                Download Pixelated Image
              </button>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .typewriter-container {
          overflow: hidden;
          width: 100%;
        }
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
        .neon-border {
          box-shadow: 0 0 10px rgba(74, 222, 128, 0.3),
                      0 0 20px rgba(74, 222, 128, 0.2),
                      0 0 30px rgba(74, 222, 128, 0.1);
        }
        .pixel-font {
          font-family: 'Press Start 2P', monospace;
          letter-spacing: 0.05em;
        }
      `}</style>

      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  )
}
