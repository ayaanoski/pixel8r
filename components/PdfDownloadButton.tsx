"use client"

import type React from "react"
import { Download } from "lucide-react"
import jsPDF from "jspdf"
import html2canvas from "html2canvas"

interface PdfDownloadButtonProps {
  nftId: string
}

const PdfDownloadButton: React.FC<PdfDownloadButtonProps> = ({ nftId }) => {
  const handleDownload = async () => {
    const element = document.getElementById("nft-details")
    if (!element) return

    try {
      const canvas = await html2canvas(element)
      const imgData = canvas.toDataURL("image/png")

      const pdf = new jsPDF()
      const imgProps = pdf.getImageProperties(imgData)
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight)
      pdf.save(`NFT_${nftId}_details.pdf`)
    } catch (error) {
      console.error("Error generating PDF:", error)
    }
  }

  return (
    <button
      onClick={handleDownload}
      className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg pixel-font flex items-center transition-colors duration-300"
    >
      <Download className="mr-2" size={18} />
      Download PDF
    </button>
  )
}

export default PdfDownloadButton

