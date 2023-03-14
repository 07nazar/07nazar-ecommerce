import type { UserType } from "../UserCard";

type ReviewType = {
  author: UserType;
  rating: number;
  likes: number;
  dislikes: number;
  date: Date;
};

type ProductReviewTextType = {
  pluses?: string;
  minus?: string;
  commentary: string;
};

export type ProductReviewType = ReviewType & {
  text: ProductReviewTextType;
};

export type SellerReviewType = ReviewType & {
  text: string;
};
