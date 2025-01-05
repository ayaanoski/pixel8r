'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const menuItems = [
    { href: '/pixelate', label: 'Pixelate' },
    { href: '/marketplace', label: 'Marketplace' },
    { href: '/my-collection', label: 'My Collection' },
    { href: '/nft-maker', label: 'Deploy NFT' },
    { href: '/profile', label: 'Profile' },
  ]

  return (
    <header className="bg-black/95 backdrop-blur-sm text-white py-4 px-4 border-b-4 border-purple-500 shadow-[0_0_10px_#8b5cf6] fixed w-full top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold pixel-font hover:text-purple-400 transition-colors duration-300">
          Pixel8r
        </Link>
        <div className="hidden md:flex items-center">
          {menuItems.map((item, index) => (
            <div key={item.href} className="flex items-center">
              <Link
                href={item.href}
                className="pixel-font py-2 px-4 hover:bg-purple-700 rounded transition-colors duration-300"
              >
                {item.label}
              </Link>
              {index < menuItems.length - 1 && (
                <div className="h-6 w-px bg-purple-500 mx-2" />
              )}
            </div>
          ))}
        </div>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-black border-b-4 border-purple-500 shadow-[0_0_10px_#8b5cf6]">
          {menuItems.map((item, index) => (
            <div key={item.href}>
              <Link
                href={item.href}
                className="block pixel-font py-2 px-4 hover:bg-purple-700 transition-colors duration-300"
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
              {index < menuItems.length - 1 && (
                <div className="h-px w-full bg-purple-500 mx-auto opacity-30" />
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  )
}