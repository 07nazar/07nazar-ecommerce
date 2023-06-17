import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { generateStringURL, useMatchMedia } from 'shared/lib';
import { MenuItem, MenuItemType, Select } from 'shared/ui/select';

type MultiCategoriesProps = {
  data: MenuItemType[];
};

export const MultiCategories: FC<MultiCategoriesProps> = ({ data }) => {
  const { isTablet, isMobile } = useMatchMedia();
  const navigate = useNavigate();
  const [isOpenCategories, setOpenCategories] = useState<boolean>(false);
  const [selectedMenuCategory, setSelectedMenuCategory] = useState<
    MenuItemType[]
  >([]);

  if (isMobile || isTablet) {
    return null;
  }

  return (
    <Select
      openOnHover
      menuClassName={'absolute top-[40px] left-0'}
      selectedValue={selectedMenuCategory}
      isOpen={isOpenCategories}
      setOpen={setOpenCategories}
      defaultValue={'All category'}>
      {data.map(route => (
        <MenuItem
          key={`${route.id}-${route.text}`}
          setOpen={setOpenCategories}
          active={false}
          setSelectedItems={setSelectedMenuCategory}
          onClickOptionHandler={item => {
            if (typeof item.text === 'string') {
              navigate(
                `/catalog/${generateStringURL(item.text)}-${item.id}` ||
                  '/catalog'
              );
            }
          }}
          item={route}>
          {route.text}
        </MenuItem>
      ))}
    </Select>
  );
};
