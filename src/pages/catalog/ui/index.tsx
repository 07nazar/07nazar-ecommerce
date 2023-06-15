import { useState } from 'react';

import { SidebarFilters } from 'widgets/sidebar-filters';
import { SubscribeNews } from 'widgets/subscribe-news';
import { useMatchMedia } from 'shared/lib';
import { Breadcrumbs } from 'shared/ui/breadcrumbs';
import { PaginationBox } from 'shared/ui/pagination';

import { ActiveCategories } from './active-categories';
import { MobileFilters } from './mobile-filters';
import { Products } from './products';
import { ProductsToggle } from './products-toggle';
import { SelectedCategory } from './selected-category';
import { ShowOnlyVerified } from './show-only-verifed';
import { SortSelect } from './sort-select';

export const Catalog = () => {
  const { isMobile, isDesktop, isLaptop } = useMatchMedia();
  const [showMode, setShowMode] = useState<'column' | 'row'>('row');
  // TODO Баг при выборе фильтров слева, внизу на 150-200px перекрывается фон, и появляется ещё один скролл
  return (
    <>
      {!isMobile && <Breadcrumbs />}
      <div className={'flex gap-5'}>
        {(isDesktop || isLaptop) && (
          <div className={'w-full max-w-[240px] lg:max-w-[160px]'}>
            <SidebarFilters />
          </div>
        )}
        <div className={'flex w-full flex-col'}>
          <div
            className={
              'mb-5 flex items-center gap-3 rounded-md border border-gray-medium bg-white p-2.5 md:mb-2.5 sm:gap-1 sm:rounded-none'
            }>
            <SelectedCategory />
            <ShowOnlyVerified />
            <SortSelect />
            <MobileFilters />
            <ProductsToggle showMode={showMode} setShowMode={setShowMode} />
          </div>
          <ActiveCategories />
          <Products showMode={showMode} />
          <PaginationBox
            changePageHandler={() => 1}
            count={54}
            setSelectedOption={() => 2}
          />
        </div>
      </div>
      <SubscribeNews />
    </>
  );
};
