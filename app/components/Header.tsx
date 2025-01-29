'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Github } from "lucide-react"
import Image from "next/image"
import logo from "../../public/assets/pixel-logo.png"
import { ConnectWalletButton } from "@/components/connect-wallet-button"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const menuItems = [
    { href: "/pixelate", label: "Pixelate" },
    { href: "/marketplace", label: "Marketplace" },
    { href: "/my-collection", label: "My Collection" },
    { href: "/nft-maker", label: "Sell NFT" },
  ]

  return (
    <header
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300",
        "bg-black/95 backdrop-blur-sm text-white border-b-4 border-purple-500",
        "shadow-[0_0_10px_#8b5cf6]",
        scrolled && "bg-black/98 shadow-lg"
      )}
    >
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Image
              src={logo || "/placeholder.svg"}
              alt="Pixel8r Logo"
              width={160}
              height={64}
              className="hover:opacity-80 transition-opacity duration-300"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="pixel-font py-2 px-3 rounded-lg hover:bg-purple-700/50 transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Side Items */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://github.com/ayaanoski/pixel8r"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 pixel-font py-2 px-3 rounded-lg hover:bg-purple-700/50 transition-colors duration-300"
            >
              <Github size={20} />
              <span className="hidden xl:inline">GitHub</span>
              <span>⭐</span>
            </a>
            <ConnectWalletButton />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <ConnectWalletButton />
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-purple-700/50 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden fixed inset-x-0 top-[73px] bg-black/98 border-b-4 border-purple-500",
            "transition-all duration-300 ease-in-out transform",
            isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          )}
        >
          <div className="container mx-auto px-4 py-2 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block pixel-font py-2 px-4 rounded-lg hover:bg-purple-700/50 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://github.com/ayaanoski/pixel8r"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 pixel-font py-2 px-4 rounded-lg hover:bg-purple-700/50 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              <Github size={20} />
              <span>GitHub Repo</span>
              <span>⭐</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}