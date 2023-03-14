import { FC } from 'react';

import { ProductCol } from './ProductCol';
import { ProductRow } from './ProductRow';
import { Sidebar } from './Sidebar';

export const Shop: FC = () => {
  const productRow = true;

  return (
    <div className={'flex gap-4'}>
      <div className={'max-w-[240px] w-full'}>
        <Sidebar />
      </div>
      <div className={'max-w-[926px] w-full grid grid-cols-3 gap-5 bg-white'}>
        {!productRow ? <ProductRow /> : <ProductCol />}
      </div>
    </div>
  );
};

/*
      <div className="grid grid-cols-1 gap-2.5 max-w[920px] w-full">

      </div>
 */
