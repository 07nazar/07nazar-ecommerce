import { MenuItemType } from 'shared/ui/select';

import { Category } from '../types';

export const mapCategoryToMulti = (category: Category): MenuItemType => ({
  id: category.id,
  text: category.name,
  children: category.children
    ? category.children.map(mapCategoryToMulti)
    : undefined,
});
