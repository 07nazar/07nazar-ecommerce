import { FC } from 'react';
import { GoStar } from 'react-icons/go';

interface RatingProps {
  value: number;
  showValue?: boolean;
}

export const Rating: FC<RatingProps> = ({ value, showValue }) => {
  const filledStars = Math.round(value);
  const emptyStars = 5 - filledStars;

  return (
    <div className={'flex items-center '}>
      {[...Array(filledStars)].map((_, index) => (
        <GoStar key={index + 5} className={'text-orange'} />
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <GoStar key={index + 5} className={'text-gray-medium'} />
      ))}
      {showValue && (
        <span className={'ml-1 text-orange'}>{value.toFixed(1)}</span>
      )}
    </div>
  );
};
