import { FC, useEffect, useState } from 'react';

import { categoriesLib } from 'entities/categories';
import { useMatchMedia, useSliceSelector } from 'shared/lib';
import { MenuItem, MenuItemType, Select } from 'shared/ui/select';

type SelectCategoryProps = {
  setFieldValue: (
    field: string,
    value: string,
    shouldValidate?: boolean | undefined
  ) => void;
};

export const SelectCategory: FC<SelectCategoryProps> = ({ setFieldValue }) => {
  const { isMobile } = useMatchMedia();
  const [categoriesOpen, setCategoriesOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<MenuItemType[]>([]);
  const { categories } = useSliceSelector('categories', state => state);
  const categoriesFlatten = categoriesLib.flattenCategories(categories);

  useEffect(() => {
    if (selectedCategory[0]) {
      setFieldValue('category', String(selectedCategory[0]?.id));
    }
  }, [selectedCategory]);

  return (
    <div className={'flex items-center gap-2'}>
      <p className={'whitespace-nowrap'}>
        Select category {!isMobile && 'for product'}:
      </p>
      <Select
        selectedValue={selectedCategory}
        isOpen={categoriesOpen}
        setOpen={setCategoriesOpen}
        className={
          'flex h-[54px] justify-center rounded-md border border-gray-medium bg-white'
        }
        menuClassName={
          'absolute top-[56px] max-h-60 left-0 scrollbar-y overflow-y-scroll rounded-r-none'
        }
        buttonClassName={'h-full p-6'}>
        {categoriesFlatten.map(category => (
          <MenuItem
            key={category.id}
            item={category}
            setOpen={setCategoriesOpen}
            setSelectedItems={setSelectedCategory}
            active={selectedCategory[0] === category}>
            {category.text}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};
