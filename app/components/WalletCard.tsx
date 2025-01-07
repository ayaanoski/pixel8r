import React, { forwardRef, useState, useCallback } from 'react';
import Image from 'next/image';

interface WalletCardProps {
  username: string;
  avatar: string;
  walletAddress: string;
}

const WalletCard = forwardRef<HTMLDivElement, WalletCardProps>(
  ({ username, avatar, walletAddress }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    const [tiltStyle, setTiltStyle] = useState({ transform: 'perspective(1000px)' });
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const clamp = (value: number, min: number, max: number) => {
      return Math.min(Math.max(value, min), max);
    };

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
      if (!isHovered) return;

      const card = e.currentTarget;
      const cardRect = card.getBoundingClientRect();
      
      const x = e.clientX - cardRect.left - cardRect.width / 2;
      const y = e.clientY - cardRect.top - cardRect.height / 2;
      
      const normalizedX = clamp(x / (cardRect.width / 2), -1, 1);
      const normalizedY = clamp(y / (cardRect.height / 2), -1, 1);
      
      const maxRotation = 10;
      const rotateX = lerp(0, -normalizedY * maxRotation, 0.5);
      const rotateY = lerp(0, normalizedX * maxRotation, 0.5);
      const scale = isHovered ? 1.02 : 1;

      requestAnimationFrame(() => {
        setTiltStyle({
          transform: `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale3d(${scale}, ${scale}, ${scale})
          `,
        });
        
        setPosition({
          x: lerp(position.x, (x + cardRect.width / 2) / cardRect.width * 100, 0.1),
          y: lerp(position.y, (y + cardRect.height / 2) / cardRect.height * 100, 0.1)
        });
      });
    }, [isHovered, position]);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => {
      setIsHovered(false);
      requestAnimationFrame(() => {
        setTiltStyle({
          transform: `
            perspective(1000px)
            rotateX(0deg)
            rotateY(0deg)
            scale3d(1, 1, 1)
          `
        });
      });
    };

    return (
      <div className="relative p-1 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500">
        <div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative bg-gradient-to-r from-purple-900 via-indigo-800 to-blue-900 text-white p-4 sm:p-6 md:p-10 rounded-xl shadow-2xl w-full mx-auto transform will-change-transform flex flex-col space-y-4 sm:space-y-6"
          style={{
            ...tiltStyle,
            transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out'
          }}
        >
            {/* Shine Effect */}
            <div 
              className="absolute inset-0 rounded-xl pointer-events-none opacity-0 transition-opacity duration-300"
              style={{
                opacity: isHovered ? 0.2 : 0,
                background: `radial-gradient(circle at ${position.x}% ${position.y}%, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 50%)`,
                mixBlendMode: 'soft-light'
              }}
            />

            {/* Centered Logo Section */}
            <div className="flex flex-col items-center justify-center mb-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mb-3">
                <Image src="/assets/logo.png" alt="Logo" width={80} height={80} className="object-contain" />
              </div>
              <div className="text-4xl sm:text-5xl font-bold pixel-font text-purple-300">
                pixel8r
              </div>
            </div>

            {/* Avatar Section */}
            <div className="flex flex-col sm:flex-row items-center sm:space-x-8 space-y-4 sm:space-y-0">
              <div className="relative w-24 h-24 sm:w-32 sm:h-32">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-spin-slow" />
                <Image
                  src={avatar}
                  alt="Avatar"
                  width={120}
                  height={120}
                  className="rounded-full border-4 border-white shadow-lg w-full h-full object-cover relative z-10"
                />
              </div>
              <div className="text-center sm:text-left">
                <h2 className="text-2xl sm:text-4xl font-bold pixel-font text-white mb-4">
                  {username}
                </h2>
                <div className="bg-white/10 border border-white/20 rounded-lg p-3 backdrop-blur-sm">
                  <p className="text-sm sm:text-base text-gray-200 pixel-font break-all">
                    {walletAddress || 'Not connected'}
                  </p>
                </div>
              </div>
            </div>

            {/* Network Section */}
            <div className="bg-white/5 p-4 sm:p-6 rounded-lg border border-white/10">
              <p className="text-base sm:text-lg pixel-font text-teal-300 mb-2">
                Network: Telos Testnet
              </p>
              <p className="text-sm sm:text-base text-gray-300 pixel-font">
                Your gateway to the future of digital assets. Level up your crypto journey with pixel8r.
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 rounded-xl pointer-events-none">
              <div className="w-full h-full bg-gradient-to-br from-transparent to-black opacity-20 rounded-xl" />
              <div className="w-2/3 h-2/3 absolute top-4 left-4 rounded-full bg-gradient-to-br from-white to-transparent opacity-10 blur-2xl" />
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20" />
            </div>
        </div>
      </div>
    );
  }
);

WalletCard.displayName = 'WalletCard';

export default WalletCard;
