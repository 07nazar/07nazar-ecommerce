import { useState } from 'react';

import { PaginationBox } from 'widgets/Pagination';
import { SidebarFilters } from 'widgets/SidebarFilters';
import { SubscribeNews } from 'widgets/SubscribeNews';
import { useMatchMedia } from 'shared/lib';
import { Breadcrumbs } from 'shared/ui/Breadcrumbs';

import { ActiveCategories } from './ActiveCategories';
import { ControlPanel } from './ControlPanel';
import { Products } from './Products';

export const Shop = () => {
  const [showMode, setShowMode] = useState<'column' | 'row'>('row');
  const activeCategory = 'Mobile accessory';
  const itemsCategory = 99999;
  const { isMobile, isDesktop, isLaptop } = useMatchMedia();
  return (
    <>
      {!isMobile && <Breadcrumbs />}
      <div className={'flex gap-5'}>
        {(isDesktop || isLaptop) && (
          <div className={'max-w-[240px] lg:max-w-[160px] w-full'}>
            <SidebarFilters />
          </div>
        )}
        <div className={'w-full flex flex-col'}>
          <ControlPanel
            showMode={showMode}
            setShowMode={setShowMode}
            category={activeCategory}
            itemsCount={itemsCategory}
          />
          <ActiveCategories />
          <Products showMode={showMode} />
          <PaginationBox
            changePageHandler={() => console.log('todooo')}
            count={54}
            setSelectedOption={() => console.log('selected')}
          />
        </div>
      </div>
      <SubscribeNews />
    </>
  );
};
