import type { Category } from '../types';
// TODO какая та фигня с тем что показывает Category и categoriesTypes.Category как разные типы, не знаю как фиксить
export const findObjectInArray = (
  arr: Category[],
  id: string
): Category | null => {
  for (let i = 0; i < arr.length; i += 1) {
    const obj = arr[i];
    if (obj.id === id) {
      return obj;
    }
    if (obj.children) {
      const result = findObjectInArray(obj.children, id);
      if (result) {
        return result;
      }
    }
  }
  return null;
};
