
import Image from 'next/image'
import { motion } from 'framer-motion'

const BackgroundCollage = () => {
    const images = Array.from({ length: 12 }, (_, i) => i + 1)
    
    return (
      <div className="fixed inset-0 overflow-hidden z-[-1]">
        {/* Top row */}
        <motion.div 
          className="absolute top-[-10%] left-[-10%] w-[120%] h-[40%] flex justify-around"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
        >
          {images.slice(0, 4).map((num) => (
            <div key={`top-${num}`} className="relative w-64 h-64 transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
              <Image
                src={`/assets/nft/${num}.png`}
                alt={`NFT ${num}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </motion.div>
  
        {/* Middle row */}
        <motion.div 
          className="absolute top-[30%] left-[-5%] w-[110%] h-[40%] flex justify-around"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          {images.slice(4, 8).map((num) => (
            <div key={`middle-${num}`} className="relative w-64 h-64 transform rotate-[5deg] hover:rotate-0 transition-transform duration-500">
              <Image
                src={`/assets/nft/${num}.png`}
                alt={`NFT ${num}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </motion.div>
  
        {/* Bottom row */}
        <motion.div 
          className="absolute top-[70%] left-[-10%] w-[120%] h-[40%] flex justify-around"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 1.0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {images.slice(8, 12).map((num) => (
            <div key={`bottom-${num}`} className="relative w-64 h-64 transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
              <Image
                src={`/assets/nft/${num}.png`}
                alt={`NFT ${num}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </motion.div>
  
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
      </div>
    )
  }

export default BackgroundCollage