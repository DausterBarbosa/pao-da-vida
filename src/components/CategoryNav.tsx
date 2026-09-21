import React from 'react';
import { 
  UtensilsCrossed, 
  Pizza, 
  Sandwich, 
  Soup, 
  Coffee, 
  CookingPot, 
  CupSoda 
} from 'lucide-react';
import type { Category, CategoryId } from '../types';

interface CategoryNavProps {
  categories: Category[];
  activeCategory: CategoryId;
  onSelectCategory: (id: CategoryId) => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  UtensilsCrossed: <UtensilsCrossed className="w-4 h-4" />,
  Pizza: <Pizza className="w-4 h-4" />,
  Sandwich: <Sandwich className="w-4 h-4" />,
  Soup: <Soup className="w-4 h-4" />,
  Coffee: <Coffee className="w-4 h-4" />,
  CookingPot: <CookingPot className="w-4 h-4" />,
  CupSoda: <CupSoda className="w-4 h-4" />,
};

export const CategoryNav: React.FC<CategoryNavProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <nav className="my-2 sticky top-[69px] z-30 bg-paoSand-100/90 backdrop-blur-md py-2 border-b border-paoSand-200">
      <div className="flex items-center space-x-2 overflow-x-auto hide-scrollbar px-1 py-1">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all duration-200 flex-shrink-0 shadow-sm border ${
                isActive
                  ? 'bg-paoWine-800 text-paoGold-300 border-paoGold-500 shadow-wine-glow scale-[1.02]'
                  : 'bg-white text-gray-700 hover:text-paoWine-800 hover:bg-paoSand-50 border-paoSand-200'
              }`}
            >
              <span className={isActive ? 'text-paoGold-400' : 'text-paoWine-700'}>
                {ICON_MAP[cat.icon] || <UtensilsCrossed className="w-4 h-4" />}
              </span>

              <span>{cat.shortName}</span>

              {cat.badge && (
                <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-black ${
                  isActive 
                    ? 'bg-paoGold-500 text-paoWine-900' 
                    : 'bg-paoWine-100 text-paoWine-800'
                }`}>
                  {cat.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
