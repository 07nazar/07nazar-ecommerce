import { FC } from 'react';

import { AddFavourite } from 'features/AddFavourite';
import { ProductCard, ProductMinType } from 'entities/Product';
import { useMatchMedia } from 'shared/lib';
import { Rating } from 'shared/ui/Rating';

export const ProductCol: FC<ProductMinType> = ({
  id,
  mainPhoto,
  price,
  name,
}) => {
  const { isMobile } = useMatchMedia();

  return (
    <ProductCard
      product={{ id, mainPhoto, price, name }}
      before={
        !isMobile && (
          <AddFavourite
            isAuth
            id={1}
            classNames={'absolute top-2 right-2 lg:-top-8 lg:bg-white'}
          />
        )
      }
      between={<Rating value={4} showValue />}
      className={{
        image: 'w-[230px]',
        title: 'max-w-[215px] text-gray-dark sm:text-xs w-full',
        price: ' text-black text-lg sm:text-base leading-[22px] font-semibold',
        box: 'inline-flex max-w-[295px] w-full flex-col justify-center items-center border border-gray-medium rounded-md pb-4 md:pb-2 sm:pb-1',
        content:
          'w-full relative flex gap-2.5 md:gap-1 sm:gap-0 flex-col-reverse border-t border-gray-medium px-4 lg:px-2 pt-4 md:pt-2 sm:pt-1',
      }}
    />
  );
};
