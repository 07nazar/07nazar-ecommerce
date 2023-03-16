import { FC } from 'react';

import { Button } from 'shared/ui/Button';
import { Input, InputGroup } from 'shared/ui/Input';

export const CouponField: FC = () => (
  <div className={'base-border-gray'}>
    <h6 className={'text-gray-dark leading-5 mb-2.5'}>Have a coupon?</h6>
    <InputGroup>
      <Input
        className={'h-full border border-gray-medium border-r-0'}
        placeholder={'Add coupon'}
      />
      <Button className={'text-blue bg-light rounded-none'}>Apply</Button>
    </InputGroup>
  </div>
);
