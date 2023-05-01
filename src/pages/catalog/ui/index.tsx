import {useState} from 'react';

import {useMatchMedia} from 'shared/lib';
import {Breadcrumbs} from 'shared/ui/breadcrumbs';
import {PaginationBox} from 'widgets/Pagination';
import {SidebarFilters} from 'widgets/sidebar-filters';
import {SubscribeNews} from 'widgets/subscribe-news';

import {ActiveCategories} from './active-categories';
import {ControlPanel} from './control-panel';
import {Products} from './products';

export const Catalog = () => {
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
