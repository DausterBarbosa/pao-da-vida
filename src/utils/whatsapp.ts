import type { CartItem, CustomerDetails } from '../types';
import { formatCurrency, formatPhone } from './formatters';
import { RESTAURANT_INFO } from '../data/menuData';

export function buildWhatsAppMessage(items: CartItem[], customer: CustomerDetails, _subtotal: number, total: number): string {
  const isDelivery = customer.deliveryType === 'delivery';

  let message = `🍞 *PEDIDO PÃO DA VIDA - DELIVERY* 🍞\n`;
  message += `----------------------------------------\n`;
  message += `👤 *Cliente:* ${customer.name}\n`;
  message += `📞 *WhatsApp:* ${formatPhone(customer.phone)}\n`;
  message += `📍 *Modalidade:* ${isDelivery ? '🚚 Entrega em Domicílio' : '🏬 Retirada no Local'}\n`;

  if (isDelivery) {
    message += `🏠 *Endereço:* ${customer.street}, Nº ${customer.number}\n`;
    message += `🏙️ *Bairro:* ${customer.neighborhood}\n`;
    if (customer.referencePoint) {
      message += `📍 *Ponto de Ref:* ${customer.referencePoint}\n`;
    }
  }

  message += `----------------------------------------\n`;
  message += `🛒 *ITENS DO PEDIDO (${items.reduce((acc, i) => acc + i.quantity, 0)} itens):*\n\n`;

  items.forEach((item, index) => {
    const codeStr = item.product.code ? ` (CÓD ${item.product.code})` : '';
    message += `${index + 1}. *${item.quantity}x ${item.product.name}*${codeStr}\n`;
    
    if (item.selectedVariation) {
      message += `   └ Opção: _${item.selectedVariation.name}_\n`;
    }
    
    if (item.notes && item.notes.trim().length > 0) {
      message += `   └ 📝 Obs: _"${item.notes.trim()}"_\n`;
    }

    message += `   └ Valor: ${formatCurrency(item.totalPrice)}\n\n`;
  });

  message += `----------------------------------------\n`;
  message += `💳 *Forma de Pagamento:* ${customer.paymentMethod === 'pix' ? '⚡ PIX (Solicito a chave PIX)' : '💵 Dinheiro'}\n`;

  if (customer.paymentMethod === 'cash' && customer.cashChangeFor) {
    message += `🪙 *Troco para:* ${customer.cashChangeFor}\n`;
  }

  message += `💰 *TOTAL DO PEDIDO:* *${formatCurrency(total)}*\n`;
  message += `----------------------------------------\n`;
  message += `✨ *Obrigado por preferir o Pão da Vida! O valor desta compra é revertido em prol de obras humanitárias em Viçosa do Ceará.* ❤️`;

  return message;
}

export function generateWhatsAppLink(items: CartItem[], customer: CustomerDetails, subtotal: number, total: number): string {
  const messageText = buildWhatsAppMessage(items, customer, subtotal, total);
  const encodedText = encodeURIComponent(messageText);
  return `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodedText}`;
}
