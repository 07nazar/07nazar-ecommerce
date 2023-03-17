import { FC } from 'react';
import { IoMdCart } from 'react-icons/io';

import { Button } from 'shared/ui/Button';

interface IMoveToCartProps {
  classNames?: string;
}

export const MoveToCart: FC<IMoveToCartProps> = ({ classNames = '' }) => (
  <Button className={`${classNames}`}>
    <IoMdCart size={18} /> Move to cart
  </Button>
);
