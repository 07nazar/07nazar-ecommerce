import type { reviewTypes } from 'entities/review';

type ProductMainPhoto = {
  url: string;
  thumbUrl: string;
};

type ProductAdditionalPhoto = {
  url: string;
};

export type ProductParams = {
  name: string;
  value: string;
  order: number;
};

type ProductPrice = {
  current: number;
  old?: number;
};

export type Product = {
  id: string;
  name: string;
  category: string[]; // ['clothing', 'men's wear', 'summer wear']
  quantity: number;
  mainPhoto: ProductMainPhoto;
  price: ProductPrice;
  rating: number;
  sold: number;
  description: string;
  orders: number;
  additionalPhotos: ProductAdditionalPhoto[];
  params: ProductParams[];
  advantages: string[];
  reviewsCount: number;
  reviews: reviewTypes.ProductReview[];
  deliveryCost: string;
  sellerId: string;
};

export type ProductRow = Pick<
  Product,
  'id' | 'name' | 'mainPhoto' | 'price' | 'orders' | 'rating' | 'deliveryCost'
>;

export type ProductMin = Pick<Product, 'id' | 'name' | 'mainPhoto' | 'price'>;

export type NewProductType = {
  name: string;
  description: string;
  quantity: string;
  price: {
    old: string;
    current: string;
  };
  advantages: string[];
  category: string;
  deliveryCost: string;
  additionalPhotos: FileList[];
  mainPhoto: File | null;
};
