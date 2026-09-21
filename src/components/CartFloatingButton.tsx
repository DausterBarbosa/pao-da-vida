import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatters';

export const CartFloatingButton: React.FC = () => {
  const { totalItems, subtotal, setIsCartOpen } = useCart();

  if (totalItems === 0) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 max-w-lg mx-auto animate-slideUp">
      <button
        onClick={() => setIsCartOpen(true)}
        className="w-full bg-gradient-to-r from-paoWine-800 via-paoWine-700 to-paoWine-900 text-white py-3.5 px-5 rounded-2xl shadow-wine-glow border border-paoGold-500/50 flex items-center justify-between group transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
      >
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-paoWine-950 flex items-center justify-center text-paoGold-400 border border-paoGold-500/40">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-paoGold-500 text-paoWine-950 font-extrabold text-[11px] flex items-center justify-center shadow-md animate-pulse">
              {totalItems}
            </span>
          </div>

          <div className="text-left">
            <span className="text-[10px] text-paoSand-300 uppercase tracking-widest font-semibold block">
              Seu Carrinho ({totalItems})
            </span>
            <span className="font-serif text-lg font-bold text-paoGold-400">
              {formatCurrency(subtotal)}
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-1 text-xs font-bold text-paoGold-300 group-hover:translate-x-1 transition-transform">
          <span>Ver Pedido</span>
          <ArrowRight className="w-4 h-4 text-paoGold-400" />
        </div>
      </button>
    </div>
  );
};
