import { FC } from 'react';

import { MoveToCart } from 'features/MoveToCart';
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
    before={
      <MoveToCart
        classNames={
          'flex border rounded-md border-gray-medium text-blue gap-1 hover:bg-blue hover:text-white duration-300'
        }
      />
    }
  />
);
