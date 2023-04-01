import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getRoutes } from 'shared/api';
import { MenuItem, Select } from 'shared/ui/Select';

interface IItem {
  id: number;
  text: string;
  to?: string;
  children?: IItem[];
}

export const MultiCategories: FC = () => {
  const navigate = useNavigate();
  const [isOpenCategories, setOpenCategories] = useState<boolean>(false);
  const [selectedMenuCategory, setSelectedMenuCategory] = useState<IItem[]>([]);
  const routes: IItem[] = getRoutes();

  return (
    <Select
      openOnHover
      className={'w-[150px]'}
      menuClassName={'absolute top-[40px] right-0'}
      selectedValue={selectedMenuCategory}
      isOpen={isOpenCategories}
      setOpen={setOpenCategories}
      defaultValue={'All category'}>
      {routes.map(route => (
        <MenuItem
          key={`${route.id}-${route.text}`}
          setOpen={setOpenCategories}
          active={false}
          setSelectedItems={setSelectedMenuCategory}
          onClickOptionHandler={item => {
            navigate(item.to?.toLowerCase() || '/');
          }}
          item={route}>
          {route.text}
        </MenuItem>
      ))}
    </Select>
  );
};
