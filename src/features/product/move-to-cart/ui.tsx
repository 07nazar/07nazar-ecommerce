import { FC } from 'react';
import { IoMdCart } from 'react-icons/io';

import { useMatchMedia } from 'shared/lib';
import { Button } from 'shared/ui/button';

interface IMoveToCartProps {
  productId: string;
  className?: string;
}

export const MoveToCart: FC<IMoveToCartProps> = ({
  className = '',
  productId,
}) => {
  const { isMobile } = useMatchMedia();

  const handleClick = () => () => productId === 'das';

  return (
    <Button
      onClick={handleClick}
      className={`${className} flex border rounded-md border-gray-medium text-blue sm:text-xs md:p-2 sm:p-1.5 gap-1 hover:bg-blue hover:text-white duration-300`}>
      {!isMobile && <IoMdCart size={18} />} Move to cart
    </Button>
  );
};
