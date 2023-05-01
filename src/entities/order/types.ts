import type {cartTypes} from 'entities/cart';
import type {userTypes} from 'entities/user';

type Delivery = {
  address: userTypes.Address;
  method: string;
  trackingNumber?: string;
};

type Payment = {
  method: string;
  amount: number;
  transactionId?: string;
};

export type Order = {
  id: string;
  customer: Pick<userTypes.User, 'id' | 'name' | 'address'>;
  seller: userTypes.Seller;
  status: 'created' | 'paid' | 'shipped' | 'delivered' | 'canceled';
  delivery: Delivery;
  payment: Payment;
  items: cartTypes.CartItem[];
};
