import { FC } from 'react';

import { ProductRelated } from 'widgets/product-card';
import { productApi } from 'entities/product';
import { Slider } from 'shared/ui/slider';

export const RelatedItems: FC = () => {
  const { productsRelated } = productApi;

  return (
    <div
      className={
        'bg-white border border-gray-medium rounded-md p-5 sm:p-2 mb-5 md:mb-3'
      }>
      <h3
        className={
          'mb-4 sm:mb-2 text-black text-xl md:text-base font-semibold ml-2'
        }>
        Related products
      </h3>

      <Slider
        activateOn={'isLaptop'}
        spaceBetween={10}
        className={'flex gap-2.5 justify-between sm:max-w-[150px]'}>
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
  );
};
