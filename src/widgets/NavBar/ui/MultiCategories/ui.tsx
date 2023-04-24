import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ISelectedValue, MenuItem, Select } from 'shared/ui/Select';

export const MultiCategories: FC = () => {
  const navigate = useNavigate();
  const [isOpenCategories, setOpenCategories] = useState<boolean>(false);
  const [selectedMenuCategory, setSelectedMenuCategory] = useState<
    ISelectedValue[]
  >([]);
  const routes: ISelectedValue[] = [
    { id: 41, to: '/', text: 'home' },
    { id: 411, to: '/shop', text: 'shop' },
  ];

  return (
    <Select
      openOnHover
      menuClassName={'absolute top-[40px] left-0'}
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
