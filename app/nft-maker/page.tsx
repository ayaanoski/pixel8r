'use client';

import { useState, useEffect } from 'react';
import BackgroundCollage from '../components/BackgroundCollage';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const seededRandom = (seed) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

export default function NFTMaker() {
  // State variables
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isDeploying, setIsDeploying] = useState(false);
  const [deploymentStatus, setDeploymentStatus] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  // Load image from URL params if available
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const imageFromParams = searchParams.get('image');
    if (imageFromParams) {
      setImage(decodeURIComponent(imageFromParams));
      setImagePreview(decodeURIComponent(imageFromParams));
    }
  }, []);

  // Handle image upload and preview
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // NFT deployment function
  const deployNFT = () => {
    if (!name || !description || !price || !image) {
      alert('Please fill in all fields and upload an image before deploying.');
      return;
    }

    setIsDeploying(true);
    setDeploymentStatus('Deploying NFT...');

    // Simulate deployment process
    setTimeout(() => {
      setIsDeploying(false);
      setDeploymentStatus('Error deploying NFT: Not enough TLOS');
    }, 3000);
  };

  return (
    <div className="min-h-screen overflow-hidden relative">
      <BackgroundCollage />

      {/* Title */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-5xl mt-20 font-bold text-center pixel-font text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 pt-20 mb-12"
      >
        Create Your NFT
        <Sparkles className="inline-block ml-4 text-purple-400" />
      </motion.h1>

      {/* NFT Maker Form */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md mx-auto backdrop-blur-lg bg-black/30 p-8 rounded-xl shadow-2xl"
        style={{
          transform: isHovered ? 'translateZ(20px)' : 'translateZ(0)',
          transition: 'transform 0.3s ease-out',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="space-y-6">
          {/* Name input */}
          <motion.div
            className="form-group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <label className="block mb-2 pixel-font text-purple-400">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-500/30 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 text-white pixel-font transition-all duration-300"
              placeholder="Enter NFT name"
            />
          </motion.div>

          {/* Description input */}
          <motion.div
            className="form-group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <label className="block mb-2 pixel-font text-purple-400">Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-500/30 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 text-white pixel-font transition-all duration-300 h-32"
              placeholder="Describe your NFT"
            />
          </motion.div>

          {/* Price input */}
          <motion.div
            className="form-group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <label className="block mb-2 pixel-font text-purple-400">Price (TLOS):</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-500/30 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 text-white pixel-font transition-all duration-300"
              placeholder="Enter NFT price"
            />
          </motion.div>

          {/* Image upload */}
          <motion.div
            className="form-group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <label className="block mb-2 pixel-font text-purple-400">Upload Image:</label>
            <input
              type="file"
              onChange={handleImageUpload}
              className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-500/30 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 text-white pixel-font transition-all duration-300"
            />
          </motion.div>

          {/* Image preview in 3D card */}
          {imagePreview && (
            <motion.div
              className="relative w-full h-64 bg-black/50 border border-purple-500/30 rounded-lg overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={imagePreview}
                alt="NFT Preview"
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}

          {/* Deploy button */}
          <button
            onClick={deployNFT}
            className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg pixel-font"
          >
            Deploy NFT
          </button>

          {/* Deployment status */}
          {deploymentStatus && (
            <p className="text-center text-red-500 pixel-font mt-4">{deploymentStatus}</p>
          )}
        </div>
      </motion.div>
    </div>
  );
}
