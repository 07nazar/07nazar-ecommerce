import { FC } from 'react';

import {
  normalizeStringToURL,
  useMatchMedia,
  useSliceSelector,
} from 'shared/lib';
import { AppLink } from 'shared/ui/links';
import { Slider } from 'shared/ui/slider';

export const CategoriesList: FC = () => {
  const { isMobile, isTablet } = useMatchMedia();
  const { categories } = useSliceSelector('categories', state => state);

  return (
    <Slider
      activateOn={'isMobile'}
      spaceBetween={8}
      className={'flex  items-center gap-7 lg:gap-2'}>
      {(isMobile || isTablet) && (
        <AppLink
          to={'/catalog'}
          className={
            'whitespace-nowrap font-medium text-black md:rounded-md md:bg-gray-pale md:p-2 md:font-normal md:leading-[19px] md:text-blue'
          }>
          All category
        </AppLink>
      )}

      {categories.map(link => (
        <AppLink
          key={link.id}
          state={{ category: link.name, id: link.id }}
          to={`/catalog/${normalizeStringToURL(link.name)}-${link.id}`}
          className={
            'whitespace-nowrap font-medium text-black md:rounded-md md:bg-gray-pale md:p-2 md:font-normal md:leading-[19px] md:text-blue'
          }>
          {link.name}
        </AppLink>
      ))}
    </Slider>
  );
};
