import { FC } from 'react';

import { MoveToCart } from 'features/MoveToCart';
import { RemoveProduct } from 'features/RemoveProduct';
import { ProductCard, ProductMinType } from 'entities/Product';
import { useMatchMedia } from 'shared/lib';

export const ProductSaved: FC<ProductMinType> = ({
  id,
  mainPhoto,
  price,
  name,
}) => {
  const { isDesktop, isMobile } = useMatchMedia();

  return (
    <ProductCard
      product={{ id, mainPhoto, price, name }}
      className={{
        image:
          'max-w-[270px] md:max-w-[90px] w-full max-h-[240px] bg-gray-medium sm:bg-white rounded-md mb-2.5 md:mb-0 md:ml-0 md:mr-2 sm:mr-0 object-contain',
        title: 'w-full text-gray-dark sm:text-xs mb-2.5 sm:mb-0',
        price: 'text-black font-semibold sm:text-sm mb-2.5 lg:mb-0',
        content:
          'inline-flex flex-col-reverse md:flex-col items-start sm:justify-between sm:p-2',
        box: 'md:flex sm:bg-white sm:border sm:border-gray-medium sm:mx-2.5 sm:rounded-md',
      }}
      before={isDesktop && <MoveToCart />}>
      {!isDesktop && (
        <div className={'flex items-end gap-1 sm:gap-2.5'}>
          <MoveToCart />
          {isMobile && <RemoveProduct productId={id} />}
        </div>
      )}
    </ProductCard>
  );
};
