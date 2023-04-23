import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { AddFavourite } from 'features/AddFavourite';
import { ProductCard, productTypes } from 'entities/Product';
import { useMatchMedia } from 'shared/lib';
import { Rating } from 'shared/ui/Rating';

type ContentProps = Pick<
  productTypes.ProductType,
  'description' | 'rating' | 'orders' | 'deliveryCost' | 'id'
>;

const Content: FC<ContentProps> = ({
  description,
  rating,
  orders,
  deliveryCost,
  id,
}) => {
  const { isMobile } = useMatchMedia();
  const navigate = useNavigate();

  const detailsHandler = () => {
    navigate(`/product/${id}?tab=description`);
  };

  return (
    <>
      <div
        className={
          'flex items-center md:items-start md:flex-wrap gap-2 md:gap-1.5 sm:gap-1 leading-[19px]'
        }>
        <Rating value={rating} showValue />
        <p
          className={
            'text-gray-hot sm:text-xs sm:ml-1 dots sm:after:hidden p-3 md:py-0 sm:p-0 sm:pl-2.5'
          }>
          {orders} orders
        </p>
        {deliveryCost === '0' && (
          <p className={'text-green sm:text-xs'}>Free Shipment</p>
        )}
      </div>
      {!isMobile && (
        <p className={'text-base text-gray-dark pr-12 lg:pr-2'}>
          {description}
        </p>
      )}
      {!isMobile && (
        <button onClick={detailsHandler} className={'text-blue'}>
          View details
        </button>
      )}
    </>
  );
};

export const ProductRow: FC<productTypes.ProductRowType> = ({
  id,
  mainPhoto,
  price,
  name,
  orders,
  deliveryCost,
  rating,
}) => {
  // TODO Поправить картинку 480-768
  const { isMobile } = useMatchMedia();

  return (
    <>
      <ProductCard
        product={{ id, mainPhoto, price, name }}
        before={
          !isMobile && (
            <AddFavourite isAuth id={1} classNames={'absolute top-0 right-0'} />
          )
        }
        className={{
          boxImage: 'max-w-[184px] sm:max-w-[85px] w-full',
          title:
            'max-w-[85%] sm:max-w-full w-full font-medium text-black sm:text-gray-dark',
          box: 'max-w-[920px] w-full flex gap-5 lg:gap-3 md:gap-2 sm:gap-1 border border-gray-medium rounded-md p-5 lg:p-2 sm:px-0 sm:py-3',
          price: 'font-semibold text-xl md:text-base',
          content:
            'relative flex flex-col pt-5 md:grow sm:pt-0 gap-2 sm:gap-0.5',
        }}>
        <Content
          description={
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit '
          }
          id={id}
          deliveryCost={deliveryCost}
          orders={orders}
          rating={rating}
        />
      </ProductCard>
    </>
  );
};
