import type { userTypes } from 'entities/User';

type ReviewType = {
  author: userTypes.UserType;
  rating: number;
  likes: number;
  dislikes: number;
  date: Date;
};

type ProductReviewTextType = {
  advantages?: string;
  disadvantages?: string;
  comment: string;
};

export type ProductReviewType = ReviewType & {
  text: ProductReviewTextType;
};

export type SellerReviewType = ReviewType & {
  text: string;
};
