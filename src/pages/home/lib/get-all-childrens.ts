import {categoriesTypes} from 'entities/categories';

export const getAllChildren = (
  categories: categoriesTypes.CategoryWithAdditionalInfo[]
) => {
  let items: categoriesTypes.CategoryWithAdditionalInfo[] = [];
  categories.forEach(category => {
    if (category.children) {
      items = items.concat(getAllChildren(category.children));
    }
    items.push(category);
  });
  return items;
};
