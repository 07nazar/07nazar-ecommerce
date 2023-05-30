import { HOME_MAX_VISIBLE_FEATURED } from 'shared/config';

export const generateItemBorder = (i: number): string => {
  const rightBorder =
    i !== Math.floor(HOME_MAX_VISIBLE_FEATURED / 2) - 1 &&
    i !== HOME_MAX_VISIBLE_FEATURED - 1
      ? 'border-r'
      : '';

  const bottomBorder =
    i < Math.floor(HOME_MAX_VISIBLE_FEATURED / 2) ? 'border-b' : '';

  return `border-gray-pale ${rightBorder} ${bottomBorder}`;
};
