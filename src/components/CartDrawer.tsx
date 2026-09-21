import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag, MessageSquare } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatters';

export const CartDrawer: React.FC = () => {
  const { 
    cart, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    subtotal, 
    totalItems, 
    isCartOpen, 
    setIsCartOpen,
    setIsCheckoutOpen 
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex justify-end animate-fadeIn">
      <div className="bg-paoSand-100 w-full max-w-md h-full flex flex-col shadow-2xl animate-slideLeft border-l border-paoGold-500/30">
        
        {/* Header */}
        <div className="p-4 bg-paoWine-800 text-white flex items-center justify-between shadow-md border-b border-paoGold-500/30">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="w-5 h-5 text-paoGold-400" />
            <h2 className="font-serif text-lg font-bold text-paoGold-300">
              Seu Carrinho ({totalItems})
            </h2>
          </div>

          <div className="flex items-center space-x-2">
            {cart.length > 0 && (
              <button
                onClick={clearCart}
                className="text-[11px] text-paoSand-300 hover:text-red-300 underline mr-2"
              >
                Esvaziar
              </button>
            )}
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-8 h-8 rounded-full bg-paoWine-900 text-paoGold-400 flex items-center justify-center hover:bg-black transition-colors"
              aria-label="Fechar carrinho"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Cart Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-20 h-20 rounded-full bg-paoSand-200 border-2 border-paoGold-400/50 flex items-center justify-center text-paoWine-700 shadow-inner">
                <ShoppingBag className="w-10 h-10" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-paoWine-900">
                  Seu carrinho está vazio
                </h3>
                <p className="text-xs text-gray-600 mt-1 max-w-xs">
                  Adicione pratos executivos, pizzas, sanduíches, sucos ou acompanhamentos do nosso cardápio!
                </p>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="px-6 py-2.5 rounded-2xl bg-paoWine-800 text-paoGold-300 font-bold text-xs shadow-md hover:bg-paoWine-900 transition-colors"
              >
                Explorar Cardápio
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.cartItemId}
                className="bg-white rounded-2xl p-3.5 border border-paoSand-300 shadow-sm space-y-2.5 relative group"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1 max-w-[240px]">
                    <div className="flex items-center space-x-1.5">
                      {item.product.code && (
                        <span className="text-[10px] font-mono font-bold bg-paoWine-100 text-paoWine-900 px-1.5 py-0.5 rounded">
                          COD {item.product.code}
                        </span>
                      )}
                      <h4 className="font-serif text-sm font-bold text-gray-900 leading-tight">
                        {item.product.name}
                      </h4>
                    </div>

                    {item.selectedVariation && (
                      <p className="text-xs text-paoWine-800 font-medium flex items-center">
                        <Tag className="w-3 h-3 mr-1 text-paoGold-600" />
                        {item.selectedVariation.name}
                      </p>
                    )}

                    {item.notes && (
                      <p className="text-[11px] text-gray-600 bg-paoSand-50 p-1.5 rounded-lg border border-paoSand-200 font-medium italic flex items-start">
                        <MessageSquare className="w-3 h-3 text-paoWine-700 mr-1 mt-0.5 flex-shrink-0" />
                        "{item.notes}"
                      </p>
                    )}
                  </div>

                  {/* Remove item button */}
                  <button
                    onClick={() => removeFromCart(item.cartItemId)}
                    className="p-1.5 text-gray-400 hover:text-red-600 transition-colors rounded-lg hover:bg-red-50"
                    aria-label="Remover item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Footer Quantity & Total */}
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <div className="flex items-center space-x-2 bg-paoSand-100 px-2 py-1 rounded-xl border border-paoSand-300">
                    <button
                      onClick={() => updateQuantity(item.cartItemId, -1)}
                      className="w-6 h-6 rounded-lg bg-white text-paoWine-800 font-bold flex items-center justify-center hover:bg-gray-100 text-xs shadow-xs"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="font-serif font-extrabold text-xs text-paoWine-900 px-1">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.cartItemId, 1)}
                      className="w-6 h-6 rounded-lg bg-paoWine-800 text-white font-bold flex items-center justify-center hover:bg-paoWine-900 text-xs shadow-xs"
                    >
                      <Plus className="w-3 h-3 text-paoGold-400" />
                    </button>
                  </div>

                  <span className="font-serif text-sm font-extrabold text-paoWine-800">
                    {formatCurrency(item.totalPrice)}
                  </span>
                </div>

              </div>
            ))
          )}
        </div>

        {/* Footer Checkout CTA */}
        {cart.length > 0 && (
          <div className="p-4 bg-white border-t border-paoSand-300 space-y-3 shadow-lg">
            <div className="space-y-1.5 text-xs text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal dos Itens</span>
                <span className="font-semibold text-gray-900">{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Taxa de Entrega</span>
                <span className="font-semibold text-emerald-700">Calculada no cadastro</span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-1.5 text-sm font-bold text-paoWine-900">
                <span>Total Estimado</span>
                <span className="font-serif text-base text-paoWine-800">{formatCurrency(subtotal)}</span>
              </div>
            </div>

            <button
              onClick={() => {
                setIsCartOpen(false);
                setIsCheckoutOpen(true);
              }}
              className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-paoWine-800 to-paoWine-900 text-paoGold-300 font-bold text-sm shadow-wine-glow flex items-center justify-center space-x-2 transition-all active:scale-[0.98]"
            >
              <span>Avançar para Cadastro & Pagamento</span>
              <ArrowRight className="w-4 h-4 text-paoGold-400" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
