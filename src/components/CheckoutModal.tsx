import React, { useState } from 'react';
import { 
  X, 
  Send, 
  User, 
  Phone, 
  MapPin, 
  CreditCard, 
  CheckCircle2, 
  Store, 
  Truck, 
  DollarSign, 
  QrCode,
  AlertCircle
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import type { CustomerDetails } from '../types';
import { generateWhatsAppLink } from '../utils/whatsapp';
import { formatCurrency } from '../utils/formatters';

export const CheckoutModal: React.FC = () => {
  const { cart, subtotal, isCheckoutOpen, setIsCheckoutOpen, clearCart } = useCart();

  const [customer, setCustomer] = useState<CustomerDetails>({
    name: '',
    phone: '',
    deliveryType: 'delivery',
    street: '',
    number: '',
    neighborhood: '',
    referencePoint: '',
    paymentMethod: 'pix',
    cashChangeFor: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isCheckoutOpen) return null;

  const deliveryFee = customer.deliveryType === 'delivery' ? 5.00 : 0.00;
  const total = subtotal + deliveryFee;

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!customer.name.trim()) {
      newErrors.name = 'Nome completo é obrigatório';
    }

    const cleanPhone = customer.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Telefone/WhatsApp válido é obrigatório';
    }

    if (customer.deliveryType === 'delivery') {
      if (!customer.street.trim()) {
        newErrors.street = 'Rua é obrigatória';
      }
      if (!customer.number.trim()) {
        newErrors.number = 'Número é obrigatório';
      }
      if (!customer.neighborhood.trim()) {
        newErrors.neighborhood = 'Bairro é obrigatório';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Generate WhatsApp wa.me link
    const waUrl = generateWhatsAppLink(cart, customer, subtotal, total);

    // Open WhatsApp in new window
    window.open(waUrl, '_blank');

    setIsSuccess(true);
    setTimeout(() => {
      clearCart();
    }, 1000);
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setIsSuccess(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-fadeIn">
      <div 
        className="bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[94vh] animate-slideUp border border-paoGold-500/30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 bg-paoWine-800 text-white flex items-center justify-between border-b border-paoGold-500/30">
          <div className="flex items-center space-x-2">
            <Send className="w-5 h-5 text-paoGold-400" />
            <h2 className="font-serif text-lg font-bold text-paoGold-300">
              Finalizar Pedido no WhatsApp
            </h2>
          </div>
          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-full bg-paoWine-900 text-paoGold-400 flex items-center justify-center hover:bg-black transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Success View */}
        {isSuccess ? (
          <div className="p-8 text-center space-y-5 my-auto">
            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner animate-bounce">
              <CheckCircle2 className="w-12 h-12" />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-bold text-paoWine-900">
                Pedido Enviado para o WhatsApp!
              </h3>
              <p className="text-xs text-gray-600 max-w-sm mx-auto leading-relaxed">
                Você foi redirecionado para o WhatsApp oficial do Restaurante Pão da Vida. Basta clicar em <strong>Enviar</strong> no app para confirmarmos seu pedido!
              </p>
            </div>

            <div className="bg-paoSand-100 p-4 rounded-2xl border border-paoGold-300 text-xs text-paoWine-900 font-medium">
              ❤️ <em>Obrigado por apoiar nossas obras humanitárias em Viçosa do Ceará!</em>
            </div>

            <button
              onClick={handleClose}
              className="w-full py-3.5 rounded-2xl bg-paoWine-800 text-paoGold-300 font-bold text-sm shadow-md hover:bg-paoWine-900 transition-colors"
            >
              Voltar ao Cardápio
            </button>
          </div>
        ) : (
          /* Form View */
          <form onSubmit={handleSubmitOrder} className="flex-1 overflow-y-auto p-5 space-y-5">
            
            {/* Delivery Type Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-paoWine-900 flex items-center">
                <Truck className="w-4 h-4 text-paoWine-700 mr-1.5" />
                <span>Modalidade do Pedido</span>
              </label>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setCustomer({ ...customer, deliveryType: 'delivery' })}
                  className={`p-3.5 rounded-2xl border flex flex-col items-center justify-center space-y-1 transition-all ${
                    customer.deliveryType === 'delivery'
                      ? 'bg-paoWine-50 border-paoWine-700 text-paoWine-900 font-bold ring-1 ring-paoWine-700 shadow-sm'
                      : 'bg-white border-gray-200 text-gray-600 hover:border-paoWine-300'
                  }`}
                >
                  <Truck className={`w-5 h-5 ${customer.deliveryType === 'delivery' ? 'text-paoWine-700' : 'text-gray-400'}`} />
                  <span className="text-xs">Entrega em Domicílio</span>
                  <span className="text-[10px] text-emerald-700 font-semibold">+ Taxa R$ 5,00</span>
                </button>

                <button
                  type="button"
                  onClick={() => setCustomer({ ...customer, deliveryType: 'pickup' })}
                  className={`p-3.5 rounded-2xl border flex flex-col items-center justify-center space-y-1 transition-all ${
                    customer.deliveryType === 'pickup'
                      ? 'bg-paoWine-50 border-paoWine-700 text-paoWine-900 font-bold ring-1 ring-paoWine-700 shadow-sm'
                      : 'bg-white border-gray-200 text-gray-600 hover:border-paoWine-300'
                  }`}
                >
                  <Store className={`w-5 h-5 ${customer.deliveryType === 'pickup' ? 'text-paoWine-700' : 'text-gray-400'}`} />
                  <span className="text-xs">Retirar no Local</span>
                  <span className="text-[10px] text-gray-500 font-semibold">Sem taxa</span>
                </button>
              </div>
            </div>

            {/* Customer Details */}
            <div className="space-y-3 pt-2 border-t border-gray-100">
              <h3 className="text-xs font-bold uppercase tracking-wider text-paoWine-900 flex items-center">
                <User className="w-4 h-4 text-paoWine-700 mr-1.5" />
                <span>Dados do Cliente</span>
              </h3>

              {/* Name */}
              <div>
                <label className="text-xs font-semibold text-gray-700 block mb-1">
                  Nome Completo <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={customer.name}
                  onChange={(e) => {
                    setCustomer({ ...customer, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: '' });
                  }}
                  placeholder="Ex: Maria Silva"
                  className={`w-full p-3 text-xs rounded-xl bg-paoSand-50 border ${
                    errors.name ? 'border-red-500 bg-red-50' : 'border-paoSand-300'
                  } focus:outline-none focus:ring-2 focus:ring-paoWine-700`}
                />
                {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="text-xs font-semibold text-gray-700 block mb-1">
                  WhatsApp com DDD <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                  <input
                    type="tel"
                    value={customer.phone}
                    onChange={(e) => {
                      setCustomer({ ...customer, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    placeholder="(88) 99999-9999"
                    className={`w-full pl-9 pr-3 py-3 text-xs rounded-xl bg-paoSand-50 border ${
                      errors.phone ? 'border-red-500 bg-red-50' : 'border-paoSand-300'
                    } focus:outline-none focus:ring-2 focus:ring-paoWine-700`}
                  />
                </div>
                {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Address Fields (If Delivery) */}
            {customer.deliveryType === 'delivery' && (
              <div className="space-y-3 pt-2 border-t border-gray-100">
                <h3 className="text-xs font-bold uppercase tracking-wider text-paoWine-900 flex items-center">
                  <MapPin className="w-4 h-4 text-paoWine-700 mr-1.5" />
                  <span>Endereço de Entrega (Viçosa do Ceará)</span>
                </h3>

                <div className="grid grid-cols-3 gap-2">
                  <div className="col-span-2">
                    <label className="text-[11px] font-semibold text-gray-700 block mb-1">
                      Rua / Avenida <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={customer.street}
                      onChange={(e) => setCustomer({ ...customer, street: e.target.value })}
                      placeholder="Ex: Rua das Flores"
                      className={`w-full p-2.5 text-xs rounded-xl bg-paoSand-50 border ${
                        errors.street ? 'border-red-500' : 'border-paoSand-300'
                      } focus:outline-none focus:ring-2 focus:ring-paoWine-700`}
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-gray-700 block mb-1">
                      Número <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={customer.number}
                      onChange={(e) => setCustomer({ ...customer, number: e.target.value })}
                      placeholder="Ex: 594"
                      className={`w-full p-2.5 text-xs rounded-xl bg-paoSand-50 border ${
                        errors.number ? 'border-red-500' : 'border-paoSand-300'
                      } focus:outline-none focus:ring-2 focus:ring-paoWine-700`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[11px] font-semibold text-gray-700 block mb-1">
                      Bairro <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={customer.neighborhood}
                      onChange={(e) => setCustomer({ ...customer, neighborhood: e.target.value })}
                      placeholder="Ex: Centro"
                      className={`w-full p-2.5 text-xs rounded-xl bg-paoSand-50 border ${
                        errors.neighborhood ? 'border-red-500' : 'border-paoSand-300'
                      } focus:outline-none focus:ring-2 focus:ring-paoWine-700`}
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-gray-700 block mb-1">
                      Ponto de Referência
                    </label>
                    <input
                      type="text"
                      value={customer.referencePoint}
                      onChange={(e) => setCustomer({ ...customer, referencePoint: e.target.value })}
                      placeholder="Ex: Próximo à Praça"
                      className="w-full p-2.5 text-xs rounded-xl bg-paoSand-50 border border-paoSand-300 focus:outline-none focus:ring-2 focus:ring-paoWine-700"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Payment Method Selector */}
            <div className="space-y-3 pt-2 border-t border-gray-100">
              <h3 className="text-xs font-bold uppercase tracking-wider text-paoWine-900 flex items-center">
                <CreditCard className="w-4 h-4 text-paoWine-700 mr-1.5" />
                <span>Forma de Pagamento</span>
              </h3>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setCustomer({ ...customer, paymentMethod: 'pix' })}
                  className={`p-3 rounded-2xl border flex items-center space-x-2.5 transition-all ${
                    customer.paymentMethod === 'pix'
                      ? 'bg-paoWine-50 border-paoWine-700 text-paoWine-900 font-bold ring-1 ring-paoWine-700'
                      : 'bg-white border-gray-200 text-gray-600 hover:border-paoWine-300'
                  }`}
                >
                  <QrCode className="w-5 h-5 text-emerald-600" />
                  <div className="text-left">
                    <p className="text-xs">PIX</p>
                    <p className="text-[9px] text-gray-500 font-normal">Chave no WhatsApp</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setCustomer({ ...customer, paymentMethod: 'cash' })}
                  className={`p-3 rounded-2xl border flex items-center space-x-2.5 transition-all ${
                    customer.paymentMethod === 'cash'
                      ? 'bg-paoWine-50 border-paoWine-700 text-paoWine-900 font-bold ring-1 ring-paoWine-700'
                      : 'bg-white border-gray-200 text-gray-600 hover:border-paoWine-300'
                  }`}
                >
                  <DollarSign className="w-5 h-5 text-amber-600" />
                  <div className="text-left">
                    <p className="text-xs">Dinheiro</p>
                    <p className="text-[9px] text-gray-500 font-normal">Na entrega/retirada</p>
                  </div>
                </button>
              </div>

              {customer.paymentMethod === 'pix' && (
                <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200 text-[11px] text-emerald-900 flex items-start space-x-2">
                  <AlertCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <p>A chave PIX do restaurante será enviada diretamente na conversa do WhatsApp após o envio do pedido.</p>
                </div>
              )}

              {customer.paymentMethod === 'cash' && (
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700 block">
                    Precisa de troco? Para quanto? (Opcional)
                  </label>
                  <input
                    type="text"
                    value={customer.cashChangeFor}
                    onChange={(e) => setCustomer({ ...customer, cashChangeFor: e.target.value })}
                    placeholder="Ex: Troco para R$ 100,00"
                    className="w-full p-2.5 text-xs rounded-xl bg-paoSand-50 border border-paoSand-300 focus:outline-none focus:ring-2 focus:ring-paoWine-700"
                  />
                </div>
              )}
            </div>

            {/* Summary Box */}
            <div className="bg-paoSand-50 p-4 rounded-2xl border border-paoSand-300 space-y-1.5 text-xs">
              <div className="flex justify-between text-gray-600">
                <span>Itens ({cart.reduce((a, b) => a + b.quantity, 0)})</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Taxa de Entrega</span>
                <span>{deliveryFee === 0 ? 'Grátis' : formatCurrency(deliveryFee)}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-paoWine-900 pt-1.5 border-t border-paoSand-200">
                <span>Total Final</span>
                <span className="font-serif text-base text-paoWine-800">{formatCurrency(total)}</span>
              </div>
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="w-full py-4 px-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-extrabold text-sm shadow-md flex items-center justify-center space-x-2 transition-all active:scale-[0.98]"
            >
              <Send className="w-5 h-5 text-emerald-200" />
              <span>Enviar Pedido pelo WhatsApp • {formatCurrency(total)}</span>
            </button>

          </form>
        )}

      </div>
    </div>
  );
};
