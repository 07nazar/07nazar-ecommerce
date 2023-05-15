import { FC } from 'react';

import payment1 from 'assets/payment-1.png';
import payment2 from 'assets/payment-2.png';
import payment3 from 'assets/payment-3.png';
import payment4 from 'assets/payment-4.png';
import payment from 'assets/payment.png';
import { cartTypes } from 'entities/cart';
import { useMatchMedia } from 'shared/lib';
import { Button } from 'shared/ui/button';

type CheckoutProps = Pick<
  cartTypes.Cart,
  'subtotal' | 'discount' | 'tax' | 'total'
> & {
  countItems: number;
};

export const CheckoutForm: FC<CheckoutProps> = ({
  subtotal,
  discount,
  tax,
  total,
  countItems,
}) => {
  const { isMobile } = useMatchMedia();

  return (
    <div className={'base-border-gray sm:border-y sm:rounded-none'}>
      <div className={'flex flex-col gap-1 text-gray-dark px-1 mb-4 md:mb-2'}>
        <p className={'flex justify-between'}>
          Subtotal{' '}
          <span className={'sm:font-medium'}>${subtotal.toFixed(2)}</span>
        </p>
        <p className={'flex justify-between'}>
          Discount
          <span className={'text-red sm:font-medium sm:text-black'}>
            {isMobile ? '$' : '- '}
            {discount.toFixed(2)}
          </span>
        </p>
        <p className={'flex justify-between'}>
          Tax
          <span className={'text-green sm:font-medium sm:text-black'}>
            {isMobile ? '$' : '+ '}
            {tax.toFixed(2)}
          </span>
        </p>
      </div>
      <p
        className={
          'text-black font-semibold pt-2.5 sm:pt-0 border-t sm:border-none border-gray-medium px-1 flex justify-between mb-5'
        }>
        Total <span className={'text-xl'}>${total.toFixed(2)}</span>
      </p>

      <Button
        className={
          'mb-4 sm:mb-0 bg-green hover:brightness-125 w-full justify-center'
        }
        size={isMobile ? 'md' : 'lg'}>
        Checkout
        {isMobile && <span className={'ml-1'}>({countItems} items)</span>}
      </Button>

      {!isMobile && (
        <div className={'flex gap-2 justify-center'}>
          <img src={payment} alt={'payment method'} />
          <img src={payment1} alt={'payment method'} />
          <img src={payment2} alt={'payment method'} />
          <img src={payment3} alt={'payment method'} />
          <img src={payment4} alt={'payment method'} />
        </div>
      )}
    </div>
  );
};
