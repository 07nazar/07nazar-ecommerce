import { FC } from 'react';

import { ProductMinType, ProductCard } from 'entities/Product';

export const ProductLiked: FC<ProductMinType> = ({
  id,
  mainPhoto,
  price,
  name,
}) => (
  <ProductCard
    product={{ id, mainPhoto, price, name }}
    className={{
      image:
        'max-w-[80px] max-h-[80px] object-cover border border-gray-medium rounded-md',
      title: 'max-w-[151px] w-full text-black text-base',
      box: 'flex gap-2.5 max-w-[242px] w-full md:shrink-0',
      price: 'text-base text-gray-hot',
    }}
  />
);
