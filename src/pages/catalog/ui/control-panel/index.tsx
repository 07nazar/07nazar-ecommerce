import { FC, useState } from 'react';
import { BiFilterAlt } from 'react-icons/all';
import { HiViewGrid } from 'react-icons/hi';
import { MdTableRows } from 'react-icons/md';

import { useMatchMedia } from 'shared/lib';
import { Button, ButtonGroup } from 'shared/ui/button';
import { Checkbox } from 'shared/ui/checkbox';
import { Modal } from 'shared/ui/modal';
import { ISelectedValue, MenuItem, Select } from 'shared/ui/select';
import { SidebarFilters } from 'widgets/sidebar-filters';

import { formatNumber } from '../../lib';

interface IControlPanelProps {
  showMode: 'row' | 'column';
  setShowMode: (mode: 'row' | 'column') => void;
  itemsCount: number;
  category: string;
}

const items: ISelectedValue[] = [
  { id: 1, text: 'Newest' },
  { id: 2, text: 'Oldest' },
  { id: 3, text: 'Recommended' },
  { id: 4, text: 'text4' },
  { id: 5, text: 'text5' },
];

export const ControlPanel: FC<IControlPanelProps> = ({
  showMode,
  setShowMode,
  category = '',
  itemsCount = 0,
}) => {
  const [isOpenSelect, setOpenSelect] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<ISelectedValue[]>(
    []
  );
  const [isVerified, setIsVerified] = useState(false);
  const appliedFilters = 3;
  const [isFiltersModal, setIsFiltersModal] = useState<boolean>(false);

  const { isMobile, isTablet, isDesktop } = useMatchMedia();
  return (
    <div
      className={
        'mb-5 md:mb-2.5 flex items-center gap-3 sm:gap-1 p-2.5 bg-white border rounded-md sm:rounded-none border-gray-medium'
      }>
      {!isMobile && !isTablet && (
        <p className={'flex grow lg:whitespace-nowrap gap-1'}>
          {formatNumber(itemsCount)} items in
          <span className={'font-medium'}>{category}</span>
        </p>
      )}

      {isDesktop && (
        <Checkbox
          isChecked={isVerified}
          onChange={() => setIsVerified(!isVerified)}>
          <p>Verified only</p>
        </Checkbox>
      )}

      <Select
        className={
          'relative max-w-[170px] lg:h-[32px] sm:text-xs w-full border border-gray-medium rounded-md'
        }
        menuClassName={'absolute top-[40px] right-0'}
        isOpen={isOpenSelect}
        selectedValue={selectedMenuItem}
        defaultValue={'Featured'}
        setOpen={setOpenSelect}>
        {items.map(item => (
          <MenuItem
            setOpen={setOpenSelect}
            key={item.id}
            active={false}
            setSelectedItems={setSelectedMenuItem}
            item={item}>
            <p>{item.text}</p>
          </MenuItem>
        ))}
      </Select>

      {(isMobile || isTablet) && (
        <>
          <Button
            onClick={() => setIsFiltersModal(true)}
            className={
              'border h-[32px] border-gray-medium text-black sm:text-xs items-center gap-2'
            }>
            Filter ({appliedFilters})
            <BiFilterAlt className={'text-gray-hot'} />
          </Button>
          <Modal
            className={'top-0 right-0 w-1/2 sm:w-full sm:h-full pt-10'}
            position={'right'}
            isOpen={isFiltersModal}
            setClose={() => setIsFiltersModal(false)}>
            <SidebarFilters />
          </Modal>
        </>
      )}

      <ButtonGroup
        className={'border md:ml-auto border-gray-medium rounded-md'}>
        <Button
          className={`flex items-center justify-center p-1 lg:p-0.5 md:h-[30px] border-r border-gray-medium rounded-none hover:bg-gray-pale ${
            showMode === 'column' && 'bg-gray-medium'
          } duration-300`}
          onClick={() => setShowMode('column')}>
          <HiViewGrid size={isDesktop ? 28 : 24} color={'black'} />
        </Button>
        <Button
          className={`flex items-center justify-center p-1 lg:p-0.5 md:h-[30px] rounded-none hover:bg-gray-pale ${
            showMode === 'row' && 'bg-gray-medium'
          } duration-300`}
          onClick={() => setShowMode('row')}>
          <MdTableRows size={isDesktop ? 28 : 24} color={'black'} />
        </Button>
      </ButtonGroup>
    </div>
  );
};
