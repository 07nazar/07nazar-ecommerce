import { useState } from 'react';
import { BiFilterAlt } from 'react-icons/all';

import { SidebarFilters } from 'widgets/sidebar-filters';
import { useMatchMedia } from 'shared/lib';
import { Button } from 'shared/ui/button';
import { Modal } from 'shared/ui/modal';

export const MobileFilters = () => {
  const { isMobile, isTablet } = useMatchMedia();
  const appliedFilters = 3;
  const [isFiltersModal, setIsFiltersModal] = useState<boolean>(false);

  if (!isMobile && !isTablet) {
    return null;
  }

  return (
    <>
      <Button
        onClick={() => setIsFiltersModal(true)}
        className={
          'mx-auto h-[32px] items-center gap-2 border border-gray-medium text-black sm:p-2 sm:text-xs'
        }>
        Filter ({appliedFilters})
        <BiFilterAlt className={'text-gray-hot'} />
      </Button>
      <Modal
        className={'right-0 top-0 w-1/2 pt-10 sm:h-full sm:w-full'}
        position={'right'}
        isOpen={isFiltersModal}
        setClose={() => setIsFiltersModal(false)}>
        <SidebarFilters />
      </Modal>
    </>
  );
};
