import { useState } from 'react';

import { SidebarFilters } from 'widgets/SidebarFilters';
import { SubscribeNews } from 'widgets/SubscribeNews';
import { useMatchMedia } from 'shared/lib';
import { Breadcrumbs } from 'shared/ui/Breadcrumbs';

import { ActiveCategories } from './ActiveCategories';
import { ControlPanel } from './ControlPanel';
import { PaginationBox } from './Pagination';
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
          <div className={'max-w-[240px] lg:max-w-[200px] w-full'}>
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
          <PaginationBox />
        </div>
      </div>
      <SubscribeNews />
    </>
  );
};
