import { FC } from 'react';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

import { ProductCart } from 'widgets/ProductCard';
import { RemoveAllFromCart } from 'features/RemoveAllFromCart';
import { useMatchMedia } from 'shared/lib';
import { Button } from 'shared/ui/Button';
import { DiscountBanner } from 'shared/ui/DiscountBanner';

import { CheckoutForm } from './CheckoutForm';
import { CouponField } from './CouponField';
import { FeaturesShop } from './FeaturesShop';
import { SavedProducts } from './SavedProducts';

export const Cart: FC = () => {
  const navigate = useNavigate();
  const { isMobile, isDesktop } = useMatchMedia();

  // это уйдет в редакс
  const fromRedux = {
    discount: 3,
    subtotal: 444,
    tax: 31,
    totalAmount: 412,
    totalQuantity: 12,
  };

  return (
    <>
      <h3
        className={
          'my-6 lg:my-5 md:my-4 font-semibold text-2xl md:text-xl text-black'
        }>
        My cart ({fromRedux.totalQuantity})
      </h3>
      <div
        className={
          'flex md:flex-col md:items-center gap-5 sm:gap-0 mb-8 sm:mb-0 justify-between'
        }>
        <div
          className={
            'max-w-[880px] w-full h-fit flex flex-col p-5 sm:p-4 sm:pb-1 lg:p-3 border sm:rounded-none rounded-md border-gray-medium bg-white'
          }>
          <ProductCart />
          {!isMobile && (
            <div className={'flex mt-auto w-full justify-between'}>
              <Button
                className={
                  'border rounded-md border-blue bg-blue text-white flex items-center gap-4 hover:bg-white hover:text-blue transition-all duration-500'
                }
                onClick={() => navigate(-1)}>
                <HiOutlineArrowLeft /> Back to shop
              </Button>
              <RemoveAllFromCart />
            </div>
          )}
        </div>
        <div
          className={
            'min-w-[200px] sm:w-full flex flex-col gap-3 lg:gap-1 sm:gap-0 mb-10'
          }>
          <CouponField />
          <CheckoutForm
            countItems={4}
            discount={3}
            subtotal={444}
            tax={31}
            total={412}
          />
        </div>
      </div>
      {isDesktop && (
        <div className={'mb-8 lg:mb-6 md:mb-4'}>
          <FeaturesShop />
        </div>
      )}
      <div className={'mb-5'}>
        <SavedProducts />
      </div>
      <div className={'mb-10'}>
        <DiscountBanner />
      </div>
    </>
  );
};
