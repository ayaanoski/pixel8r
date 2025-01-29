import type React from "react"
import { motion } from "framer-motion"

interface DeploymentStatusProps {
  status: string
}

const DeploymentStatus: React.FC<DeploymentStatusProps> = ({ status }) => {
  const steps = [
    "Uploading image to IPFS",
    "Creating metadata",
    "Uploading metadata to IPFS",
    "Minting NFT",
    "Listing NFT",
    "NFT successfully created and listed!",
  ]

  const currentStep = steps.findIndex((step) => status.includes(step))

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-6 p-4 bg-gray-800 rounded-lg"
    >
      <h3 className="text-lg font-semibold mb-2 pixel-font text-purple-400">Deployment Progress</h3>
      <ul className="space-y-2">
        {steps.map((step, index) => (
          <li
            key={index}
            className={`flex items-center pixel-font ${index <= currentStep ? "text-green-400" : "text-gray-400"}`}
          >
            <span className="mr-2">{index <= currentStep ? "✓" : "○"}</span>
            {step}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-gray-300 pixel-font">{status}</p>
    </motion.div>
  )
}

export default DeploymentStatus

