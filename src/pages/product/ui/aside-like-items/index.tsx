import { FC } from 'react';

import { ProductLiked } from 'widgets/product-card';
import { productApi } from 'entities/product';
import { Slider } from 'shared/ui/slider';

export const AsideLikeItems: FC = () => {
  const { productsLikes } = productApi;

  return (
    <div
      className={
        'h-auto max-w-[280px] w-full bg-white border border-gray-medium rounded-md px-4 sm:px-2 py-5 md:py-2.5 md:max-w-none'
      }>
      <h3
        className={
          'mb-3 text-black text-xl md:text-base font-semibold leading-5 ml-2'
        }>
        You may like
      </h3>
      <Slider
        activateOn={'isTablet'}
        spaceBetween={3}
        className={'flex flex-col gap-4 md:flex-row'}>
        {productsLikes.map(liked => (
          <ProductLiked
            key={liked.name}
            id={liked.id}
            name={liked.name}
            mainPhoto={liked.mainPhoto}
            price={liked.price}
          />
        ))}
      </Slider>
    </div>
  );
};
