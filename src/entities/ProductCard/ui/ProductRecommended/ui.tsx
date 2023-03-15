import { FC } from 'react';

import { ProductMinType } from '../../index';
import { BaseCard } from '../BaseCard';

export const ProductRecommended: FC<ProductMinType> = ({
  name,
  price,
  mainPhoto,
}) => (
  <BaseCard
    product={{ name, price, mainPhoto }}
    className={{
      box: 'border border-gray-medium rounded-md',
      image: 'max-h-[200px]',
      content: 'flex flex-col-reverse p-4',
      price: 'text-black font-medium mb-1',
      title: 'text-gray-hot',
    }}
  />
);
