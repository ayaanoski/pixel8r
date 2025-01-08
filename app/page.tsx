'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'

const TypewriterText = ({ text }) => {
  const [displayText, setDisplayText] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[index])
        setIndex((prev) => prev + 1)
      }, 100)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => {
        setDisplayText('')
        setIndex(0)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [index, text])

  return (
    <span className="inline-block min-h-[3em]">
      {displayText}
      <span className="animate-blink">|</span>
    </span>
  )
}

const ParticleEffect = () => {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    setParticles(
      [...Array(5)].map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        offsetX: Math.random() * 100 - 50,
        offsetY: Math.random() * 100 - 50,
      }))
    )
  }, [])

  return (
    <>
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-purple-500/30 rounded-full"
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{
            x: particle.offsetX,
            y: particle.offsetY,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.2,
          }}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
        />
      ))}
    </>
  )
}

const Card3D = ({ step, index, description }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
      className="relative w-72 h-72"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full h-full relative group cursor-pointer"
      >
        <div 
          className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl backdrop-blur-sm border border-purple-500/30 
                     transform transition-all duration-300 group-hover:border-purple-500/60"
          style={{
            transform: "translateZ(0px)",
          }}
        />
        
        <div
          className="relative h-full w-full p-8 flex flex-col items-center justify-center"
          style={{
            transform: "translateZ(50px)",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center 
                        bg-gradient-to-r from-purple-500/30 to-pink-500/30 shadow-lg">
            <p className="pixel-font text-lg text-purple-300">{index + 1}</p>
          </div>

          <h3 className="text-3xl font-bold mb-6 pixel-font text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            {step}
          </h3>

          <p className="pixel-font text-sm text-gray-300 text-center mb-4">
            {description}
          </p>

          <motion.div
            className="mt-4 text-purple-400 text-4xl"
            whileHover={{ scale: 1.1, rotate: 5 }}
            style={{ transform: "translateZ(75px)" }}
          >
            {index === 0 && "📸"}
            {index === 1 && "🎨"}
            {index === 2 && "🌟"}
          </motion.div>
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <ParticleEffect />
        </div>
      </motion.div>
    </motion.div>
  )
}

const BackgroundCollage = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    setImages(Array.from({ length: 12 }, (_, i) => i + 1))
  }, [])
  
  return (
    <div className="fixed inset-0 overflow-hidden">
      {[0, 1, 2].map((row) => (
        <motion.div 
          key={`row-${row}`}
          className={`absolute w-[120%] h-[40%] flex justify-around
                     ${row === 0 ? 'top-[-10%] left-[-10%]' : 
                       row === 1 ? 'top-[30%] left-[-5%] w-[110%]' : 
                                 'top-[70%] left-[-10%]'}`}
          initial={{ opacity: 0, x: row % 2 === 0 ? -50 : 50 }}
          animate={{ opacity: row === 0 ? 0.3 : row === 1 ? 0.9 : 1, x: 0 }}
          transition={{ duration: 1.5, delay: row * 0.2 }}
        >
          {images.slice(row * 4, (row + 1) * 4).map((num) => (
            <motion.div
              key={`image-${num}`}
              className="relative w-64 h-64"
              whileHover={{ scale: 1.1, rotate: 0 }}
              initial={{ rotate: row % 2 === 0 ? -5 : 5 }}
            >
              <Image
                src={`/assets/nft/${num}.png`}
                alt={`NFT ${num}`}
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
          ))}
        </motion.div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90" />
      
      <div className="absolute inset-0 opacity-20 mix-blend-overlay animate-grain"  />
    </div>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center relative overflow-hidden bg-black">
      <BackgroundCollage />
      
      <motion.div
        className="relative z-10 mt-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl mt-36 font-bold mb-2 pixel-font text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
          whileHover={{ scale: 1.05 }}
        >
          Welcome to Pixel8r
        </motion.h1>

        <motion.div
          className="text-lg md:text-xl mb-12 pixel-font text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <TypewriterText text="Transform your photos into awesome 8-bit pixelated art!" />
        </motion.div>
      </motion.div>

      <div className="space-y-6 relative z-10">
        <Link href="/pixelate">
          <motion.button
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-8 rounded-full pixel-font 
                     shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(168,85,247,0.7)" }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </Link>
        <Link href="/marketplace">
          <motion.button
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-4 px-8 rounded-full pixel-font 
                     shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(59,130,246,0.7)" }}
            whileTap={{ scale: 0.95 }}
          >
            Marketplace
          </motion.button>
        </Link>
      </div>

      <motion.div
        className="mt-16 relative z-10 w-full px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-12 pixel-font text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          How It Works
        </h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {[
            { step: 'Upload', desc: 'Choose your image to begin the transformation' },
            { step: 'Pixelate', desc: 'Watch your image transform into stunning pixel art' },
            { step: 'Mint NFT', desc: 'Create your unique digital collectible' }
          ].map((item, index) => (
            <Card3D
              key={item.step}
              step={item.step}
              index={index}
              description={item.desc}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}
