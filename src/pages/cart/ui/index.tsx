import { FC } from 'react';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

import { ProductCart } from 'widgets/product-card';
import { RemoveAllFromCart } from 'features/cart/remove-all-products';
import { useMatchMedia } from 'shared/lib';
import { Button } from 'shared/ui/button';
import { DiscountBanner } from 'shared/ui/discount-banner';

import { CheckoutForm } from './checkout-form';
import { CouponField } from './coupon-field';
import { FeaturesShop } from './features-shop';
import { SavedProducts } from './saved-products';

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
          'my-6 lg:my-5 md:my-4 font-semibold text-2xl md:text-xl text-black sm:ml-6'
        }>
        {isMobile && <span>Shopping cart</span>}
        {!isMobile && <span>My cart ({fromRedux.totalQuantity})</span>}
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
            'min-w-[200px] sm:w-full flex flex-col gap-3 lg:gap-1 sm:gap-0 mb-10 md:mb-5'
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
