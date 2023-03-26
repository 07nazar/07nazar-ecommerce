import type { SellerReviewType } from 'entities/Review';

type SocialMediaType = {
  facebook: string;
  twitter: string;
  instagram: string;
};

type ContactDetailsType = {
  phone: string;
  email: string;
  socialMedia?: Partial<SocialMediaType>;
};

export type AddressType = {
  country: string;
  city: string;
  street: string;
  house: string;
  postalCode: string;
};

export type DeliverySellerType = {
  cost: number;
  regions: string[]; // Массив регионов, в которые осуществляется доставка
};

export type ItemCart = {
  id: number; // id продукта
  quantity: number;
};

export type UserType = {
  name: string;
  photo: string;
  address?: Partial<AddressType>;
  contacts?: Partial<ContactDetailsType>;
  cart?: ItemCart[];
};

export type SellerType = UserType & {
  supplierCompany: string;
  isVerified: boolean;
  isWorldwideShipped: boolean;
  description: string;
  delivery: DeliverySellerType;
  paymentMethods: string[]; // Массив способов оплаты
  returnPolicy: string; // Описание политики возврата товара
  categories: string[]; // Массив категорий товаров
  brands: string[]; // Массив брендов товаров
  rating: number;
  reviews: SellerReviewType[]; // Массив отзывов покупателей
};
