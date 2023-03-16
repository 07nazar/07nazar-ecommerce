import { FC } from 'react';

import { ProductRecommended } from 'widgets/ProductCard';

import { products } from '../../model/data';

export const RecommendedItems: FC = () => (
  <div className={'mb-8'}>
    <h3 className={'title mb-6'}>Recommended items</h3>
    <div className={'grid grid-cols-5 gap-5'}>
      {products.map(product => (
        <ProductRecommended
          id={product.id}
          key={product.name}
          name={product.name}
          price={product.price}
          mainPhoto={product.mainPhoto}
        />
      ))}
    </div>
  </div>
);
