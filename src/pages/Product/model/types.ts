/* eslint-disable @typescript-eslint/no-unused-vars */

import { ProductType } from 'entities/Product/model';
import { UserType, AddressType } from 'entities/UserCard';

type DeliveryType = {
  address: AddressType;
  method: string;
  trackingNumber?: string;
};

type PaymentType = {
  method: string;
  amount: number;
  transactionId?: string;
};

type CouponType = {
  code: string; // Код купона
  discount: number; // Скидка в процентах
};

type CartItemType = Pick<
  ProductType,
  'name' | 'mainPhoto' | 'price' | 'sellerId'
> & {
  productId: string;
  quantity: number; // Кол-во товара в заказе
};

export type CartType = {
  customer: UserType; // Покупатель
  status: 'created' | 'paid' | 'shipped' | 'delivered' | 'canceled'; // Статус продажи
  items: CartItemType[];
  coupon?: CouponType; // Купон, если применен
  subtotal: number; // Итоговая стоимость товаров в корзине
  discount: number; // Скидка по купону (если есть)
  tax: number; // Налог на товары
  total: number; // Итоговая стоимость корзины
  delivery: DeliveryType;
  payment: PaymentType;
  createdDate: Date; // Дата создания заказа
  updatedDate: Date; // Дата последнего обновления заказа
};

export {};
