import { FC } from 'react';
import { HiOutlineArrowLeft } from 'react-icons/hi';

import { ProductCart } from 'widgets/ProductCard';
import { RemoveAllFromCart } from 'features/RemoveAllFromCart';
import { Button } from 'shared/ui/Button';
import { DiscountBanner } from 'shared/ui/DiscountBanner';

import { CheckoutForm } from './CheckoutForm';
import { CouponField } from './CouponField';
import { FeaturesShop } from './FeaturesShop';
import { SavedProducts } from './SavedProducts';

export const Cart: FC = () => (
  <>
    <h3 className={'my-6 font-semibold text-2xl text-black'}>My cart (3)</h3>
    <div className={'flex gap-5 my-5 justify-between'}>
      <div
        className={
          'max-w-[880px] w-full flex flex-col shrink-0 gap-5 mb-5 p-5 border rounded-md border-gray-medium bg-white '
        }>
        <ProductCart />

        <div className={'flex w-full justify-between'}>
          <Button
            className={
              'border rounded-md border-blue bg-blue text-white flex items-center gap-4 hover:bg-white hover:text-blue transition-all duration-500'
            }>
            <HiOutlineArrowLeft /> Back to shop
          </Button>

          <RemoveAllFromCart />
        </div>
      </div>
      <div>
        <CouponField />
        <CheckoutForm discount={3} subtotal={444} tax={31} total={412} />
      </div>
    </div>
    <div className={'mb-8'}>
      <FeaturesShop />
    </div>
    <div className={'mb-5'}>
      <SavedProducts />
    </div>
    <div className={'mb-10'}>
      <DiscountBanner />
    </div>
  </>
);
