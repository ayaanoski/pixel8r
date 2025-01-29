
import React from 'react'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import SingleNft from '@/components/SingleNft'
import { motion } from 'framer-motion'

export default function NFTDetail({
  params,
}: {
  params: { id: string }
}) {
  return (
    <div className="min-h-screen mt-10 bg-gradient-to-br from-purple-900 via-black to-blue-900 text-white px-4 py-8">
      <div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <Link href="/" className="inline-flex items-center pixel-font text-lg mb-8 hover:text-purple-400 transition-colors">
          <ArrowLeft className="mr-2" />
          Back to Marketplace
        </Link>
        <SingleNft id={params.id} />
      </div>
    </div>
  )
}