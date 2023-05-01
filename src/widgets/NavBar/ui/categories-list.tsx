import { FC } from 'react';

import { useMatchMedia } from 'shared/lib';
import { AppLink } from 'shared/ui/appLink';

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
    <nav className={'flex items-center gap-7 lg:gap-2'}>
      {(isMobile || isTablet) && (
        <AppLink
          to={'/categories'}
          className={
            'text-black whitespace-nowrap font-medium md:font-normal md:leading-[19px] md:text-blue md:p-2 md:bg-gray-pale md:rounded-md'
          }>
          All category
        </AppLink>
      )}

      {categoriesLinks.map(link => (
        <AppLink
          key={link.to}
          to={link.to}
          className={
            'text-black whitespace-nowrap font-medium md:font-normal md:leading-[19px] md:text-blue md:p-2 md:bg-gray-pale md:rounded-md'
          }>
          {link.text}
        </AppLink>
      ))}
    </nav>
  );
};
