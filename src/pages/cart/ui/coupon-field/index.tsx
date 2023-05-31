import { FC } from 'react';

import { ApplyCoupon } from 'features/cart/apply-coupon';
import { Input, InputGroup } from 'shared/ui/input';

export const CouponField: FC = () => (
  <div className={'base-border-gray sm:border-none sm:flex sm:flex-col'}>
    <h6 className={'text-gray-dark leading-5 mb-2.5 sm:text-center'}>
      Have a coupon?
    </h6>
    <InputGroup>
      <Input
        className={'h-full border border-gray-medium border-r-0'}
        placeholder={'Add coupon'}
      />
      <ApplyCoupon />
    </InputGroup>
  </div>
);
