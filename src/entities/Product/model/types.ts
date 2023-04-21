import type { ProductReviewType } from 'entities/Review';

type ProductMainPhotoType = {
  url: string;
  thumbUrl: string;
};

type ProductAdditionalPhotoType = {
  url: string;
};

export type ProductParamsType = {
  name: string;
  value: string;
  order: number;
};

type ProductPriceType = {
  current: number;
  old?: number;
};

export type ProductType = {
  id: string;
  name: string;
  category: string[]; // ['clothing', 'men's wear', 'summer wear']
  quantity: number;
  mainPhoto: ProductMainPhotoType;
  price: ProductPriceType;
  rating: number;
  sold: number;
  description: string;
  orders: number;
  additionalPhotos: ProductAdditionalPhotoType[];
  params: ProductParamsType[];
  advantages: string[];
  reviewsCount: number;
  reviews: ProductReviewType[];
  deliveryCost: string;
  sellerId: string;
};

export type ProductRowType = Pick<
  ProductType,
  'id' | 'name' | 'mainPhoto' | 'price' | 'orders' | 'rating' | 'deliveryCost'
>;

export type ProductMinType = Pick<
  ProductType,
  'id' | 'name' | 'mainPhoto' | 'price'
>;

export type ProductAdminType = Pick<
  ProductType,
  'id' | 'name' | 'mainPhoto' | 'price' | 'sellerId'
>;

export type ProductInCartType = Pick<
  ProductType,
  'id' | 'name' | 'mainPhoto' | 'price' | 'params' | 'sellerId'
>;
