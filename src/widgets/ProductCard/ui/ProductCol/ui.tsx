import { FC } from 'react';

import { AddFavourite } from 'features/AddFavourite';
import { ProductCard, ProductMinType } from 'entities/Product';
import { Rating } from 'shared/ui/Rating';

export const ProductCol: FC<ProductMinType> = ({
  id,
  mainPhoto,
  price,
  name,
}) => (
  <ProductCard
    product={{ id, mainPhoto, price, name }}
    before={
      <AddFavourite isAuth id={1} classNames={'absolute top-2 right-2'} />
    }
    between={<Rating value={4} showValue />}
    className={{
      image: 'w-[230px]',
      title: 'max-w-[215px] text-gray-dark w-full',
      price: 'text-black text-lg leading-[22px] font-semibold',
      box: 'inline-flex max-w-[295px] w-full flex-col justify-center items-center border border-gray-medium rounded-md pb-4',
      content:
        'w-full relative flex gap-2.5 flex-col-reverse border-t border-gray-medium px-4 pt-4',
    }}
  />
);
