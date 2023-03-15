import { FC } from 'react';

import { ProductMinType } from '../../model';
import { BaseCard } from '../BaseCard';

export const ProductRelated: FC<ProductMinType> = ({
  mainPhoto,
  price,
  name,
}) => (
  <BaseCard
    product={{ mainPhoto, price, name }}
    className={{
      image: 'w-[172px] bg-gray-medium rounded-md mb-3.5',
      title: 'max-w-[142px] w-full text-gray-dark',
      box: 'inline-flex flex-col',
      price: 'text-gray-hot text-base',
      content: '',
    }}
  />
);
