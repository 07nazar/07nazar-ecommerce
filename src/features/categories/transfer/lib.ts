import { categoriesTypes } from 'entities/categories';
import { ISelectedValue } from 'shared/ui/select';

export const flattenCategories = (
  categories: categoriesTypes.Category[],
  selectedId: string
): ISelectedValue[] => {
  const result: ISelectedValue[] = [];

  for (let i = 0; i < categories.length; i += 1) {
    const category = categories[i];

    // TODO Вложженые if, можно отрефакторить
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
