import { FC } from 'react';
import { IoMdCart } from 'react-icons/io';

import { Button } from 'shared/ui/button';

interface AddToCartProps {
  productId: string;
}

export const AddToCart: FC<AddToCartProps> = ({ productId }) => {
  const clickHandler =
    () =>
    // удалится (нужно для заглушки eslint)
    () =>
      productId === '1';

  return (
    <Button onClick={clickHandler} className={'bg-light pl-3 text-blue'}>
      <IoMdCart size={18} />
      <span className={'ml-3'}>Move to cart</span>
    </Button>
  );
};
