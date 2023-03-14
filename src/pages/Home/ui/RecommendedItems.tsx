import { FC } from 'react';

import { ProductCard } from 'entities/ProductCard';

import { products } from '../model/data';

export const RecommendedItems: FC = () => (
  <div className={'mb-8'}>
    <h3 className={'title mb-6'}>Recommended items</h3>
    <div className={'grid grid-cols-5 gap-5'}>
      {products.map(product => (
        <ProductCard
          product={product}
          key={product.name}
          className={{
            box: 'border border-gray-medium rounded-md',
            image: 'max-h-[200px]',
            content: 'flex flex-col-reverse p-4',
            price: 'text-black font-medium mb-1',
            title: 'text-gray-hot',
          }}
        />
      ))}
    </div>
  </div>
);
