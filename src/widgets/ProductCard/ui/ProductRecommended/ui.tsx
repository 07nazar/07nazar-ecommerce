import { FC } from 'react';

import { ProductCard, ProductMinType } from 'entities/Product';

export const ProductRecommended: FC<ProductMinType> = ({
  id,
  name,
  price,
  mainPhoto,
}) => (
  <ProductCard
    product={{ id, name, price, mainPhoto }}
    className={{
      box: 'border border-gray-medium rounded-md',
      image: 'max-h-[200px]',
      content: 'flex flex-col-reverse p-4',
      price: 'text-black font-medium mb-1',
      title: 'text-gray-hot',
    }}
  />
);
