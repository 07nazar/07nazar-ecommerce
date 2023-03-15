import { FC } from 'react';

import { ProductMinType } from '../../model';
import { BaseCard } from '../BaseCard';

export const ProductLiked: FC<ProductMinType> = ({
  mainPhoto,
  price,
  name,
}) => (
  <BaseCard
    product={{ mainPhoto, price, name }}
    className={{
      image:
        'max-w-[80px] max-h-[80px] object-cover border border-gray-medium rounded-md',
      title: 'max-w-[151px] w-full text-black text-base',
      box: 'flex gap-2.5 max-w-[242px] w-full',
      price: 'text-base text-gray-hot',
      content: '',
    }}
  />
);
