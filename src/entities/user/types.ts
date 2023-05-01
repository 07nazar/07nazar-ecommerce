import type {reviewTypes} from 'entities/review';

type SocialMedia = {
  facebook: string;
  twitter: string;
  instagram: string;
};

type ContactDetails = {
  phone: string;
  email: string;
  socialMedia?: Partial<SocialMedia>;
};

export type Address = {
  country: string;
  city: string;
  street: string;
  house: string;
  postalCode: string;
};

export type DeliverySeller = {
  cost: number;
  regions: string[]; // Массив регионов, в которые осуществляется доставка
};

export type User = {
  id: string;
  name: string;
  photo: string;
  address?: Partial<Address>;
  contacts?: Partial<ContactDetails>;
};

export type Seller = User & {
  supplierCompany: string;
  isVerified: boolean;
  isWorldwideShipped: boolean;
  description: string;
  delivery: DeliverySeller;
  paymentMethods: string[]; // Массив способов оплаты
  returnPolicy: string; // Описание политики возврата товара
  categories: string[]; // Массив категорий товаров
  brands: string[]; // Массив брендов товаров
  rating: number;
  reviews: reviewTypes.SellerReview[]; // Массив отзывов покупателей
};
