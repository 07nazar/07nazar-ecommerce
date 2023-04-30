import { FC } from 'react';

import { Button } from 'shared/ui/Button';
import { DivLink } from 'shared/ui/DivLink';
import { productTypes } from 'entities/Product';

type IDealsItem = Pick<productTypes.ProductMin, 'mainPhoto' | 'name' | 'id'> & {
  discount: number;
  className?: string;
};

export const DealsItem: FC<IDealsItem> = ({
  discount,
  mainPhoto,
  name,
  id,
  className = '',
}) => (
  <DivLink
    to={`/product/${id}`}
    ariaLabel={`Go to ${name} product page`}
    className={`${className}`}>
    <div
      className={
        'flex flex-col items-center px-5 pt-2 pb-4 lg:py-2 lg:px-3 md:justify-between sm:px-2'
      }>
      <div className={'max-w-[140px] h-[140px] flex justify-center mb-3'}>
        <img src={mainPhoto.url} alt={name} className={'object-contain'} />
      </div>
      <h5 className={'text-black mb-2 lg:text-xs whitespace-nowrap'}>{name}</h5>
      <Button size={'sm'} className={'bg-light-red leading-4 text-red'}>
        -{discount}%
      </Button>
    </div>
  </DivLink>
);
