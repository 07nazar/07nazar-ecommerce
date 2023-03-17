import { FC } from 'react';

import { Button } from 'shared/ui/Button';

import type { SellerType } from 'entities/UserCard';
import { SendInquiry } from 'features/SendInquiry';

type SellerProps = Pick<
  SellerType,
  | 'address'
  | 'photo'
  | 'isVerified'
  | 'isWorldwideShipping'
  | 'name'
  | 'supplierCompany'
>;

export const SellerCard: FC<SellerProps> = ({
  address,
  photo,
  isVerified,
  isWorldwideShipping,
  name,
  supplierCompany,
}) => (
  <div
    className={
      'flex flex-col max-w-[280px] w-full max-h-[325px] h-full border border-gray-medium rounded-md px-4 py-5'
    }>
    <div
      className={
        'flex items-start gap-2.5 border-b border-gray-medium pb-5 mb-3'
      }>
      <img src={photo} alt={''} width={48} height={48} />
      <div className={'flex flex-col items-start'}>
        <p>{name}</p>
        <p>{supplierCompany}</p>
      </div>
    </div>
    <div className={'flex flex-col gap-2 mb-7'}>
      <p>
        {address?.country}, {address?.city}
      </p>
      <p>{isVerified ? 'Verified Seller' : 'Not Verified Seller'}</p>
      <p>
        {isWorldwideShipping ? 'Worldwide shipping' : 'Not Worldwide shipping'}
      </p>
    </div>
    <div className={'flex flex-col gap-2'}>
      <SendInquiry />
      <Button className='bg-white justify-center text-blue border border-gray-medium rounded-md gap-1 hover:opacity-90 duration-300'>
        Seller’s profile
      </Button>
    </div>
  </div>
);
