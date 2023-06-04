import { useState } from 'react';

import { ISelectedValue, MenuItem, Select } from 'shared/ui/select';

export const SortSelect = () => {
  const [isOpenSelect, setOpenSelect] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<ISelectedValue[]>(
    []
  );

  const items: ISelectedValue[] = [
    { id: 'newest-items', text: 'Newest' },
    { id: 'oldest-items', text: 'Oldest' },
    { id: 'recommended-items', text: 'Recommended' },
  ];

  return (
    <Select
      className={
        'relative w-full max-w-[170px] rounded-md border border-gray-medium lg:h-[32px] sm:max-w-[100px] sm:text-xs'
      }
      menuClassName={'absolute top-9 sm:top-8 left-0 sm:left-auto sm:-right-5'}
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
  );
};
