import React, { forwardRef } from 'react';
import Image from 'next/image';

interface WalletCardProps {
  username: string;
  avatar: string;
  walletAddress: string;
}

const WalletCard = forwardRef<HTMLDivElement, WalletCardProps>(
  ({ username, avatar, walletAddress }, ref) => {
    return (
      <div
        ref={ref}
        className="relative bg-gradient-to-r from-purple-800 via-indigo-600 to-blue-500 text-white p-4 sm:p-6 md:p-10 rounded-xl shadow-2xl w-full mx-auto transform scale-105 flex flex-col space-y-4 sm:space-y-6"
      >
        {/* Logo */}
        <div className="flex justify-between items-start">
          <div className="w-12 h-12 sm:w-16 sm:h-16">
            <Image src="/assets/logo.png" alt="Logo" width={64} height={64} className="object-contain" />
          </div>
        </div>

        {/* Avatar Section */}
        <div className="flex flex-col sm:flex-row items-center sm:space-x-8 space-y-4 sm:space-y-0">
          <div className="w-24 h-24 sm:w-32 sm:h-32">
            <Image
              src={avatar}
              alt="Avatar"
              width={120}
              height={120}
              className="rounded-full border-4 border-white shadow-lg w-full h-full object-cover"
            />
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-2xl sm:text-4xl font-bold pixel-font text-white mb-2">{username}</h2>
            <p className="text-sm sm:text-lg text-gray-200 pixel-font break-all max-w-full">
              {walletAddress || 'Not connected'}
            </p>
          </div>
        </div>

        {/* Network Section */}
        <div className="bg-white bg-opacity-10 p-4 sm:p-6 rounded-lg">
          <p className="text-base sm:text-lg pixel-font text-teal-200 mb-2">Network: Telos Testnet</p>
          <p className="text-sm sm:text-base text-gray-300 pixel-font">
            Use this card to manage your crypto assets securely and stylishly.
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 rounded-xl pointer-events-none">
          <div className="w-full h-full bg-gradient-to-br from-transparent to-black opacity-20 rounded-xl"></div>
          <div className="w-2/3 h-2/3 absolute top-4 left-4 rounded-full bg-gradient-to-br from-white to-transparent opacity-10 blur-2xl"></div>
        </div>
      </div>
    );
  }
);

WalletCard.displayName = 'WalletCard';

export default WalletCard;
