import { FC } from 'react';

import { categoriesApi, categoriesLib } from 'entities/categories';
import { useMatchMedia } from 'shared/lib';
import { Loader } from 'shared/ui/loader';

import { CategoriesList } from './categories-list';
import { ChangeCountry } from './change-country';
import { ChangeLanguage } from './change-language';
import { MultiCategories } from './multi-categories';

export const NavBar: FC = () => {
  const { isTablet, isMobile } = useMatchMedia();
  const { data, isLoading, isSuccess, isError } =
    categoriesApi.useGetCategoriesQuery();
  const categoriesMulti =
    isSuccess && data.map(categoriesLib.mapCategoryToMulti);

  const notMobile = !(isMobile || isTablet);

  return (
    <div className={'container-fluid bg-white'}>
      <div className={'afterLine'}>
        <div className={'container flex gap-7 py-5 lg:gap-2 lg:py-4'}>
          {isLoading && (
            <Loader
              type={'skeleton'}
              className={
                'mt-2 h-7 w-[30rem] lg:w-[22rem] md:mt-0 md:h-[35px] sm:mx-2.5 sm:w-full'
              }
            />
          )}
          {isSuccess && categoriesMulti && (
            <>
              <MultiCategories data={categoriesMulti} />
              <CategoriesList />
            </>
          )}
          {isError && (
            <div className={'h-10 w-full leading-[35px] md:h-[40px] sm:px-2.5'}>
              Error on fetching categories
            </div>
          )}
          {notMobile && (
            <div className={'ml-auto flex items-center gap-4 lg:gap-0'}>
              <ChangeCountry />
              <ChangeLanguage />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
