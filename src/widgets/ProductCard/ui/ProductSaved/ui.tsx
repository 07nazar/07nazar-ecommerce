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
