import type { CartType } from 'entities/Cart';
import type { AddressType, UserType } from 'entities/User';

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

export type OrderType = CartType & {
  id: string;
  customer: UserType; // Покупатель
  status: 'created' | 'paid' | 'shipped' | 'delivered' | 'canceled'; // Статус продажи
  delivery: DeliveryType;
  payment: PaymentType;
};
