import { FC, useState } from 'react';

import { MenuItem, Select } from 'shared/ui/Select';

import flagRu from '../../assets/flags/ru.png';
import flagUk from '../../assets/flags/ukr.png';
import flagEn from '../../assets/flags/us.png';

interface IItem {
  id: number;
  text: string;
  subTitle?: string;
  children?: IItem[];
}
// Todo флаги стран не отображаются
const items = [
  { id: 1, text: `English ${(<img src={flagEn} alt={'english'} />)}` },
  { id: 2, text: `Ukrainian ${(<img src={flagUk} alt={'ukrainian'} />)}` },
  { id: 3, text: `Russian ${(<img src={flagRu} alt={'russian'} />)}` },
];

export const ChangeLanguage: FC = () => {
  const [isOpenLang, setOpenLang] = useState<boolean>(false);
  const [selectedMenuLang, setSelectedMenuLang] = useState<IItem[]>([]);

  return (
    <Select
      className={'w-[150px]'}
      menuClassName={'absolute top-[40px] right-0'}
      selectedValue={selectedMenuLang}
      isOpen={isOpenLang}
      setOpen={setOpenLang}
      defaultValue={
        <span>
          Ship to <img src={flagEn} alt={''} />
        </span>
      }>
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
