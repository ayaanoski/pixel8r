import { NextResponse } from 'next/server'
import { create } from 'ipfs-http-client'
import { ethers } from 'ethers'
import PixelNFTABI from '../../../build/contracts/PixelNFT.json'

// Configure IPFS client
const projectId = process.env.INFURA_IPFS_PROJECT_ID
const projectSecret = process.env.INFURA_IPFS_PROJECT_SECRET
const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64')

const ipfs = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
    authorization: auth,
  },
})

const contractAddress = process.env.NFT_CONTRACT_ADDRESS
const providerUrl = process.env.TELOS_TESTNET_RPC_URL
const privateKey = process.env.PRIVATE_KEY

if (!contractAddress || !providerUrl || !privateKey) {
  throw new Error('Missing environment variables')
}

export async function POST(req: Request) {
  try {
    const { name, description, image, price } = await req.json()

    if (!name || !description || !image || !price) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 })
    }

    // Upload image to IPFS
    const imageFile = Buffer.from(image.split(',')[1], 'base64')
    const imageCid = await ipfs.add(imageFile)

    // Create metadata
    const metadata = {
      name,
      description,
      image: `ipfs://${imageCid.path}`,
      price,
    }

    // Upload metadata to IPFS
    const metadataCid = await ipfs.add(JSON.stringify(metadata))

    // Mint NFT
    const provider = new ethers.JsonRpcProvider(providerUrl)
    const wallet = new ethers.Wallet(privateKey, provider)
    const contract = new ethers.Contract(contractAddress, PixelNFTABI.abi, wallet)

    const tx = await contract.mintNFT(wallet.address, `ipfs://${metadataCid.path}`)
    const receipt = await tx.wait()

    const tokenId = receipt.logs[0].args[2]

    return NextResponse.json({ success: true, tokenId: tokenId.toString(), metadataUri: `ipfs://${metadataCid.path}` })
  } catch (error: any) {
    console.error('Error creating NFT:', error)
    return NextResponse.json({ success: false, error: error.message || 'Failed to create NFT' }, { status: 500 })
  }
}

