import { FC, useEffect, useRef, useState } from 'react';

import { Pagination } from 'shared/ui/pagination';
import { ISelectedValue, MenuItem, Select } from 'shared/ui/select';

const items: ISelectedValue[] = [
  { id: 1, text: 'Show 10' },
  { id: 2, text: 'Show 20' },
  { id: 2, text: 'Show 30' },
];

type PaginationBoxProps = {
  setSelectedOption: (val: ISelectedValue[]) => void;
  count: number;
  changePageHandler: (page: number) => void;
};

export const PaginationBox: FC<PaginationBoxProps> = ({
  setSelectedOption,
  count,
  changePageHandler,
}) => {
  const [isOpenSelect, setOpenSelect] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<ISelectedValue[]>(
    []
  );

  const menuRef = useRef<HTMLDivElement>(null);
  if (isOpenSelect)
    menuRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });

  useEffect(() => {
    setSelectedOption(selectedMenuItem);
  }, [selectedMenuItem]);

  return (
    <div
      className={
        'flex sm:flex-wrap-reverse self-end sm:justify-center gap-2.5 md:gap-1.5 mb-20 lg:mb-14 md:mb-8 items-center'
      }
      ref={menuRef}>
      <Select
        className={
          'w-[125px] md:mx-1 border border-gray-medium rounded-md bg-white'
        }
        menuClassName={'absolute top-[50px] right-0'}
        isOpen={isOpenSelect}
        selectedValue={selectedMenuItem}
        defaultValue={'Show 10'}
        setOpen={setOpenSelect}>
        {items.map(item => (
          <MenuItem
            setOpen={setOpenSelect}
            key={`${item.id}-${item.text.toString()}`}
            active={false}
            setSelectedItems={setSelectedMenuItem}
            item={item}>
            <p>Show {item.text}</p>
          </MenuItem>
        ))}
      </Select>
      <Pagination
        changePageHandler={changePageHandler}
        className={'bg-white md:mx-1'}
        count={count}
        maxVisible={3}
      />
    </div>
  );
};
