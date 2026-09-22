import React, { useState } from 'react';
import { MapPin, Phone, Clock, ShoppingBag, Download, Info } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';
import { useCart } from '../context/CartContext';
import { usePwa } from '../context/PwaContext';

export const Header: React.FC = () => {
  const { totalItems, setIsCartOpen } = useCart();
  const { isInstallable, promptInstall } = usePwa();
  const [showAddressModal, setShowAddressModal] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-paoWine-800 text-white shadow-soft-xl border-b border-paoGold-500/30">
      <div className="max-w-4xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">

          {/* Restaurant Brand Identity */}
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="Restaurante Pão da Vida Logo" className="w-12 h-12 object-contain flex-shrink-0 drop-shadow-md" />

            <div>
              <div className="flex items-center space-x-2">
                <h1 className="font-serif text-xl font-bold tracking-tight text-paoGold-400">
                  {RESTAURANT_INFO.name}
                </h1>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1"></span>
                  Aberto
                </span>
              </div>

              <button
                onClick={() => setShowAddressModal(true)}
                className="flex items-center text-xs text-paoSand-300 hover:text-paoGold-300 transition-colors text-left"
              >
                <MapPin className="w-3 h-3 text-paoGold-400 mr-1 flex-shrink-0" />
                <span className="truncate max-w-[200px] sm:max-w-xs">{RESTAURANT_INFO.address}, Viçosa do Ceará</span>
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            {isInstallable && (
              <button
                onClick={promptInstall}
                className="hidden sm:flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-paoGold-500 hover:bg-paoGold-600 text-paoWine-900 text-xs font-bold transition-all shadow-md active:scale-95"
                title="Instalar aplicativo PWA"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Instalar App</span>
              </button>
            )}

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-2xl bg-paoWine-900/80 hover:bg-paoWine-900 border border-paoGold-500/40 text-paoGold-400 transition-all active:scale-95"
              aria-label="Ver Carrinho"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-paoGold-500 text-paoWine-900 text-[11px] font-extrabold flex items-center justify-center shadow-md animate-bounce">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Quick info bar on mobile */}
      <div className="bg-paoWine-900/90 py-1.5 px-4 text-[11px] text-paoSand-300 border-t border-paoWine-700 flex items-center justify-between overflow-x-auto whitespace-nowrap">
        <div className="flex items-center space-x-3">
          <span className="flex items-center">
            <Clock className="w-3 h-3 text-paoGold-400 mr-1" />
            06:30h às 22:00h
          </span>
          <span className="text-paoWine-600">•</span>
          <span className="flex items-center">
            <Phone className="w-3 h-3 text-paoGold-400 mr-1" />
            {RESTAURANT_INFO.phone}
          </span>
        </div>
        <button
          onClick={() => setShowAddressModal(true)}
          className="text-paoGold-400 hover:underline flex items-center font-medium ml-2"
        >
          <Info className="w-3 h-3 mr-1" />
          Ver detalhes
        </button>
      </div>

      {/* Address & Info Modal */}
      {showAddressModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full text-gray-800 shadow-2xl border border-paoGold-500/30 space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-serif text-lg font-bold text-paoWine-800">
                Restaurante Pão da Vida
              </h3>
              <button
                onClick={() => setShowAddressModal(false)}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold hover:bg-gray-200"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-paoWine-700 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-bold text-gray-900">{RESTAURANT_INFO.address}</p>
                  <p>{RESTAURANT_INFO.city}</p>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="w-4 h-4 text-paoWine-700 mr-2 flex-shrink-0" />
                <p className="font-medium">{RESTAURANT_INFO.phone}</p>
              </div>

              <div className="flex items-start">
                <Clock className="w-4 h-4 text-paoWine-700 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-emerald-700">🟢 Aberto Todos os Dias</p>
                  <p className="text-xs text-gray-600">{RESTAURANT_INFO.openingHours}</p>
                  <p className="text-xs text-gray-600 mt-1">{RESTAURANT_INFO.selfServiceHours}</p>
                  <p className="text-xs text-gray-600">{RESTAURANT_INFO.soupsHours}</p>
                </div>
              </div>
            </div>

            <div className="bg-paoSand-100 p-3 rounded-2xl border border-paoGold-300 text-xs text-paoWine-900 leading-relaxed font-medium">
              💡 {RESTAURANT_INFO.socialCause}
            </div>

            <button
              onClick={() => setShowAddressModal(false)}
              className="w-full py-2.5 rounded-xl bg-paoWine-700 text-white font-bold hover:bg-paoWine-800 transition-colors"
            >
              Entendido
            </button>
          </div>
        </div>
      )}

    </header>
  );
};
