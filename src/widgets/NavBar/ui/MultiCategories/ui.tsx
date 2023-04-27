import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { categoriesModel, categoriesTypes } from 'entities/Categories';
import { useAppDispatch } from 'shared/lib';
import { MenuItem, Select } from 'shared/ui/Select';

export const MultiCategories: FC = () => {
  const navigate = useNavigate();
  const [isOpenCategories, setOpenCategories] = useState<boolean>(false);
  const [selectedMenuCategory, setSelectedMenuCategory] = useState<
    categoriesTypes.Category[]
  >([]);
  const { data, isLoading, isSuccess } =
    categoriesModel.useGetCategoriesQuery();
  const dispatch = useAppDispatch();
  const dataArray: categoriesTypes.Category[] = isSuccess ? [data] : [];

  useEffect(() => {
    if (data) {
      dispatch(categoriesModel.setCategories(data));
    }
  }, [data]);

  // TODO слишком большая запись выходит для получения и записи
  return (
    <Select
      openOnHover
      menuClassName={'absolute top-[40px] left-0'}
      selectedValue={selectedMenuCategory}
      isOpen={isOpenCategories}
      setOpen={setOpenCategories}
      defaultValue={'All category'}>
      {isLoading && <p>loader</p>}
      {isSuccess &&
        dataArray.map(route => (
          <MenuItem
            key={`${route.id}-${route.text}`}
            setOpen={setOpenCategories}
            active={false}
            setSelectedItems={setSelectedMenuCategory}
            onClickOptionHandler={item => {
              navigate(item.to?.toLowerCase() || '/catalog');
            }}
            item={route}>
            {route.text}
          </MenuItem>
        ))}
    </Select>
  );
};
