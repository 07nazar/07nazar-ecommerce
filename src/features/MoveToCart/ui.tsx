import { FC } from 'react';
import { IoMdCart } from 'react-icons/io';

import { useMatchMedia } from 'shared/lib';
import { Button } from 'shared/ui/Button';

interface IMoveToCartProps {
  className?: string;
}

export const MoveToCart: FC<IMoveToCartProps> = ({ className }) => {
  const { isDesktop } = useMatchMedia();

  return (
    <Button
      className={`${
        className || ''
      } flex border rounded-md border-gray-medium text-blue sm:text-xs md:p-2 sm:p-1.5 gap-1 hover:bg-blue hover:text-white duration-300`}>
      {isDesktop && <IoMdCart size={18} />} Move to cart
    </Button>
  );
};
