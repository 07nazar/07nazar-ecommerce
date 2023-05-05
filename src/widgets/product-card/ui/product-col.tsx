import { FC } from 'react';

import { useMatchMedia } from 'shared/lib';
import { Rating } from 'shared/ui/rating';
import { ProductCard, productTypes } from 'entities/product';
import { AddFavourite } from 'features/product/add-to-favourite';

export const ProductCol: FC<productTypes.ProductMin> = ({
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
            id={id}
            classNames={'absolute top-2 right-2 lg:-top-8 lg:bg-white'}
          />
        )
      }
      between={<Rating value={4} showValue ratingKey={`product-col-${id}`} />}
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
