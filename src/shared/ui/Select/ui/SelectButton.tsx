import { FC, MouseEvent } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { MdClose } from 'react-icons/md';

interface ISelectedValue {
  id: number;
  text: string;
  subTitle?: string;
}

interface ISelectButton {
  onClickHandler: (e: MouseEvent<HTMLButtonElement>) => void;
  isOpen: boolean;
  selectedValue: ISelectedValue[] | ISelectedValue;
  isPill: boolean;
  defaultValue?: string;
}

const SelectButton: FC<ISelectButton> = ({
  onClickHandler,
  isOpen,
  selectedValue,
  isPill,
  defaultValue = 'Select',
}) => {
  const paddingClass = Array.isArray(selectedValue) ? 'p-[10px]' : '';
  const textClass = isPill ? 'p-[6px] leading-[14px]' : '';
  const containerClass = `relative w-full max-h-[40px] flex gap-[5px] items-center rounded-md border-0 cursor-pointer transition-all duration-500  ${paddingClass} ${textClass}`;

  const selectedItemsPills =
    isPill &&
    Array.isArray(selectedValue) &&
    selectedValue?.map(item => (
      <span
        key={item.id}
        className={`flex items-center gap-[13px] p-[7px] ${
          isPill ? 'bg-gray-pale rounded-md text-[12px]' : 'text-[16px]'
        }`}>
        {item.text}
        {isPill && <MdClose size={10} />}
      </span>
    ));

  const selectedItems =
    Array.isArray(selectedValue) &&
    !isPill &&
    selectedValue.map(item => item.text).join(', ');

  const selectItem = isPill ? selectedItemsPills : selectedItems;

  return (
    <button onClick={onClickHandler} className={containerClass}>
      {Array.isArray(selectedValue) && selectedValue.length > 0 ? (
        selectItem
      ) : (
        <span>{defaultValue}</span>
      )}

      <div
        className={`absolute top-1/2 -translate-y-1/2 right-1 transition-all duration-500
          ${isOpen ? 'rotate-180' : ''}`}>
        <IoIosArrowDown />
      </div>
    </button>
  );
};

export default SelectButton;
