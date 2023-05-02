import {FC} from 'react';

import {useMatchMedia} from 'shared/lib';
import {Button} from 'shared/ui/button';
import {userTypes} from 'entities/user';
import {SendInquiry} from 'features/user/send-inquiry';

type SellerProps = Pick<
  userTypes.Seller,
  | 'address'
  | 'photo'
  | 'isVerified'
  | 'isWorldwideShipped'
  | 'name'
  | 'supplierCompany'
> & {
  classNames: string;
};

export const SellerCard: FC<SellerProps> = ({
  classNames = '',
  address,
  photo,
  isVerified,
  isWorldwideShipped,
  name,
  supplierCompany,
}) => {
  const { isDesktop, isLaptop, isTablet } = useMatchMedia();

  const sellerParams = {
    first: isDesktop
      ? `${address?.country} {, ${address?.city}`
      : address?.country,
    second: isVerified ? 'Verified Seller' : 'Not Verified Seller',
    thirth: isWorldwideShipped
      ? 'Worldwide Shipment'
      : 'Not Worldwide Shipment',
  };

  return (
    <div
      className={`${classNames} flex flex-col w-full max-h-[325px] border bg-white border-gray-medium rounded-md px-4 py-5`}>
      <div
        className={
          'flex items-start gap-2.5 border-b border-gray-medium pb-5 mb-3 lg:pb-2 lg:mb-1 '
        }>
        <img src={photo} alt={''} width={48} height={48} className={''} />
        <div className={'flex flex-col items-start'}>
          <p className={' lg:whitespace-nowrap'}>{name}</p>
          <p className={' lg:whitespace-nowrap'}>{supplierCompany}</p>
        </div>
      </div>
      <div
        className={
          'flex flex-col gap-2 mb-7 md:flex-row lg:justify-between xl:mb-1 md:justify-around'
        }>
        <p className={'sm:text-xs whitespace-nowrap'}>
          <span>{isDesktop ? sellerParams.first : sellerParams.first}</span>
        </p>
        <p className={'sm:text-xs whitespace-nowrap'}>
          {isDesktop || isLaptop || isTablet
            ? sellerParams.second
            : sellerParams.second.split(' ')[1]}
        </p>
        <p className={'sm:text-xs whitespace-nowrap'}>
          {isDesktop || isLaptop || isTablet
            ? sellerParams.thirth
            : sellerParams.thirth.split(' ')[1]}
        </p>
      </div>
      <div className={'flex flex-col gap-2 lg:hidden md:hidden'}>
        <SendInquiry />
        <Button
          className={
            'bg-white justify-center text-blue border border-gray-medium rounded-md gap-1 hover:opacity-90 duration-300'
          }>
          Seller’s profile
        </Button>
      </div>
    </div>
  );
};
