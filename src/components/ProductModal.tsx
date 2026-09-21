import React, { useState, useEffect } from 'react';
import { X, Plus, Minus, Tag, Check, ShoppingBag, MessageSquare } from 'lucide-react';
import type { Product, ProductVariation } from '../types';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatters';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const { addToCart, setIsCartOpen } = useCart();
  
  const [selectedVariation, setSelectedVariation] = useState<ProductVariation | undefined>(undefined);
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState('');
  const [addedSuccess, setAddedSuccess] = useState(false);
  const [validationError, setValidationError] = useState(false);

  useEffect(() => {
    if (product) {
      setQuantity(1);
      setNotes('');
      setAddedSuccess(false);
      setValidationError(false);
      
      if (product.variations && product.variations.length > 0) {
        setSelectedVariation(product.variations[0]); // Select first by default
      } else {
        setSelectedVariation(undefined);
      }
    }
  }, [product]);

  if (!product) return null;

  const unitPrice = selectedVariation ? selectedVariation.price : product.price;
  const totalPrice = unitPrice * quantity;

  const handleAddToCart = () => {
    if (product.variations && product.variations.length > 0 && !selectedVariation) {
      setValidationError(true);
      return;
    }

    addToCart(product, selectedVariation, quantity, notes);
    setAddedSuccess(true);

    setTimeout(() => {
      onClose();
      setIsCartOpen(true); // Open cart to show item added
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fadeIn">
      <div 
        className="bg-white w-full max-w-lg rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh] sm:max-h-[85vh] animate-slideUp border border-paoGold-500/30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header with Image */}
        <div className="relative w-full h-56 bg-paoWine-900 flex-shrink-0">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors shadow-md backdrop-blur-md"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Product Title & Code on Image */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            {product.code && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-lg bg-paoWine-800/90 text-paoGold-400 font-mono text-xs font-bold mb-1 border border-paoGold-500/50">
                <Tag className="w-3 h-3 mr-1" />
                CÓD {product.code}
              </span>
            )}
            <h2 className="font-serif text-2xl font-bold text-white drop-shadow-md">
              {product.name}
            </h2>
          </div>
        </div>

        {/* Modal Content Scrollable */}
        <div className="p-5 overflow-y-auto space-y-5 flex-1 divide-y divide-gray-100">
          
          {/* Description & Tags */}
          <div className="space-y-2">
            <p className="text-sm text-gray-700 leading-relaxed font-normal">
              {product.description}
            </p>

            {product.tags && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {product.tags.map((tag, idx) => (
                  <span 
                    key={idx}
                    className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-paoSand-100 text-paoWine-900 border border-paoSand-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Variations Selector (Mandatory if variations exist) */}
          {product.variations && product.variations.length > 0 && (
            <div className="pt-4 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-paoWine-800 flex items-center">
                  <span>Selecione o Tamanho / Opção</span>
                  <span className="ml-1 text-red-500">*</span>
                </h3>
                <span className="text-[10px] bg-paoWine-100 text-paoWine-800 px-2 py-0.5 rounded-md font-semibold">
                  Obrigatório
                </span>
              </div>

              {validationError && (
                <p className="text-xs text-red-600 font-semibold animate-bounce">
                  Por favor, escolha uma opção abaixo para continuar.
                </p>
              )}

              <div className="space-y-2">
                {product.variations.map((varItem) => {
                  const isSelected = selectedVariation?.id === varItem.id;

                  return (
                    <label
                      key={varItem.id}
                      onClick={() => {
                        setSelectedVariation(varItem);
                        setValidationError(false);
                      }}
                      className={`flex items-center justify-between p-3.5 rounded-2xl border cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-paoWine-50 border-paoWine-700 shadow-sm ring-1 ring-paoWine-700'
                          : 'bg-white border-gray-200 hover:border-paoWine-300'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                          isSelected ? 'border-paoWine-700 bg-paoWine-700' : 'border-gray-400'
                        }`}>
                          {isSelected && <div className="w-2 h-2 rounded-full bg-white"></div>}
                        </div>
                        <span className={`text-sm font-semibold ${isSelected ? 'text-paoWine-900' : 'text-gray-800'}`}>
                          {varItem.name}
                        </span>
                      </div>

                      <span className={`font-serif text-sm font-extrabold ${isSelected ? 'text-paoWine-800' : 'text-gray-700'}`}>
                        {formatCurrency(varItem.price)}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          )}

          {/* Observations Field */}
          <div className="pt-4 space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-700 flex items-center space-x-1">
              <MessageSquare className="w-3.5 h-3.5 text-paoWine-700 mr-1" />
              <span>Informações Adicionais Opcionais</span>
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ex: Sem cebola, molho à parte, bem passado, ponto da carne..."
              rows={2}
              className="w-full p-3 text-xs rounded-2xl bg-paoSand-50 border border-paoSand-300 focus:outline-none focus:ring-2 focus:ring-paoWine-700 focus:bg-white transition-all placeholder-gray-400"
            />
          </div>

        </div>

        {/* Modal Footer Controls & Add Button */}
        <div className="p-4 bg-paoSand-50 border-t border-paoSand-200 space-y-3">
          
          <div className="flex items-center justify-between">
            {/* Quantity Controls */}
            <div className="flex items-center space-x-3 bg-white p-1.5 rounded-2xl border border-paoSand-300 shadow-sm">
              <button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                disabled={quantity <= 1}
                className="w-9 h-9 rounded-xl bg-paoSand-100 hover:bg-paoSand-200 text-paoWine-900 font-bold flex items-center justify-center disabled:opacity-40 transition-colors"
                aria-label="Diminuir quantidade"
              >
                <Minus className="w-4 h-4" />
              </button>

              <span className="font-serif font-extrabold text-lg text-paoWine-900 w-6 text-center">
                {quantity}
              </span>

              <button
                onClick={() => setQuantity(q => q + 1)}
                className="w-9 h-9 rounded-xl bg-paoWine-700 hover:bg-paoWine-800 text-white font-bold flex items-center justify-center transition-colors shadow-sm"
                aria-label="Aumentar quantidade"
              >
                <Plus className="w-4 h-4 text-paoGold-400" />
              </button>
            </div>

            {/* Price Summary */}
            <div className="text-right">
              <span className="text-[10px] text-gray-500 font-medium block">Total do Item</span>
              <span className="font-serif text-xl font-extrabold text-paoWine-800">
                {formatCurrency(totalPrice)}
              </span>
            </div>
          </div>

          {/* Add to Cart Submit Button */}
          <button
            onClick={handleAddToCart}
            className={`w-full py-3.5 px-4 rounded-2xl font-bold text-sm flex items-center justify-center space-x-2 shadow-wine-glow transition-all active:scale-[0.98] ${
              addedSuccess 
                ? 'bg-emerald-600 text-white' 
                : 'bg-paoWine-800 hover:bg-paoWine-900 text-paoGold-300'
            }`}
          >
            {addedSuccess ? (
              <>
                <Check className="w-5 h-5 text-white" />
                <span>Adicionado ao Carrinho!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-5 h-5 text-paoGold-400" />
                <span>Adicionar ao Carrinho • {formatCurrency(totalPrice)}</span>
              </>
            )}
          </button>

        </div>

      </div>
    </div>
  );
};
