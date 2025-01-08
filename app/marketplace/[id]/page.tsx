'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { ArrowLeft, Download, ShoppingCart, Shield, Sparkles, Lock } from 'lucide-react'

// Types
interface NFT {
  id: number
  name: string
  description: string
  price: number
  image: string
}

// Mock Data
const mockNFTs: NFT[] = [
  {
    id: 1,
    name: "Angel of Death",
    description: "A haunting pixel art depicting the ethereal Angel of Death, wings spread wide against a darkened sky, wielding a gleaming scythe.",
    price: 6.89,
    image: "/assets/nft/1.png"
  },
  {
    id: 2,
    name: "Freeze",
    description: "An icy masterpiece capturing the moment of absolute zero, where time stands still and crystals form in mesmerizing patterns.",
    price: 4.12,
    image: "/assets/nft/2.png"
  },
  {
    id: 3,
    name: "Rick and Morty",
    description: "Wubba lubba dub dub! A pixelated adventure featuring everyone's favorite dimension-hopping duo in their most bizarre situation yet.",
    price: 3.32,
    image: "/assets/nft/3.png"
  },
  {
    id: 4,
    name: "Grumpy Sonic",
    description: "The world's fastest hedgehog having a seriously bad day. No chili dogs in sight, and he's not happy about it.",
    price: 7.45,
    image: "/assets/nft/4.png"
  },
  {
    id: 5,
    name: "Pixel Puss",
    description: "A mischievous feline captured in perfect pixel form, plotting its next adventure with gleaming eyes and a swishing tail.",
    price: 2.99,
    image: "/assets/nft/5.png"
  },
  {
    id: 6,
    name: "Deadpool",
    description: "The Merc with a Mouth in 8-bit glory, breaking the fourth wall and probably making a joke about being pixelated.",
    price: 8.55,
    image: "/assets/nft/6.png"
  },
  {
    id: 7,
    name: "Chill Dog",
    description: "The coolest canine in the crypto world, wearing shades and living its best life without a care in the digital universe.",
    price: 5.10,
    image: "/assets/nft/7.png"
  },
  {
    id: 8,
    name: "Pixel Hero Fireman",
    description: "A brave pixel firefighter ready to save the day, complete with classic gear and an unwavering commitment to duty.",
    price: 9.30,
    image: "/assets/nft/8.png"
  },
  {
    id: 9,
    name: "Jotaro Kujo",
    description: "Yare yare daze... The legendary JoJo protagonist strikes his iconic pose in pixel perfect detail, Star Platinum lurking in the shadows.",
    price: 6.75,
    image: "/assets/nft/9.png"
  },
  {
    id: 10,
    name: "Pixel Dragon",
    description: "A fearsome dragon rendered in stunning pixel art, its scales gleaming as it prepares to unleash its digital fury.",
    price: 4.87,
    image: "/assets/nft/10.png"
  },
  {
    id: 11,
    name: "Skull Meme",
    description: "The internet's favorite skeletal reaction, now immortalized in pixel form. Perfect for when you literally can't even.",
    price: 3.14,
    image: "/assets/nft/11.png"
  },
  {
    id: 12,
    name: "Ninja Turtle",
    description: "Cowabunga! A heroic half-shell warrior brings retro gaming vibes to the blockchain, pizza not included.",
    price: 8.99,
    image: "/assets/nft/12.png"
  }
]

// NFT Card Component
const NFTCard = ({ nft, isHovered, onHover }: { nft: NFT, isHovered: boolean, onHover: (id: number | null) => void }) => (
  <div 
    className="group relative"
    onMouseEnter={() => onHover(nft.id)}
    onMouseLeave={() => onHover(null)}
  >
    <div 
      className={`
        relative bg-gray-900 rounded-2xl p-4 
        transform transition-all duration-300 ease-out
        hover:scale-105 hover:-rotate-1
        border border-gray-800 hover:border-purple-500
        ${isHovered ? 'shadow-2xl shadow-purple-500/20' : 'shadow-xl'}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative w-full h-48 mb-4 transform group-hover:scale-105 transition-transform duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl" />
        <Image
          src={nft.image}
          alt={nft.name}
          fill
          priority={nft.id === 1}
          className="object-cover rounded-xl"
        />
      </div>
      
      <h2 className="text-xl font-bold mb-2 pixel-font bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
        {nft.name}
      </h2>
      
      <p className="text-gray-400 pixel-font text-sm line-clamp-3 mb-4">
        {nft.description}
      </p>
      
      <div className="border-t border-gray-800 pt-4 mt-auto">
        <div className="flex items-center justify-between">
          <div className="pixel-font">
            <p className="text-sm text-gray-400">Current Price</p>
            <p className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              {nft.price} TLOS
            </p>
          </div>
          
          <Link
            href={`/marketplace/${nft.id}`}
            className="relative px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl pixel-font 
              transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
          >
            <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 rounded-xl transition-opacity" />
            <span>Buy NFT</span>
          </Link>
        </div>
      </div>
    </div>
  </div>
)

// Main Component
export default function NFTMarketplace() {
  const params = useParams()
  const id = typeof params?.id === 'string' ? parseInt(params.id) : null
  const [nft, setNFT] = useState<NFT | null>(null)
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [isImageHovered, setIsImageHovered] = useState(false)

  useEffect(() => {
    if (id) {
      const selectedNFT = mockNFTs.find((n) => n.id === id)
      setNFT(selectedNFT || null)
    }
  }, [id])

  const handleBuyNFT = () => {
    alert(`Processing purchase of ${nft?.name} for ${nft?.price} TLOS`)
  }

  const handleDownloadPDF = async () => {
    if (!nft) return
    
    const element = document.getElementById('nft-card')
    if (!element) return

    try {
      // Create a wrapper div for better rendering
      const wrapper = document.createElement('div')
      wrapper.style.backgroundColor = '#000000'
      wrapper.style.padding = '20px'  // Reduced padding to allow for larger card
      wrapper.style.width = '100%'
      wrapper.style.height = '100%'
      wrapper.style.display = 'flex'
      wrapper.style.justifyContent = 'center'
      wrapper.style.alignItems = 'center'

      // Clone and style the card for optimal rendering
      const cardClone = element.cloneNode(true) as HTMLElement
      cardClone.style.width = '100%'
      cardClone.style.maxWidth = '100%'
      cardClone.style.margin = '0'
      wrapper.appendChild(cardClone)
      document.body.appendChild(wrapper)

      const canvas = await html2canvas(wrapper, {
        scale: 3, // Increased scale for better quality
        useCORS: true,
        logging: false,
        backgroundColor: '#000000',
        onclone: (clonedDoc) => {
          const clonedElement = clonedDoc.getElementById('nft-card')
          if (clonedElement) {
            // Preserve all visual effects
            clonedElement.style.transform = 'none'
            clonedElement.style.boxShadow = '0 0 40px rgba(139,92,246,0.3)'
            clonedElement.style.width = '100%'
            clonedElement.style.maxWidth = '100%'
            
            // Ensure all gradients and effects are visible
            const gradientElements = clonedElement.querySelectorAll('[class*="bg-gradient"]')
            gradientElements.forEach(el => {
              if (el instanceof HTMLElement) {
                el.style.opacity = '1'
              }
            })
          }
        }
      })

      // Remove the temporary wrapper
      document.body.removeChild(wrapper)

      // Create PDF with black background
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      })

      // Set black background
      pdf.setFillColor(0, 0, 0)
      pdf.rect(0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight(), 'F')

      // Calculate dimensions for maximized card size
      const pageWidth = pdf.internal.pageSize.getWidth()
      const pageHeight = pdf.internal.pageSize.getHeight()
      const margin = 10 // Reduced margin to allow for larger card
      const maxWidth = pageWidth - (2 * margin)
      const maxHeight = pageHeight - (2 * margin) - 10 // Reduced bottom space

      const imgRatio = canvas.width / canvas.height
      let imgWidth = maxWidth
      let imgHeight = imgWidth / imgRatio

      // Adjust size to maximize the card while maintaining aspect ratio
      if (imgHeight > maxHeight) {
        imgHeight = maxHeight
        imgWidth = imgHeight * imgRatio
      } else {
        // If height isn't maxed out, increase width to fill more space
        const potentialWidth = maxHeight * imgRatio
        if (potentialWidth <= maxWidth) {
          imgWidth = potentialWidth
          imgHeight = maxHeight
        }
      }

      const xPos = (pageWidth - imgWidth) / 2
      const yPos = (pageHeight - imgHeight) / 2 // Centered vertically

      // Add the image to PDF with high quality
      pdf.addImage(
        canvas.toDataURL('image/png'),
        'PNG',
        xPos,
        yPos,
        imgWidth,
        imgHeight,
        undefined,
        'FAST'
      )

      // Add signature text in white
      pdf.setTextColor(255, 255, 255)
      pdf.setFontSize(10) // Slightly smaller font to accommodate larger card
      pdf.text('-from Vinsmoke', xPos + imgWidth - 30, yPos + imgHeight + 8)

      // Save the PDF
      pdf.save(`${nft.name}-details.pdf`)
    } catch (error) {
      console.error('Error generating PDF:', error)
      alert('Error generating PDF. Please try again.')
    }
  }

  // Render NFT Details Page
  if (id) {
    if (!nft) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-red-900 via-black to-purple-900 flex items-center justify-center px-4">
          <div className="text-center space-y-6">
            <h1 className="text-6xl font-bold pixel-font text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500">
              NFT Not Found
            </h1>
            <Link 
              href="/marketplace"
              className="inline-block group relative px-8 py-4 overflow-hidden rounded-xl bg-gradient-to-r from-red-500 to-purple-500 pixel-font"
            >
              <div className="absolute inset-0 w-3 bg-white transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
              <div className="relative flex items-center gap-2">
                <ArrowLeft size={20} />
                <span>Back to Marketplace</span>
              </div>
            </Link>
          </div>
        </div>
      )
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <nav className="max-w-6xl mx-auto mt-20 mb-12">
            <Link 
              href="/marketplace"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 pixel-font transition-colors duration-300"
            >
              <ArrowLeft size={20} />
              <span>Back to Marketplace</span>
            </Link>
          </nav>

          <div 
            id="nft-card"
            className="max-w-6xl mx-auto rounded-2xl overflow-hidden backdrop-blur-sm bg-white/5"
          >
            <div className="flex flex-col md:flex-row gap-12 p-8">
              <div className="md:w-1/2">
                <div 
                  className="relative group"
                  onMouseEnter={() => setIsImageHovered(true)}
                  onMouseLeave={() => setIsImageHovered(false)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className={`
                    relative rounded-2xl overflow-hidden transform transition-transform duration-500 ease-out
                    ${isImageHovered ? 'scale-105 rotate-1' : ''}
                    shadow-[0_0_40px_rgba(139,92,246,0.3)]
                  `}>
                    <Image
                      src={nft.image}
                      alt={nft.name}
                      width={600}
                      height={600}
                      className="w-full h-auto object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 space-y-8">
                <div>
                  <h1 className="text-5xl font-bold pixel-font mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                    {nft.name}
                  </h1>
                  <p className="text-gray-300 pixel-font text-lg leading-relaxed">
                    {nft.description}
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-purple-500/20">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-300 pixel-font">Current Price</span>
                    <span className="text-3xl font-bold pixel-font text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                      {nft.price} TLOS
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400 pixel-font">
                    <span>Token ID: #{nft.id}</span>
                    <div className="flex items-center gap-2">
                      <Lock size={14} />
                      <span>1 of 1 Available</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <button
                    onClick={handleBuyNFT}
                    className="group relative w-full px-8 py-4 overflow-hidden rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 pixel-font"
                  >
                    <div className="absolute inset-0 w-3 bg-white transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
                    <div className="relative flex items-center justify-center gap-3">
                      <ShoppingCart size={20} />
                      <span>Buy Now for {nft.price} TLOS</span>
                  </div>
                </button>

                <button
                  onClick={handleDownloadPDF}
                  className="group relative w-full px-8 py-4 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 pixel-font"
                >
                  <div className="absolute inset-0 w-3 bg-white transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
                  <div className="relative flex items-center justify-center gap-3">
                    <Download size={20} />
                    <span>Download NFT Details</span>
                  </div>
                </button>
              </div>
              
              <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl border border-purple-500/20 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Shield size={24} className="text-purple-400" />
                  <h2 className="text-2xl font-bold pixel-font text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                    NFT Details
                  </h2>
                </div>
                <div className="space-y-4 text-gray-300 pixel-font">
                  <div className="flex items-center gap-3">
                    <Sparkles size={16} className="text-purple-400" />
                    <p>Unique pixel art collectible</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Lock size={16} className="text-purple-400" />
                    <p>Stored on the Telos blockchain</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield size={16} className="text-purple-400" />
                    <p>Full ownership rights included</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  }}
