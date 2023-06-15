import { FC, MouseEvent, ReactNode, useEffect, useRef } from 'react';

import { useOutsideClick } from '../../../../lib';
import Menu from '../menu-item/menu';

import SelectButton from './select-button';

type Timeout = ReturnType<typeof setTimeout>;

export type ISelectedValue = {
  id: number | string;
  text: string | JSX.Element;
  subTitle?: string;
  to?: string;
};

type ISelect = {
  isPill?: boolean;
  isOpen: boolean;
  className?: string;
  setOpen: (isOpen: boolean) => void;
  children: ReactNode;
  selectedValue: ISelectedValue[] | ISelectedValue;
  defaultValue?: ReactNode;
  menuClassName?: string;
  buttonClassName?: string;
  openOnHover?: boolean;
};

export const Select: FC<ISelect> = ({
  isPill = false,
  isOpen,
  className = '',
  selectedValue,
  children,
  setOpen,
  defaultValue,
  menuClassName = '',
  buttonClassName = '',
  openOnHover = false,
}) => {
  const selectRef = useRef<HTMLDivElement>(null);
  let timeout: Timeout;
  const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpen(!isOpen);
  };

  useOutsideClick(selectRef, () => setOpen(false));

  useEffect(() => () => clearTimeout(timeout), []);

  const handleMouseEnter = () => {
    if (openOnHover) {
      setOpen(true);
      clearTimeout(timeout);
    }
  };

  const handleMouseLeave = () => {
    if (openOnHover) {
      timeout = setTimeout(() => {
        setOpen(false);
      }, 500);
    }
  };

  return (
    <div
      ref={selectRef}
      className={`relative ${className} flex h-full flex-col`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <SelectButton
        className={buttonClassName}
        onClickHandler={(e: MouseEvent<HTMLButtonElement>) => onClickHandler(e)}
        isOpen={isOpen}
        selectedValue={selectedValue}
        isPill={isPill}
        defaultValue={defaultValue}
      />
      <Menu isOpen={isOpen} menuClassName={menuClassName}>
        {children}
      </Menu>
    </div>
  );
};
