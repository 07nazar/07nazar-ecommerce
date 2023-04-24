import type { userTypes } from 'entities/User';

type Review = {
  author: Pick<userTypes.User, 'id' | 'name' | 'photo'>;
  rating: number;
  likes: number;
  dislikes: number;
  date: Date;
};

type ProductReviewText = {
  advantages?: string;
  disadvantages?: string;
  comment: string;
};

export type ProductReview = Review & {
  text: ProductReviewText;
};

export type SellerReview = Review & {
  text: string;
};
