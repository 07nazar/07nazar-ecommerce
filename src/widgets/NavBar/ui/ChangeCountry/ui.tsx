import { FC, useState } from 'react';

import { ISelectedValue, MenuItem, Select } from 'shared/ui/Select';

const items: ISelectedValue[] = [
  { id: 1, text: 'English, USD' },
  { id: 2, text: 'Ukrainian, UAH' },
  { id: 3, text: 'Russian, RUB' },
];

export const ChangeCountry: FC = () => {
  const [isOpenLang, setOpenLang] = useState<boolean>(false);
  const [selectedMenuLang, setSelectedMenuLang] = useState<ISelectedValue[]>(
    []
  );

  return (
    <Select
      className={'w-[150px]'}
      menuClassName={'absolute top-[40px] right-0'}
      selectedValue={selectedMenuLang}
      isOpen={isOpenLang}
      setOpen={setOpenLang}
      defaultValue={'English, USD'}>
      {items.map(item => (
        <MenuItem
          key={item.id}
          setOpen={setOpenLang}
          active={false}
          setSelectedItems={setSelectedMenuLang}
          item={item}>
          <p className={'whitespace-nowrap'}>{item.text}</p>
        </MenuItem>
      ))}
    </Select>
  );
};
