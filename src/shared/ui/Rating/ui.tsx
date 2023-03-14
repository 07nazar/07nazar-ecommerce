import { FC } from "react";
import { GoStar } from "react-icons/go";

interface RatingProps {
  value: number;
}

export const Rating: FC<RatingProps> = ({ value }) => {
  const filledStars = Math.round(value);
  const emptyStars = 5 - filledStars;

  return (
    <>
      {[...Array(filledStars)].map((_, index) => (
        <GoStar key={index} className="filled-star" />
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <GoStar key={index} className="empty-star" />
      ))}
    </>
  );
};
