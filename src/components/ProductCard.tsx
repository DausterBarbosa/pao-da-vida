import React from 'react';
import { Plus, Tag } from 'lucide-react';
import type { Product } from '../types';
import { formatCurrency } from '../utils/formatters';

interface ProductCardProps {
  product: Product;
  onOpenModal: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenModal }) => {
  const hasVariations = product.variations && product.variations.length > 0;
  
  // Starting price display
  const startingPrice = hasVariations
    ? Math.min(...product.variations!.map(v => v.price))
    : product.price;

  return (
    <div 
      onClick={() => onOpenModal(product)}
      className="group bg-white rounded-3xl overflow-hidden border border-paoSand-200/80 shadow-sm hover:shadow-soft-xl transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 relative"
    >
      <div>
        {/* Image Container with Badges */}
        <div className="relative w-full h-44 overflow-hidden bg-paoSand-200">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            onError={(e) => {
              // Fallback image if unsplash fails
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          {/* Code Badge */}
          {product.code && (
            <span className="absolute top-3 left-3 bg-paoWine-900/90 text-paoGold-400 font-mono text-[11px] font-bold px-2.5 py-1 rounded-xl shadow-md border border-paoGold-500/40 backdrop-blur-md flex items-center">
              <Tag className="w-3 h-3 mr-1 text-paoGold-400" />
              CÓD {product.code}
            </span>
          )}

          {/* Promo Badge */}
          {product.isPromo && (
            <span className="absolute top-3 right-3 bg-gradient-to-r from-amber-500 to-paoGold-500 text-paoWine-950 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-xl shadow-md tracking-wider">
              {product.promoText || 'Destaque'}
            </span>
          )}

          {/* Variations tag */}
          {hasVariations && (
            <span className="absolute bottom-2 left-3 bg-white/90 text-paoWine-800 text-[10px] font-bold px-2 py-0.5 rounded-lg shadow-sm backdrop-blur-sm">
              Opções de Tamanho
            </span>
          )}
        </div>

        {/* Content Body */}
        <div className="p-4 space-y-2">
          <h3 className="font-serif text-base font-bold text-gray-900 leading-snug group-hover:text-paoWine-700 transition-colors">
            {product.name}
          </h3>

          <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Tags */}
          {product.tags && product.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 pt-1">
              {product.tags.slice(0, 2).map((tag, idx) => (
                <span 
                  key={idx} 
                  className="text-[9px] font-semibold px-2 py-0.5 rounded-md bg-paoSand-100 text-paoWine-800 border border-paoSand-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer Price & Action */}
      <div className="px-4 pb-4 pt-2 flex items-center justify-between border-t border-paoSand-100 mt-2">
        <div>
          {hasVariations && (
            <span className="text-[10px] text-gray-500 font-medium block">A partir de</span>
          )}
          <span className="font-serif text-lg font-extrabold text-paoWine-800">
            {formatCurrency(startingPrice)}
          </span>
        </div>

        <button 
          onClick={(e) => {
            e.stopPropagation();
            onOpenModal(product);
          }}
          className="flex items-center space-x-1 px-3 py-2 rounded-2xl bg-paoWine-700 hover:bg-paoWine-800 text-white font-bold text-xs shadow-md transition-all active:scale-95 group-hover:shadow-wine-glow"
        >
          <Plus className="w-4 h-4 text-paoGold-400" />
          <span>Pedir</span>
        </button>
      </div>
    </div>
  );
};
