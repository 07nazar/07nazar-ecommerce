import { FC } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';

import { productTypes } from 'entities/Product';

interface ProductDescriptionProps {
  description: string;
  advantages: string[];
  params: productTypes.ProductParams[];
}

export const Description: FC<ProductDescriptionProps> = ({
  description,
  advantages,
  params,
}) => (
  <>
    <p className={'mb-5 text-gray-dark'}>{description}</p>
    <div
      className={
        'max-w-[567px] border border-collapse border-gray-medium text-gray-dark'
      }>
      {params.map(spec => (
        <div
          key={spec.name}
          className={
            'border-b last:border-b-0 border-gray-medium grid grid-cols-2'
          }>
          <p className={'bg-gray-pale border-r border-gray-medium pl-2.5 py-1'}>
            {spec.name}
          </p>
          <p className={'pl-2.5 py-1'}>{spec.value}</p>
        </div>
      ))}
    </div>
    <div className={'mt-6  flex flex-col gap-2.5 text-gray-dark'}>
      {advantages.map(advantage => (
        <p key={advantage} className={'flex items-center'}>
          <AiOutlineCheck className={'text-gray-hot mr-2.5'} /> {advantage}
        </p>
      ))}
    </div>
  </>
);
