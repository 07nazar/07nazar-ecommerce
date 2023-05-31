import { FC } from 'react';

import { useMatchMedia } from 'shared/lib';
import { Slider } from 'shared/ui/slider';

import { CategoriesList } from './categories-list';
import { ChangeCountry } from './change-country';
import { ChangeLanguage } from './change-language';
import { MultiCategories } from './multi-categories';

export const NavBar: FC = () => {
  const { isTablet, isMobile } = useMatchMedia();

  const notMobile = !(isMobile || isTablet);

  return (
    <div className={'container-fluid bg-white'}>
      <div className={'afterLine'}>
        <Slider activateOn={'isMobile'} spaceBetween={7}>
          <div className={'container flex gap-7 lg:gap-2 py-5 lg:py-4'}>
            {notMobile && <MultiCategories />}
            <CategoriesList />
            {notMobile && (
              <div className={'flex ml-auto items-center gap-4 lg:gap-0'}>
                <ChangeCountry />
                <ChangeLanguage />
              </div>
            )}
          </div>
        </Slider>
      </div>
    </div>
  );
};
