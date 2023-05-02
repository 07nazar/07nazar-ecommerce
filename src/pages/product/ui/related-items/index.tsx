import { FC } from 'react';

import { Slider } from 'shared/ui/slider/ui';
import { productApi } from 'entities/product';
import { ProductRelated } from 'widgets/product-card';

export const RelatedItems: FC = () => {
  const { productsRelated } = productApi;

  return (
    <div className={'bg-white border border-gray-medium rounded-md p-5 mb-5'}>
      <h3 className={'mb-4 text-black text-xl font-semibold'}>
        Related products
      </h3>

      <div className={'flex gap-5'}>
        <Slider activateOn={'isLaptop'}>
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
      </div>
    </div>
  );
};
