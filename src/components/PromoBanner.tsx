import React from 'react';
import { Pizza, Utensils, Sparkles } from 'lucide-react';
import type { CategoryId } from '../types';

interface PromoBannerProps {
  onSelectCategory: (catId: CategoryId) => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ onSelectCategory }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
      {/* Quarta da Pizza Banner */}
      <div 
        onClick={() => onSelectCategory('pizzas')}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-paoWine-800 to-paoWine-900 p-4 text-white shadow-md border border-paoGold-500/40 cursor-pointer group transition-all hover:shadow-wine-glow"
      >
        <div className="absolute -right-6 -bottom-6 opacity-20 group-hover:scale-110 transition-transform duration-500">
          <Pizza className="w-36 h-36 text-paoGold-400" />
        </div>

        <div className="relative z-10 flex items-start justify-between">
          <div className="space-y-1">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black bg-paoGold-500 text-paoWine-900 uppercase tracking-widest">
              <Sparkles className="w-3 h-3 mr-1" />
              Promoção Especial
            </span>
            <h3 className="font-serif text-xl font-bold text-paoGold-300">
              Quarta da Pizza 🍕
            </h3>
            <p className="text-xs text-paoSand-200 leading-relaxed max-w-[220px]">
              Preços promocionais imperdíveis em todas as nossas pizzas artesanais e Calzones!
            </p>
          </div>

          <button className="px-3 py-1.5 rounded-xl bg-paoGold-500 text-paoWine-900 text-xs font-bold shadow-md group-hover:bg-paoGold-400 transition-colors flex-shrink-0">
            Ver Pizzas
          </button>
        </div>
      </div>

      {/* Self Service & Prato Executivo Banner */}
      <div 
        onClick={() => onSelectCategory('executivos')}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-700 via-amber-800 to-paoWine-900 p-4 text-white shadow-md border border-paoGold-500/40 cursor-pointer group transition-all hover:shadow-wine-glow"
      >
        <div className="absolute -right-6 -bottom-6 opacity-20 group-hover:scale-110 transition-transform duration-500">
          <Utensils className="w-36 h-36 text-paoGold-300" />
        </div>

        <div className="relative z-10 flex items-start justify-between">
          <div className="space-y-1">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black bg-emerald-500 text-white uppercase tracking-widest">
              Almoço & Jantar
            </span>
            <h3 className="font-serif text-xl font-bold text-paoGold-300">
              Bifê Self Service & Executivos
            </h3>
            <p className="text-xs text-paoSand-200 leading-relaxed max-w-[220px]">
              Comida feita no dia para cada turno. Pratos executivos selecionados pelo Chef!
            </p>
          </div>

          <button className="px-3 py-1.5 rounded-xl bg-paoGold-500 text-paoWine-900 text-xs font-bold shadow-md group-hover:bg-paoGold-400 transition-colors flex-shrink-0">
            Ver Pratos
          </button>
        </div>
      </div>
    </div>
  );
};
