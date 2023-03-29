import { FC } from 'react';

import { Button } from 'shared/ui/Button';

type RemoveProductType = {
  productId: number;
};

export const RemoveProduct: FC<RemoveProductType> = ({ productId }) => (
  <Button
    className={
      'text-red sm:text-xs md:p-2 sm:p-1.5 border border-gray-medium rounded-md py-2 px-2.5 hover:bg-red hover:text-white transition-all duration-300'
    }>
    Remove
  </Button>
);
