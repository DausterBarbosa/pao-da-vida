import React from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  resultCount?: number;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearchChange,
  resultCount,
}) => {
  return (
    <div className="relative my-3">
      <div className="relative flex items-center">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-paoWine-700">
          <Search className="w-4 h-4" />
        </div>

        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Buscar prato por nome ou código (ex: COD 831, Pizza, Cappuccino)..."
          className="w-full pl-10 pr-10 py-3 rounded-2xl bg-white border border-paoSand-300 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-paoWine-700 focus:border-paoWine-700 shadow-sm transition-all"
        />

        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-paoWine-700 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {searchQuery && resultCount !== undefined && (
        <div className="mt-1.5 px-2 text-xs font-semibold text-paoWine-800 flex justify-between items-center">
          <span>Encontrados: {resultCount} item(ns)</span>
          <button 
            onClick={() => onSearchChange('')}
            className="text-xs text-paoWine-700 underline font-normal"
          >
            Limpar busca
          </button>
        </div>
      )}
    </div>
  );
};
