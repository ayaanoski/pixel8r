'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface HistoryItem {
  id: number
  originalImage: string
  pixelatedImage: string
  createdAt: string
}

export default function History() {
  const [historyItems, setHistoryItems] = useState<HistoryItem[]>([])

  useEffect(() => {
    // In a real application, you would fetch this data from an API or local storage
    const mockHistoryItems: HistoryItem[] = [
      {
        id: 1,
        originalImage: '/placeholder-original.png',
        pixelatedImage: '/placeholder-pixelated.png',
        createdAt: '2023-05-01T12:00:00Z',
      },
      {
        id: 2,
        originalImage: '/placeholder-original.png',
        pixelatedImage: '/placeholder-pixelated.png',
        createdAt: '2023-05-02T14:30:00Z',
      },
    ]
    setHistoryItems(mockHistoryItems)
  }, [])

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 pixel-font">History</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {historyItems.map((item) => (
          <div key={item.id} className="border rounded p-4">
            <div className="flex justify-between mb-2">
              <span className="pixel-font">Created: {new Date(item.createdAt).toLocaleString()}</span>
            </div>
            <div className="flex space-x-4">
              <div>
                <h3 className="text-lg mb-2 pixel-font">Original</h3>
                <Image src={item.originalImage} alt="Original" width={150} height={150} />
              </div>
              <div>
                <h3 className="text-lg mb-2 pixel-font">Pixelated</h3>
                <Image src={item.pixelatedImage} alt="Pixelated" width={150} height={150} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

