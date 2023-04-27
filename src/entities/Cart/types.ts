import type { productTypes } from 'entities/Product';

export type Coupon = {
  code: string;
  discount: number;
};

export type CartItem = Pick<
  productTypes.Product,
  'id' | 'name' | 'mainPhoto' | 'price' | 'params' | 'sellerId'
> & {
  quantity: number;
};

export type Cart = {
  items: CartItem[];
  coupon: Coupon | null;
  subtotal: number;
  discount: number;
  tax: number;
  total: number;
  createdDate: string;
  updatedDate: string;
};
