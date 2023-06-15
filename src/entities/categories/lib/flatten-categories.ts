import { ISelectedValue } from 'shared/ui/select';

import { Category } from '../types';

export const flattenCategories = (
  categories: Category[],
  selectedId?: string
): ISelectedValue[] => {
  const result: ISelectedValue[] = [];

  for (let i = 0; i < categories.length; i += 1) {
    const category = categories[i];

    if (category.id !== selectedId) {
      result.push({
        id: category.id,
        text: category.name,
      });

      if (category.children) {
        const childValues = flattenCategories(category.children, selectedId);
        result.push(...childValues);
      }
    }
  }

  return result;
};
