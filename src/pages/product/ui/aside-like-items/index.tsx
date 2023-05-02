import { FC } from 'react';

import { Slider } from 'shared/ui/slider/ui';
import { productApi } from 'entities/product';
import { ProductLiked } from 'widgets/product-card';

export const AsideLikeItems: FC = () => {
  const { productsLikes } = productApi;

  return (
    <div
      className={
        'h-auto max-w-[280px] w-full bg-white border border-gray-medium rounded-md px-4 py-5 md:max-w-none'
      }>
      <h3 className={'mb-3 text-black font-semibold leading-5'}>
        You may like
      </h3>
      <div className={'flex flex-col gap-4 md:flex-row'}>
        <Slider activateOn={'isMobile'}>
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
    </div>
  );
};
