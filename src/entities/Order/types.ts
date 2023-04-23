import type { cartTypes } from 'entities/Cart';
import type { userTypes } from 'entities/User';

type DeliveryType = {
  address: userTypes.AddressType;
  method: string;
  trackingNumber?: string;
};

type PaymentType = {
  method: string;
  amount: number;
  transactionId?: string;
};

export type OrderType = cartTypes.CartType & {
  id: string;
  customer: userTypes.UserType; // Покупатель
  status: 'created' | 'paid' | 'shipped' | 'delivered' | 'canceled'; // Статус продажи
  delivery: DeliveryType;
  payment: PaymentType;
};
