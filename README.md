# Pixel8r

Pixel8r is a decentralized NFT creation and marketplace platform built using Next.js, Solidity smart contracts, and a suite of modern web technologies. It allows users to create pixel art NFTs, list them on a marketplace, and manage their collections, all while leveraging blockchain technology for ownership and transparency.

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

