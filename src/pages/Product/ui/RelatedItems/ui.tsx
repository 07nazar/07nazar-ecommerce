import { FC } from 'react';

import { ProductRelated } from 'widgets/ProductCard';

import { productsRelated } from '../../model';

export const RelatedItems: FC = () => (
  <div className={'bg-white border border-gray-medium rounded-md p-5 mb-5'}>
    <h3 className={'mb-4 text-black text-xl font-semibold'}>
      Related products
    </h3>
    <div className={'flex gap-5'}>
      {productsRelated.map(relate => (
        <ProductRelated
          key={relate.name}
          id={relate.id}
          name={relate.name}
          mainPhoto={relate.mainPhoto}
          price={relate.price}
        />
      ))}
    </div>
  </div>
);
