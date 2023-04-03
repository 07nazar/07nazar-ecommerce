import { FC, useState } from 'react';

import { ISelectedValue, MenuItem, Select } from 'shared/ui/Select';

import flagRu from '../../assets/flags/ru.png';
import flagUk from '../../assets/flags/ukr.png';
import flagEn from '../../assets/flags/us.png';

const items: ISelectedValue[] = [
  {
    id: 1,
    text: (
      <p className={'flex items-center gap-1'}>
        Ship to
        <img className={'w-5 ml-0.5 mb-0.5 h-full'} src={flagEn} alt={''} />
      </p>
    ),
  },
  {
    id: 2,
    text: (
      <p className={'flex items-center gap-1'}>
        Ship to
        <img className={'w-5 ml-0.5 mb-0.5 h-full'} src={flagUk} alt={''} />
      </p>
    ),
  },
  {
    id: 3,
    text: (
      <p className={'flex items-center gap-1'}>
        Ship to
        <img className={'w-5 ml-0.5 mb-0.5 h-full'} src={flagRu} alt={''} />
      </p>
    ),
  },
];

export const ChangeLanguage: FC = () => {
  const [isOpenLang, setOpenLang] = useState<boolean>(false);
  const [selectedMenuLang, setSelectedMenuLang] = useState<ISelectedValue[]>(
    []
  );

  return (
    <Select
      menuClassName={'absolute top-[40px] right-0'}
      selectedValue={selectedMenuLang}
      isOpen={isOpenLang}
      setOpen={setOpenLang}
      defaultValue={
        <p className={'flex items-center gap-1'}>
          Ship to <img className={'w-5 h-full'} src={flagEn} alt={'flagEn'} />
        </p>
      }>
      {items.map(item => (
        <MenuItem
          key={item.id}
          setOpen={setOpenLang}
          active={false}
          setSelectedItems={setSelectedMenuLang}
          item={item}>
          {item.text}
        </MenuItem>
      ))}
    </Select>
  );
};
