import { FC } from 'react';

import { useMatchMedia } from 'shared/lib';
import { MobileSlider } from 'shared/ui/Slider';

import { CategoriesList } from './CategoriesList';
import { ChangeCountry } from './ChangeCountry';
import { ChangeLanguage } from './ChangeLanguage';
import { MultiCategories } from './MultiCategories';

export const NavBar: FC = () => {
  const { isTablet, isMobile } = useMatchMedia();

  const notMobile = !(isMobile || isTablet);

  return (
    <div className={'container-fluid bg-white'}>
      <div className={'beforeLine sm:before:hidden  afterLine'}>
        <MobileSlider>
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
        </MobileSlider>
      </div>
    </div>
  );
};
