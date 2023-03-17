import { FC } from 'react';
import { ProductCard, ProductMinType } from 'entities/Product';
import { AddFavourite } from 'features/AddFavourite';

export const ProductCol: FC<ProductMinType> = ({
  id,
  mainPhoto,
  price,
  name,
}) => (
  <ProductCard
    product={{ id, mainPhoto, price, name }}
    before={<AddFavourite isAuth id={1} classNames='absolute top-2 right-2' />}
    className={{
      image: 'w-[230px]',
      title: 'max-w-[215px] w-full',
      box: 'inline-flex max-w-[295px] w-full flex-col justify-center items-center border border-gray-medium rounded-md py-5',
      content:
        'w-full relative flex flex-col-reverse border-t gap-2.5  border-gray-medium px-4 pt-4',
    }}
  />
);
