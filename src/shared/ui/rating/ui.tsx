import { FC } from 'react';
import { GoStar } from 'react-icons/go';

type RatingProps = {
  value: number;
  ratingKey: string;
  showValue?: boolean;
};

export const Rating: FC<RatingProps> = ({ value, showValue, ratingKey }) => {
  const array = [...Array(5)].map((e, i) => i + 1);

  return (
    <div className={'inline-flex items-center'}>
      {array.map(index => (
        <GoStar
          key={`star-${index}-${ratingKey}`}
          className={
            index <= Math.round(value) ? 'text-orange' : 'text-gray-medium'
          }
        />
      ))}
      {showValue && (
        <span className={'ml-1 text-orange sm:text-xs'}>
          {value.toFixed(1)}
        </span>
      )}
    </div>
  );
};
