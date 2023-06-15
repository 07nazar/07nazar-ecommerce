import { FC, isValidElement, MouseEvent, ReactNode } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { MdClose } from 'react-icons/md';

import type { ISelectedValue } from './index';

type ISelectButton = {
  onClickHandler: (e: MouseEvent<HTMLButtonElement>) => void;
  isOpen: boolean;
  selectedValue: ISelectedValue[] | ISelectedValue;
  isPill: boolean;
  defaultValue?: ReactNode;
  className?: string;
};

const SelectButton: FC<ISelectButton> = ({
  className = '',
  onClickHandler,
  isOpen,
  selectedValue,
  isPill,
  defaultValue = 'Select',
}) => {
  const paddingClass = Array.isArray(selectedValue) ? 'p-2.5' : '';
  const textClass = isPill ? 'p-1.5 leading-[14px]' : '';

  const getSelectedItemsPills = () => {
    let selectedItems: JSX.Element[] = [];

    if (Array.isArray(selectedValue)) {
      selectedItems = selectedValue.map(item => (
        <span
          key={item.id}
          className={`flex items-center gap-3 p-1.5 ${
            isPill ? 'rounded-md bg-gray-pale text-xs' : 'text-base'
          }`}>
          {item.text}
          {isPill && <MdClose size={10} />}
        </span>
      ));
    }

    return selectedItems;
  };

  const getSelectedItems = () => {
    let selectedItems: (string | JSX.Element)[] = [];

    if (Array.isArray(selectedValue)) {
      selectedItems = selectedValue.map(item => item.text);
    }

    if (selectedItems.every(item => isValidElement(item))) {
      return selectedItems;
    }

    return selectedItems.filter(item => !isValidElement(item)).join(', ');
  };

  const selectItem = isPill ? getSelectedItemsPills() : getSelectedItems();

  return (
    <button
      type={'button'}
      onClick={onClickHandler}
      className={`select-btn ${textClass} ${paddingClass} ${className}`}>
      {Array.isArray(selectedValue) && selectedValue.length > 0
        ? selectItem
        : defaultValue}
      <IoIosArrowDown
        className={`transition-transform duration-500
          ${isOpen ? 'rotate-180' : ''}`}
      />
    </button>
  );
};

export default SelectButton;
