import React, { useEffect, useState } from 'react';
import { RESTAURANT_INFO } from '../data/menuData';

interface SplashScreenProps {
  onFinish: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onFinish, 400); // Allow fade animation to finish
    }, 2000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-between bg-gradient-to-b from-paoWine-800 via-paoWine-700 to-paoWine-900 text-white p-6 transition-opacity duration-500 ease-out ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      
      {/* Decorative top pattern */}
      <div className="w-full flex justify-center pt-8">
        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-paoGold-500 to-transparent rounded-full opacity-60"></div>
      </div>

      {/* Main Branding Logo & Title */}
      <div className="flex flex-col items-center text-center max-w-sm my-auto space-y-6">
        {/* Animated Badge Icon */}
        <div className="relative">
          <div className="absolute -inset-4 bg-paoGold-500/20 rounded-full blur-xl animate-pulseSlow"></div>
          <div className="w-36 h-36 rounded-3xl bg-paoWine-900/90 border-2 border-paoGold-500/80 shadow-gold-glow flex items-center justify-center p-4 relative z-10 overflow-hidden">
            <img src="/logo.png" alt="Restaurante Pão da Vida Logo" className="w-full h-full object-contain filter drop-shadow-lg" />
          </div>
        </div>

        <div>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-paoGold-400 drop-shadow-md">
            Pão da Vida
          </h1>
          <p className="text-xs font-semibold tracking-widest text-paoSand-300 uppercase mt-1">
            Restaurante • Padaria • Delivery
          </p>
        </div>

        {/* Loading Spinner */}
        <div className="flex items-center space-x-2 pt-4">
          <div className="w-3 h-3 bg-paoGold-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-3 h-3 bg-paoGold-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-3 h-3 bg-paoGold-200 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>

      {/* Humanitarian Footer Notice */}
      <div className="w-full max-w-sm text-center border-t border-paoGold-500/20 pt-4 pb-2 space-y-2">
        <p className="text-xs text-paoSand-200 leading-relaxed font-medium italic">
          "{RESTAURANT_INFO.socialCause}"
        </p>
        <p className="text-[10px] text-paoGold-400 font-bold uppercase tracking-wider">
          Viçosa do Ceará - CE
        </p>
      </div>

    </div>
  );
};
