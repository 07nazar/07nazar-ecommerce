import { FC } from 'react';

import { DealsItem } from 'widgets/product-card';
import { productApi } from 'entities/product';
import { Slider } from 'shared/ui/slider';

import { Timer } from './timer';

export const DealsAndOffers: FC = () => {
  const data = productApi.dealsItemsFromFakeApi;
  // TODO при адаптиве остаётся небольшая свободная область в слайдере на 768<, нужно исправить
  return (
    <div
      className={
        'flex w-full justify-start bg-white border border-gray-medium rounded-md md:flex-col sm:rounded-none'
      }>
      <div
        className={
          'flex max-w-[23%] md:max-w-full w-full flex-col pt-4 px-5 lg:px-2.5 sm:pt-2 sm:px-1 sm:gap-1 border-r border-gray-medium md:flex-row md:justify-between md:items-start'
        }>
        <div>
          <h4
            className={
              'text-xl font-semibold leading-7 lg:text-lg sm:text-sm sm:leading-4 sm:whitespace-nowrap'
            }>
            Deals and offers
          </h4>
          <p
            className={
              'text-base mb-4 text-gray-hot leading-5 sm:text-xs sm:whitespace-nowrap'
            }>
            {data.title}
          </p>
        </div>
        <Timer deadline={'2023-5-29'} />
      </div>

      <div className={'md:border-t md:border-gray-pale overflow-x-hidden'}>
        <Slider
          activateOn={'isLaptop'}
          className={'grid grid-cols-5 lg:block lg:max-w-[145px]'}>
          {data.items.map(({ id, discount, mainPhoto, name }, i) => (
            <DealsItem
              key={id}
              id={id}
              discount={discount}
              mainPhoto={mainPhoto}
              name={name}
              className={`${
                data.items.length === i + 1 ? '' : 'border-r'
              } border-gray-medium`}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};
