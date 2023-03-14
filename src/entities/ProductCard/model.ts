import { ProductReviewType } from '../Review';

type ProductMainPhotoType = {
  url: string;
  thumbUrl: string;
};

type ProductAdditionalPhotoType = {
  url: string;
};

type ProductSpecificationType = {
  name: string;
  value: string;
};

type ProductPriceType = {
  current: number;
  old?: number;
};

export type ProductType = {
  name: string;
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
  sellerId: string;
};

export type ProductMinType = Pick<ProductType, 'name' | 'mainPhoto' | 'price'>;
