import { FC } from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { IoBagCheckOutline } from 'react-icons/io5';
import { MdOutlineMessage } from 'react-icons/md';

import { MoveToCart } from 'features/MoveToCart';
import { SaveForLater } from 'features/SaveForLater';
import { colors, useMatchMedia } from 'shared/lib';
import { Rating } from 'shared/ui/Rating';

import type { ProductType } from 'entities/Product';

type ProductInfoType = Pick<
  ProductType,
  | 'quantity'
  | 'params'
  | 'rating'
  | 'reviewsCount'
  | 'sold'
  | 'name'
  | 'description'
>;
type RatingBlockProduct = Pick<ProductType, 'rating' | 'reviewsCount' | 'sold'>;
type ParamsProduct = Pick<ProductType, 'params'>;

const RatingBlock: FC<RatingBlockProduct> = ({
  rating,
  reviewsCount,
  sold,
}) => (
  <div
    className={
      'flex items-center gap-5 mb-5 xl:gap-3 lg:flex-wrap lg:-order-1'
    }>
    <div className={'flex items-center '}>
      <Rating value={rating} />
      <span className={'ml-2 text-orange whitespace-nowrap'}>
        {rating.toFixed(2)}
      </span>
    </div>
    <div className={'flex items-center gap-2'}>
      <MdOutlineMessage size={16} color={colors.gray.dark} />
      <span className={'text-gray-dark whitespace-nowrap'}>
        {reviewsCount} reviews
      </span>
    </div>
    <div className={'flex items-center gap-2 '}>
      <IoBagCheckOutline size={18} color={colors.gray.dark} />
      <span className={'text-gray-dark whitespace-nowrap'}>{sold} sold</span>
    </div>
  </div>
);

const Params: FC<ParamsProduct> = ({ params }) => (
  <div
    className={
      'grid lg:justify-center lg:mb-7 lg:grid-cols-2 lg:gap-5 lg:mx-10 sm:grid-cols-1 sm:'
    }>
    {params.map((param, index) => (
      <div
        className={`grid max-w-[300px]  w-full grid-cols-2${
          index % 3 === 0
            ? ' border-b border-b-gray-medium mb-4 lg:border-b-0 lg:mb-0'
            : ''
        }`}
        key={param.name}>
        <p className={'text-gray-hot self-start max-w-[150px] w-full'}>
          {param.name}
        </p>
        <p className={'self-center max-w-[200px] w-full lg:text-right   '}>
          {param.value}
        </p>
      </div>
    ))}
  </div>
);

export const ProductInfo: FC<ProductInfoType> = ({
  quantity,
  params,
  rating,
  reviewsCount,
  sold,
  name,
  description,
}) => {
  const { isDesktop, isLaptop } = useMatchMedia();
  return (
    <div className={'flex flex-col w-full shrink'}>
      <div className={'flex items-start gap-2 lg:hidden'}>
        <FcCheckmark size={22} />
        <p className={'text-green mb-1 '}>
          {quantity ? 'In stock' : 'Not available'}
        </p>
      </div>

      <h3 className={'text-2xl mb-2.5 text-black font-semibold '}>{name}</h3>
      <span className={'hidden lg:block lg:mb-2.5'}>$129.95 (50-100 pcs)</span>

      <RatingBlock rating={rating} reviewsCount={reviewsCount} sold={sold} />

      <div
        className={
          'flex items-center gap-9 mb-11 lg:mb-5 xl:gap-2 lg:items-start md:items-center md:flex-row md:flex-wrap md:max-w-[500px] md:w-full md:mx-auto md:justify-between md:gap-5 md:mb-7'
        }>
        <SaveForLater
          className={'bg-blue hover:opacity-90 lg:grow  lg:justify-center'}
        />
        <MoveToCart
          className={
            'bg-blue gap-1 hover:opacity-90 duration-300 lg:grow lg:justify-center'
          }
        />
      </div>

      {!isLaptop && <Params params={params} />}
      {!isDesktop && !isLaptop && <p className={''}>{description}</p>}
    </div>
  );
};
