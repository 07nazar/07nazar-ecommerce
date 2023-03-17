import { FC } from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { IoBagCheckOutline } from 'react-icons/io5';
import { MdOutlineMessage } from 'react-icons/md';

import { MoveToCart } from 'features/MoveToCart';
import { SaveForLater } from 'features/SaveForLater';
import { colors } from 'shared/lib';
import { Rating } from 'shared/ui/Rating';

import type { ProductType } from 'entities/Product';

type ProductInfoType = Pick<
  ProductType,
  'quantity' | 'params' | 'rating' | 'reviewsCount' | 'sold' | 'name'
>;
type RatingBlockProduct = Pick<ProductType, 'rating' | 'reviewsCount' | 'sold'>;
type ParamsProduct = Pick<ProductType, 'params'>;

const RatingBlock: FC<RatingBlockProduct> = ({
  rating,
  reviewsCount,
  sold,
}) => (
  <div className={'flex items-center gap-5 mb-5'}>
    <div className={'flex items-center '}>
      <Rating value={rating} />
      <span className={'ml-2 text-orange'}> {rating.toFixed(2)}</span>
    </div>
    <div className={'flex items-center gap-2'}>
      <MdOutlineMessage size={16} color={colors.gray.dark} />
      <span className={'text-gray-dark'}>{reviewsCount} reviews</span>
    </div>
    <div className={'flex items-center gap-2'}>
      <IoBagCheckOutline size={18} color={colors.gray.dark} />
      <span className={'text-gray-dark'}>{sold} sold</span>
    </div>
  </div>
);

const Params: FC<ParamsProduct> = ({ params }) => (
  <div className={'flex flex-col'}>
    {params.map((param, index) => (
      <div
        className={`flex items-center pb-4 ${
          index % 3 === 0 ? ' border-b border-b-gray-medium mb-4' : ''
        }`}
        key={param.name}>
        <p className={'text-gray-hot self-start max-w-[150px] w-full'}>
          {param.name}
        </p>
        <p className={'self-center max-w-[200px] w-full '}>{param.value}</p>
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
}) => (
  <div className={'flex flex-col'}>
    <div className={'flex items-start gap-2'}>
      <FcCheckmark size={22} />
      <p className={'text-green mb-1'}>
        {quantity ? 'In stock' : 'Not available'}
      </p>
    </div>
    <h3 className={'text-2xl mb-2.5 text-black font-semibold'}>{name}</h3>

    <RatingBlock rating={rating} reviewsCount={reviewsCount} sold={sold} />

    <div className={'flex items-center gap-9 mb-11'}>
      <SaveForLater
        classNames={'bg-blue gap-1 hover:opacity-90 duration-300'}
      />
      <MoveToCart classNames={'bg-blue gap-1 hover:opacity-90 duration-300'} />
    </div>

    <Params params={params} />
  </div>
);
