import { FC } from 'react';

import { useMatchMedia } from 'shared/lib';
import { AppLink } from 'shared/ui/links';
import { Slider } from 'shared/ui/slider';

const categoriesLinks = [
  {
    to: 'catalog',
    text: 'Shop',
  },
  {
    to: 'gifts',
    text: 'Gift boxes',
  },
  {
    to: 'mobiles',
    text: 'Mobiles',
  },
  {
    to: 'pc',
    text: 'Laptops & PC',
  },
];

export const CategoriesList: FC = () => {
  const { isMobile, isTablet } = useMatchMedia();

  return (
    <Slider
      activateOn={'isMobile'}
      spaceBetween={8}
      className={'flex  items-center gap-7 lg:gap-2'}>
      {(isMobile || isTablet) && (
        <AppLink
          to={'/categories'}
          className={
            'whitespace-nowrap font-medium text-black md:rounded-md md:bg-gray-pale md:p-2 md:font-normal md:leading-[19px] md:text-blue'
          }>
          All category
        </AppLink>
      )}

      {categoriesLinks.map(link => (
        <AppLink
          key={link.to}
          to={link.to}
          className={
            'whitespace-nowrap font-medium text-black md:rounded-md md:bg-gray-pale md:p-2 md:font-normal md:leading-[19px] md:text-blue'
          }>
          {link.text}
        </AppLink>
      ))}
    </Slider>
  );
};
