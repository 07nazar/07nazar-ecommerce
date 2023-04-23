import type { productTypes } from 'entities/Product';

type CouponType = {
  code: string; // Код купона
  discount: number; // Скидка в процентах
};

type CartItemType = Pick<
  productTypes.ProductType,
  'id' | 'name' | 'mainPhoto' | 'price' | 'sellerId'
> & {
  quantity: number; // Кол-во товара в заказе
};

export type CartType = {
  id: string;
  items: CartItemType[];
  coupon?: CouponType; // Купон, если применен
  subtotal: number; // Итоговая стоимость товаров в корзине
  discount: number; // Скидка по купону (если есть)
  tax: number; // Налог на товары
  total: number; // Итоговая стоимость корзины
  createdDate: Date; // Дата создания корзины
  updatedDate: Date; // Дата последнего обновления корзины
};
