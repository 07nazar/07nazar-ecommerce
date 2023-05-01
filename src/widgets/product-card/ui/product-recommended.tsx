import { FC } from 'react';

import { ProductCard, productTypes } from 'entities/product';

export const ProductRecommended: FC<productTypes.ProductMin> = ({
  id,
  name,
  price,
  mainPhoto,
}) => (
  <ProductCard
    product={{ id, name, price, mainPhoto }}
    className={{
      box: 'border border-gray-medium rounded-md',
      content: 'flex flex-col-reverse p-4 md:p-2.5',
      price: 'text-black font-medium mb-1 sm:mb-0.5',
      title: 'text-gray-hot sm:text-sm',
    }}
  />
);
