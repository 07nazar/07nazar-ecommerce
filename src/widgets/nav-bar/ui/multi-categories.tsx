import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { categoriesApi, categoriesLib } from 'entities/categories';
import { normalizeStringToURL } from 'shared/lib';
import { MenuItem, MenuItemType, Select } from 'shared/ui/select';

export const MultiCategories: FC = () => {
  const navigate = useNavigate();
  const [isOpenCategories, setOpenCategories] = useState<boolean>(false);
  const [selectedMenuCategory, setSelectedMenuCategory] = useState<
    MenuItemType[]
  >([]);
  const { data, isLoading, isSuccess, isError } =
    categoriesApi.useGetCategoriesQuery();

  const categoriesMulti =
    isSuccess && data.map(categoriesLib.mapCategoryToMulti);

  return (
    <Select
      openOnHover
      menuClassName={'absolute top-[40px] left-0'}
      selectedValue={selectedMenuCategory}
      isOpen={isOpenCategories}
      setOpen={setOpenCategories}
      defaultValue={'All category'}>
      {isLoading && <p>Loading...</p>}
      {categoriesMulti &&
        categoriesMulti.map(route => (
          <MenuItem
            key={`${route.id}-${route.text}`}
            setOpen={setOpenCategories}
            active={false}
            setSelectedItems={setSelectedMenuCategory}
            onClickOptionHandler={item => {
              if (typeof item.text === 'string') {
                navigate(
                  `/catalog/${normalizeStringToURL(item.text)}-${item.id
                    .toString()
                    .substring(0, 5)}` || '/catalog'
                );
              }
            }}
            item={route}>
            {route.text}
          </MenuItem>
        ))}
      {isError && <div />}
    </Select>
  );
};
