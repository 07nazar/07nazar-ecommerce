import { FC } from 'react';

import { ProductRecommended } from 'widgets/ProductCard';
import { useMatchMedia } from 'shared/lib';

import { products } from '../../model/data';

export const RecommendedItems: FC = () => {
  const { isTablet } = useMatchMedia();

  const maxProductsCount = isTablet ? 6 : 10;
  const productsToShow = products.slice(0, maxProductsCount);

  return (
    <div className={'mb-8'}>
      <h3 className={'title mb-6 md:mb-4 sm:mb-2.5'}>Recommended items</h3>
      <div
        className={
          'grid grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5 lg:gap-2 sm:mx-2.5'
        }>
        {productsToShow.map(product => (
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
};
