import { FC, MouseEvent, ReactNode, useEffect } from 'react';

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
  openOnHover = false,
}) => {
  let timeout: Timeout;
  const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpen(!isOpen);
  };

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
      className={`relative ${className} flex flex-col`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <SelectButton
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
