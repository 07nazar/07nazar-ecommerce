import type { ProductReviewType } from 'entities/Review';

type ProductMainPhotoType = {
  url: string;
  thumbUrl: string;
};

type ProductAdditionalPhotoType = {
  url: string;
};

export type ProductSpecificationType = {
  name: string;
  value: string;
};

type ProductPriceType = {
  current: number;
  old?: number;
};

export type ProductType = {
  id: number;
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
  specifications: ProductSpecificationType[];
  params: ProductSpecificationType[];
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

export type ProductInCartType = Pick<
  ProductType,
  'id' | 'name' | 'mainPhoto' | 'price' | 'params' | 'sellerId'
>;
