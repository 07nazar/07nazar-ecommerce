import { FC } from 'react';

import { Checkbox } from 'shared/ui/Checkbox';
import { Dropdown } from 'shared/ui/Dropdown';
import { Rating } from 'shared/ui/Rating';

import { useSelectedCheckbox } from '../../model';

export const RatingBlock: FC = () => {
  const [ratingSelected, handleRatingChange] = useSelectedCheckbox();

  return (
    <Dropdown maxItems={5} title={'Ratings'} className={'gap-2'}>
      {[5, 4, 3, 2, 1].map(rating => (
        <Checkbox
          key={rating}
          value={`${rating}`}
          isChecked={ratingSelected.includes(`${rating}`)}
          onChange={handleRatingChange}>
          <Rating value={rating} />
        </Checkbox>
      ))}
    </Dropdown>
  );
};
