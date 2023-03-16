import { FC } from 'react';

import { AddToCart } from 'features/AddToCart';
import { ProductCard, ProductMinType } from 'entities/Product';

export const ProductSaved: FC<ProductMinType> = ({
  id,
  mainPhoto,
  price,
  name,
}) => (
  <ProductCard
    product={{ id, mainPhoto, price, name }}
    className={{
      image:
        'max-w-[270px] w-full max-h-[240px] bg-gray-medium rounded-md mb-2.5 object-contain',
      title: 'w-full text-gray-dark mb-2.5',
      price: 'text-black font-semibold mb-2.5',
      content: 'inline-flex flex-col-reverse items-start',
    }}
    before={<AddToCart productId={id} />}
  />
);
