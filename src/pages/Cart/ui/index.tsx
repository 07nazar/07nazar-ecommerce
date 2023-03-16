import { FC } from 'react';

import { DiscountBanner } from 'shared/ui/DiscountBanner';

import { CheckoutForm } from './CheckoutForm';
import { CouponField } from './CouponField';
import { FeaturesShop } from './FeaturesShop';
import { SavedProducts } from './SavedProducts';

export const Cart: FC = () => (
  <>
    <div className={'flex justify-between'}>
      <div>Products</div>
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
