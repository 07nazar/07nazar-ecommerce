import { FC } from 'react';
import { GoStar } from 'react-icons/go';

interface RatingProps {
  value: number;
}

export const Rating: FC<RatingProps> = ({ value }) => {
  const filledStars = Math.round(value);
  const emptyStars = 5 - filledStars;

  return (
    <>
      {[...Array(filledStars)].map((_, index) => (
        <GoStar key={index + 5} className={'text-orange'} />
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <GoStar key={index + 5} className={'text-gray-medium'} />
      ))}
    </>
  );
};
