/* eslint-disable @typescript-eslint/no-unused-vars */

import { ProductType } from 'entities/ProductCard/model';
import { SellerType, UserType, AddressType } from 'entities/UserCard';

type OrderItemType = Pick<
  ProductType,
  'name' | 'mainPhoto' | 'price' | 'sellerId'
> & {
  productId: string;
  quantity: number; // Кол-во товара в заказе
};

type Order = {
  customer: UserType; // Покупатель
  seller: SellerType; // Продавец
  status: 'created' | 'paid' | 'shipped' | 'delivered' | 'canceled'; //  // Статус продажи
  items: OrderItemType[];
  delivery: {
    address: AddressType;
    method: string; // Способ доставки
    trackingNumber?: string; // Номер отслеживания
  };
  payment: {
    method: string; // Способ оплаты
    amount: number; // Сумма оплаты
    transactionId?: string; // Идентификатор транзакции
  };
  createdDate: Date; // Дата создания заказа
  updatedDate: Date; // Дата последнего обновления заказа
};

export {};
