import { FC } from 'react';

import { CartType } from 'entities/Cart';
import { Button } from 'shared/ui/Button';

import payment1 from '../../assets/payment-1.png';
import payment2 from '../../assets/payment-2.png';
import payment3 from '../../assets/payment-3.png';
import payment4 from '../../assets/payment-4.png';
import payment from '../../assets/payment.png';

type CheckoutProps = Pick<CartType, 'subtotal' | 'discount' | 'tax' | 'total'>;

export const CheckoutForm: FC<CheckoutProps> = ({
  subtotal,
  discount,
  tax,
  total,
}) => (
  <div className={'base-border-gray'}>
    <div className={'flex flex-col gap-1 text-gray-dark px-1 mb-4'}>
      <p className={' flex justify-between  '}>
        Subtotal <span>${subtotal.toFixed(2)}</span>
      </p>
      <p className={' flex justify-between'}>
        Discount <span className={'text-red'}>- ${discount.toFixed(2)}</span>
      </p>
      <p className={' flex justify-between '}>
        Tax <span className={'text-green'}>+ ${tax.toFixed(2)}</span>
      </p>
    </div>
    <p
      className={
        'text-black font-semibold pt-2.5 border-t border-gray-medium px-1 flex justify-between mb-5'
      }>
      Total <span className={'text-xl'}>${total.toFixed(2)}</span>
    </p>

    <Button
      className={
        'mb-4 bg-green hover:brightness-125 duration-300 w-full justify-center'
      }
      size={'lg'}>
      Checkout
    </Button>

    <div className={'flex gap-2 justify-center'}>
      <img src={payment} alt={'payment method'} />
      <img src={payment1} alt={'payment method'} />
      <img src={payment2} alt={'payment method'} />
      <img src={payment3} alt={'payment method'} />
      <img src={payment4} alt={'payment method'} />
    </div>
  </div>
);
