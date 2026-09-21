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
          <div className="w-32 h-32 rounded-3xl bg-paoWine-900 border-2 border-paoGold-500/80 shadow-gold-glow flex items-center justify-center p-4 relative z-10">
            <svg viewBox="0 0 192 192" className="w-full h-full">
              <circle cx="96" cy="96" r="80" fill="none" stroke="#D4AF37" strokeWidth="2" strokeDasharray="6 4"/>
              <g transform="translate(46, 42)">
                <path d="M50,20 C50,20 60,35 50,50 C40,35 50,20 50,20 Z" fill="#E6C280"/>
                <path d="M35,30 C35,30 45,40 40,55 C30,45 35,30 35,30 Z" fill="#D4AF37"/>
                <path d="M65,30 C65,30 55,40 60,55 C70,45 65,30 65,30 Z" fill="#D4AF37"/>
                <path d="M 30,55 Q 15,40 30,30 Q 50,15 70,30 Q 85,40 70,55 Z" fill="#FFFFFF"/>
                <path d="M 28,52 Q 25,70 30,75 H 70 Q 75,70 72,52 Z" fill="#FFFFFF"/>
                <path d="M 30,75 H 70 V 82 H 30 Z" fill="#D4AF37"/>
              </g>
            </svg>
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
