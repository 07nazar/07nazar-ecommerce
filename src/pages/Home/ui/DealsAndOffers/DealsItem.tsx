import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'shared/ui/Button';

export interface IDealsItem {
  id: number;
  image: string;
  title: string;
  promo: string;
}

export const DealsItem: FC<IDealsItem> = ({ image, promo, title }) => (
  <Link to={title}>
    <div
      className={
        'flex flex-col items-center px-5 pt-2 pb-4 border-l border-gray-medium'
      }>
      <div className={'w-[140px] h-[140px] flex  justify-center mb-3'}>
        <img src={image} alt={title} className={'object-contain'} />
      </div>
      <h5 className={'mb-2'}>{title}</h5>
      <Button size={'sm'} className={'bg-light-red leading-4 text-red'}>
        {promo}
      </Button>
    </div>
  </Link>
);
