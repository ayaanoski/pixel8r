# Pixel8r

**Pixel8r** is a decentralized NFT platform built with **Next.js**, **Solidity**, and modern web tech, empowering users to create pixel art NFTs, list them on a marketplace, and manage collections with blockchain transparency.

What sets **Pixel8r** apart? **It makes digital art copyright-proof.** By subtly altering each pixel’s composition, the platform ensures every artwork is **one-of-a-kind and immune to copyright claims**. Your creations remain **unique, secure, and truly yours** — down to the last pixel.

## Live Demo: https://pixel8r.vercel.app
## Live Demo with AI AGENT : https://pixel8r2.vercel.app

![image](https://github.com/user-attachments/assets/0854d020-6474-4f9e-86e7-8408e5c5d4a7)

![image](https://github.com/user-attachments/assets/00be1263-6bef-41db-a19e-d4a202474fd6)

![image](https://github.com/user-attachments/assets/8c86b092-e036-4565-8e01-2493760db823)

![image](https://github.com/user-attachments/assets/fb3eb5eb-9752-41b9-859a-07f8f4fc20a4)



## Features
- **NFT Maker**: Create unique pixel art NFTs directly from the platform.
- **Marketplace**: Browse, buy, and sell NFTs in a decentralized marketplace.
- **My Collection**: Manage your NFT collection in one place.
- **Pixelate Tool**: Convert images into pixel art directly on the platform.
- **Profile Management**: Customize your profile and view transaction history.
- **Blockchain Integration**: Smart contracts deployed on the Polygon blockchain.

## Tech Stack
- **Next.js** for frontend development
- **Tailwind CSS** for styling
- **TypeScript** for type-safe development
- **Solidity** for smart contract development
- **Truffle** for smart contract management
- **React Hooks** for state management

---

## Directory Structure
```
ayaandoski-pixel8r/
├── app/
│   ├── components/
│   ├── history/
│   ├── marketplace/
│   ├── my-collection/
│   ├── nft-maker/
│   ├── pixelate/
│   └── profile/
├── components/
│   └── ui/
├── contracts/
├── hooks/
├── lib/
├── migrations/
├── public/
│   └── assets/
├── styles/
└── test/
```

## Getting Started
### Prerequisites
Ensure you have the following installed:
- Node.js (v16+)
- npm or yarn
- Truffle
- MetaMask extension for browser

### Step 1: Clone the Repository
```bash
git clone https://github.com/ayaanoski/pixel8r.git
cd pixel8r
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Set Up Environment Variables
Create a `.env` file in the root directory and add the following variables:
```env
NEXT_PUBLIC_INFURA_API_KEY=your_infura_api_key
NEXT_PUBLIC_WALLET_ADDRESS=your_wallet_address
```

### Step 4: Compile and Deploy Smart Contracts
Navigate to the `contracts` directory and deploy the smart contracts using Truffle.
```bash
truffle compile
truffle migrate --network your_network_name
```

### Step 5: Run the Development Server
Start the Next.js development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 6: Connect Wallet
- Ensure your MetaMask wallet is connected to the same network as your deployed contracts.

### Step 7: Create NFTs
- Navigate to the NFT Maker section and create your first NFT.

### Step 8: Explore the Marketplace
- List your NFTs on the marketplace and explore other collections.

---

## Smart Contract Details
The main contract is `PixelNFT.sol` located in the `contracts/` directory. This contract handles the minting, transferring, and marketplace functionality for NFTs.

## Components
Reusable UI components are in the `components/ui/` directory, such as:
- `Button`
- `Card`
- `Toast`
- `Accordion`
- `Avatar`

## Hooks
Custom hooks like `useToast` and `useMobile` are located in the `hooks/` directory.

---

## Contributing
1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

---

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

---

## Contact
For any inquiries, please contact:
- **GitHub**: [Ayaan Adil](https://github.com/ayaanoski)
- **LinkedIn**: [Ayaan Adil](https://www.linkedin.com/in/ayaan-adil-371137268/)

