import { FC } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import { Button } from '../button';

interface DropdownButtonProps {
  title: string;
  isOpen: boolean;
  toggle: () => void;
}

export const DropdownButton: FC<DropdownButtonProps> = ({
  title,
  isOpen,
  toggle,
}) => (
  <Button
    className={
      'relative mt-2 w-full rounded-none border-t border-gray-medium px-0 py-4 font-semibold text-black'
    }
    onClick={toggle}>
    <span>{title}</span>
    <div
      className={`absolute right-1 top-1/2 -translate-y-1/2 transition-all duration-500
          ${isOpen ? 'rotate-180' : ''}`}>
      <IoIosArrowDown className={'text-gray-hot'} />
    </div>
  </Button>
);
