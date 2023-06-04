import { FC } from 'react';
import { HiViewGrid } from 'react-icons/hi';
import { MdTableRows } from 'react-icons/md';

import { useMatchMedia } from 'shared/lib';
import { Button, ButtonGroup } from 'shared/ui/button';

type ProductsToggleProps = {
  showMode: 'row' | 'column';
  setShowMode: (mode: 'row' | 'column') => void;
};
export const ProductsToggle: FC<ProductsToggleProps> = ({
  setShowMode,
  showMode,
}) => {
  const { isDesktop } = useMatchMedia();

  return (
    <ButtonGroup className={'rounded-md border border-gray-medium md:ml-auto'}>
      <Button
        className={`flex items-center justify-center rounded-none border-r border-gray-medium p-1 hover:bg-gray-pale lg:p-0.5 md:h-[30px] ${
          showMode === 'column' && 'bg-gray-medium'
        } duration-300`}
        onClick={() => setShowMode('column')}>
        <HiViewGrid size={isDesktop ? 28 : 24} color={'black'} />
      </Button>
      <Button
        className={`flex items-center justify-center rounded-none p-1 hover:bg-gray-pale lg:p-0.5 md:h-[30px] ${
          showMode === 'row' && 'bg-gray-medium'
        } duration-300`}
        onClick={() => setShowMode('row')}>
        <MdTableRows size={isDesktop ? 28 : 24} color={'black'} />
      </Button>
    </ButtonGroup>
  );
};
