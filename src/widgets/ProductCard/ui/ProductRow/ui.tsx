import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { AddFavourite } from 'features/AddFavourite';
import { ProductCard, ProductRowType } from 'entities/Product';
import { Rating } from 'shared/ui/Rating';

interface IContent {
  rating: number;
  orders: number;
  deliveryCost: string;
  description: string;
  id: number;
}

const Content: FC<IContent> = ({
  description,
  rating,
  orders,
  deliveryCost,
  id,
}) => {
  const navigate = useNavigate();

  const detailsHandler = () => {
    navigate(`/product/${id}?tab=description`);
  };

  return (
    <>
      <div className={'flex items-center gap-2 leading-[19px]'}>
        <Rating value={rating} showValue />
        <p className={'text-gray-hot dots'}>{orders} orders</p>
        {deliveryCost === '0' && <p className={'text-green'}>Free Shipment</p>}
      </div>
      <p className={'text-base text-gray-dark pr-20'}>{description}</p>
      <button onClick={detailsHandler} className={'text-blue'}>
        View details
      </button>
    </>
  );
};

export const ProductRow: FC<ProductRowType> = ({
  id,
  mainPhoto,
  price,
  name,
  orders,
  deliveryCost,
  rating,
}) => (
  <>
    <ProductCard
      product={{ id, mainPhoto, price, name }}
      before={
        <AddFavourite isAuth id={1} classNames={'absolute top-0 right-0'} />
      }
      className={{
        image: 'w-[184px] max-h-[184px] h-full object-cover',
        title: 'w-full font-medium text-black text-base',
        box: 'max-w-[920px] w-full flex gap-5 border border-gray-medium rounded-md p-5',
        price: 'font-semibold text-xl',
        content: 'relative flex flex-col pt-5 gap-2',
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
