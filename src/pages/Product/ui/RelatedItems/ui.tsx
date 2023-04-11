import { FC } from 'react';

import { ProductRelated } from 'widgets/ProductCard';
import { useMatchMedia } from 'shared/lib';
import { Slider } from 'shared/ui/Slider/ui/ui';

import { productsRelated } from '../../model';

export const RelatedItems: FC = () => {
  const { isDesktop } = useMatchMedia();
  return (
    <div className={'bg-white border border-gray-medium rounded-md p-5 mb-5'}>
      <h3 className={'mb-4 text-black text-xl font-semibold'}>
        Related products
      </h3>

      <div className={'flex gap-5'}>
        {isDesktop ? (
          productsRelated.map(relate => (
            <ProductRelated
              key={relate.name}
              id={relate.id}
              name={relate.name}
              mainPhoto={relate.mainPhoto}
              price={relate.price}
            />
          ))
        ) : (
          <Slider slideClassNames={'slide-w-auto'} wrapperClassNames={'w-full'}>
            {productsRelated.map(relate => (
              <ProductRelated
                key={relate.name}
                id={relate.id}
                name={relate.name}
                mainPhoto={relate.mainPhoto}
                price={relate.price}
              />
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};
