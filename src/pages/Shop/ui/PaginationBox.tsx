import { useRef, useState } from 'react';

import { Pagination } from 'shared/ui/Pagination';
import { MenuItem, Select } from 'shared/ui/Select';

interface IItem {
  id: number;
  text: string;
  subTitle?: string;
  children?: IItem[];
}

const items: IItem[] = [
  { id: 1, text: 'Show 10' },
  { id: 2, text: 'Show 20' },
  { id: 2, text: 'Show 30' },
];

export const PaginationBox = () => {
  const [isOpenSelect, setOpenSelect] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<IItem[]>([]);

  const menuRef = useRef<HTMLDivElement>(null);
  if (isOpenSelect)
    menuRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });

  return (
    <div className={'self-end flex gap-2.5 items-center'} ref={menuRef}>
      <Select
        className={'w-[125px] border border-gray-medium rounded-md bg-white'}
        menuClassName={'absolute top-[50px] right-0'}
        isOpen={isOpenSelect}
        selectedValue={selectedMenuItem}
        defaultValue={'Show 10'}
        setOpen={setOpenSelect}>
        {items.map(item => (
          <MenuItem
            setOpen={setOpenSelect}
            key={item.text}
            active={false}
            setSelectedItems={setSelectedMenuItem}
            item={item}>
            <p>{item.text}</p>
          </MenuItem>
        ))}
      </Select>
      <Pagination className={'bg-white'} count={15} maxVisible={3} />
    </div>
  );
};
