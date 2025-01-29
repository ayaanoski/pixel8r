"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Loader2, Wallet, Copy, LogOut, ExternalLink, Coins } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useMarketplaceContext } from "@/context/MarketplaceProvider"
import { toast } from "sonner"
import { ethers } from "ethers"
import { useRouter } from "next/navigation"

export function ConnectWalletButton() {
  const { account, connectWallet, isLoading } = useMarketplaceContext()
  const [balance, setBalance] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  // Fetch the balance when account changes
  useEffect(() => {
    const fetchBalance = async () => {
      if (!account || !window.ethereum) return
      try {
        const provider = new ethers.BrowserProvider(window.ethereum)
        const balance = await provider.getBalance(account)
        setBalance(ethers.formatEther(balance).slice(0, 7)) // Display 7 significant digits
      } catch (err) {
        console.error("Error fetching balance:", err)
        setBalance("Error")
      }
    }

    fetchBalance()

    if (window.ethereum) {
      window.ethereum.on("accountsChanged", fetchBalance)
      return () => window.ethereum.removeListener("accountsChanged", fetchBalance)
    }
  }, [account])

  // Handle wallet connection
  const handleConnect = async () => {
    try {
      setError(null)
      await connectWallet()
      toast.success("Wallet connected successfully!")
    } catch (err: any) {
      console.error(err)
      setError(err.message || "Failed to connect wallet.")
      toast.error(err.message || "Connection error. Please try again.")
    }
  }

  // Copy wallet address to clipboard
  const handleCopyAddress = async () => {
    if (account) {
      try {
        await navigator.clipboard.writeText(account)
        toast.success("Address copied to clipboard!")
      } catch {
        toast.error("Failed to copy address")
      }
    }
  }

  // Disconnect logic: Only local reset (MetaMask doesn't support programmatic disconnect)
  const handleDisconnect = () => {
    toast("Disconnected locally. Please reload the wallet.")
    window.location.reload()
  }

  // Open blockchain explorer
  const openExplorer = () => {
    if (account) {
      const explorerUrl = `https://testnet.teloscan.io/address/${account}`
      window.open(explorerUrl, "_blank")
    }
  }

  // Redirect to proceeds page
  const viewProceeds = () => {
    router.push("/proceeds")
  }

  if (error) {
    return (
      <Button variant="destructive" onClick={handleConnect} className="pixel-font">
        {error.includes("install") ? "Install MetaMask" : "Retry Connection"}
      </Button>
    )
  }

  if (isLoading) {
    return (
      <Button disabled className="pixel-font">
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Connecting...
      </Button>
    )
  }

  if (!account) {
    return (
      <Button
        onClick={handleConnect}
        className="pixel-font bg-purple-600 hover:bg-purple-700 text-white font-bold border-2 border-yellow-400 transition-all duration-300"
      >
        <Wallet className="mr-2 h-4 w-4" />
        Connect Wallet
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="pixel-font border-purple-500 text-purple-500 hover:bg-purple-100 border-2 transition-all duration-300"
        >
          <Wallet className="mr-2 h-4 w-4" />
          {`${account.slice(0, 6)}...${account.slice(-4)}`}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-72">
        <DropdownMenuLabel className="font-bold">Wallet Connected</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex justify-between">
          <Coins className="mr-2 h-4 w-4 text-green-500" />
          Balance: <span>{balance ? `${balance} TLOS` : <Loader2 className="h-4 w-4 animate-spin" />}</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={viewProceeds} className="cursor-pointer flex items-center">
          <Coins className="mr-2 h-4 w-4 text-yellow-500" /> View My Proceeds
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleCopyAddress} className="cursor-pointer flex items-center">
          <Copy className="mr-2 h-4 w-4 text-blue-500" /> Copy Address
        </DropdownMenuItem>
        <DropdownMenuItem onClick={openExplorer} className="cursor-pointer flex items-center">
          <ExternalLink className="mr-2 h-4 w-4 text-blue-500" /> View on Explorer
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={handleDisconnect}
          className="text-red-500 cursor-pointer flex items-center"
        >
          <LogOut className="mr-2 h-4 w-4" /> Disconnect
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

