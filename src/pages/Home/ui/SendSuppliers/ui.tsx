import { FC } from 'react';

import { RequestsForm } from 'widgets/RequestsForm';

import formBg from '../../assets/formBg.jpg';

export const SendSuppliers: FC = () => (
  <div
    style={{
      backgroundImage: `url("${formBg}")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
    className={'w-full flex justify-between p-10 my-5'}>
    <div className={'flex flex-col  gap-3 '}>
      <h2 className={'text-4xl text-white font-medium'}>
        An easy way to send <br /> requests to all suppliers
      </h2>
      <p className={'text-base text-white'}>
        Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit, sed do
        eiusmod tempor incididunt.
      </p>
    </div>
    <RequestsForm />
  </div>
);
