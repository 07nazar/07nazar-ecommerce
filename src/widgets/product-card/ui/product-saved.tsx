import { FC } from 'react';

import { useMatchMedia } from 'shared/lib';
import { ProductCard, productTypes } from 'entities/product';
import { RemoveProduct } from 'features/cart/remove-product';
import { MoveToCart } from 'features/product/move-to-cart';

export const ProductSaved: FC<productTypes.ProductMin> = ({
  id,
  mainPhoto,
  price,
  name,
}) => {
  const { isMobile } = useMatchMedia();

  return (
    <ProductCard
      product={{ id, mainPhoto, price, name }}
      className={{
        boxImage:
          'mb-2.5 md:mb-0 md:max-w-[75%] sm:max-w-[100px] md:mx-auto sm:ml-2',
        image: 'bg-gray-medium sm:bg-white rounded-md',
        title: 'w-full text-gray-dark mb-2.5 sm:mb-0',
        price: 'text-black font-semibold mb-2.5 lg:mb-0',
        content:
          'flex flex-col-reverse items-start sm:flex-col sm:h-full sm:p-2',
        box: 'sm:flex sm:bg-white sm:border sm:border-gray-medium sm:mx-2.5 sm:rounded-md',
      }}
      before={!isMobile && <MoveToCart productId={id} />}>
      {isMobile && (
        <div className={'sm:flex sm:mt-auto gap-2.5'}>
          <MoveToCart productId={id} />
          <RemoveProduct productId={id} />
        </div>
      )}
    </ProductCard>
  );
};
