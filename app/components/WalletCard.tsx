import Image from 'next/image';

interface WalletCardProps {
  username: string;
  avatar: string;
  walletAddress: string;
}

export default function WalletCard({ username, avatar, walletAddress }: WalletCardProps) {
  return (
    <div className="relative bg-gradient-to-r from-purple-800 via-indigo-600 to-blue-500 text-white p-10 rounded-xl shadow-2xl max-w-4xl w-full mx-auto transform scale-105 flex flex-col space-y-6">
      {/* Logo */}
      <div className="flex justify-between items-start">
        <div className="w-16 h-16">
          <Image src="/assets/logo.png" alt="Logo" width={64} height={64} className="object-contain" />
        </div>
      </div>

      {/* Avatar Section */}
      <div className="flex items-center space-x-8">
        <Image src={avatar} alt="Avatar" width={120} height={120} className="rounded-full border-4 border-white shadow-lg" />
        <div>
          <h2 className="text-4xl font-bold pixel-font text-white mb-2">{username}</h2>
          <p className="text-lg text-gray-200 pixel-font break-all">
            {walletAddress || 'Not connected'}
          </p>
        </div>
      </div>

      {/* Network Section */}
      <div className="bg-white bg-opacity-10 p-6 rounded-lg">
        <p className="text-lg pixel-font text-teal-200 mb-2">Network: Telos Testnet</p>
        <p className="text-base text-gray-300 pixel-font">
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