export type CategoryId = 
  | 'executivos'
  | 'pizzas'
  | 'sanduiches'
  | 'sopas'
  | 'cafes'
  | 'tapiocas_cuscuz'
  | 'sucos';

export interface Category {
  id: CategoryId;
  name: string;
  shortName: string;
  icon: string;
  description?: string;
  badge?: string;
}

export interface ProductVariation {
  id: string;
  name: string;
  price: number;
}

export interface Product {
  id: string;
  code?: string;
  name: string;
  categoryId: CategoryId;
  description: string;
  price: number;
  imageUrl: string;
  tags?: string[];
  variations?: ProductVariation[];
  isPromo?: boolean;
  promoText?: string;
}

export interface CartItem {
  cartItemId: string;
  product: Product;
  selectedVariation?: ProductVariation;
  quantity: number;
  notes?: string;
  unitPrice: number;
  totalPrice: number;
}

export type DeliveryType = 'delivery' | 'pickup';
export type PaymentMethod = 'pix' | 'cash';

export interface CustomerDetails {
  name: string;
  phone: string;
  deliveryType: DeliveryType;
  street: string;
  number: string;
  neighborhood: string;
  referencePoint: string;
  paymentMethod: PaymentMethod;
  cashChangeFor?: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  customer: CustomerDetails;
  subtotal: number;
  deliveryFee: number;
  total: number;
  createdAt: string;
}
