import { FC } from 'react';

import { ProductLiked } from 'widgets/ProductCard';
import { useMatchMedia } from 'shared/lib';
import { Slider } from 'shared/ui/Slider/ui/ui';

import { productsLikes } from '../../model';

export const AsideLikeItems: FC = () => {
  const { isMobile, isTablet } = useMatchMedia();
  return (
    <div
      className={
        'h-auto max-w-[280px] w-full bg-white border border-gray-medium rounded-md px-4 py-5 md:max-w-none'
      }>
      <h3 className={'mb-3 text-black font-semibold leading-5'}>
        You may like
      </h3>
      <div className={'flex flex-col gap-4 md:flex-row'}>
        {!isMobile && !isTablet ? (
          productsLikes.map(liked => (
            <ProductLiked
              key={liked.name}
              id={liked.id}
              name={liked.name}
              mainPhoto={liked.mainPhoto}
              price={liked.price}
            />
          ))
        ) : (
          <Slider slideClassNames={'slide-w-auto'} wrapperClassNames={'w-full'}>
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
        )}
      </div>
    </div>
  );
};
