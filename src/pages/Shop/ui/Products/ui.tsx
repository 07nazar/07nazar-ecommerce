import { FC } from 'react';

import { ProductCol, ProductRow } from 'widgets/ProductCard';

import { productsFromServer } from '../../model';

type ProductsProps = {
  showMode: 'row' | 'column';
};

export const Products: FC<ProductsProps> = ({ showMode }) => {
  const products = productsFromServer;
  // get products from server

  // if (!products) {
  //     return <Loader />
  // }

  return (
    <div
      className={`mb-8 grid ${
        showMode === 'column' ? 'grid-cols-3 gap-5' : 'gap-2.5'
      }`}>
      {products.map(product => {
        if (showMode === 'row') {
          return (
            <ProductRow
              key={product.id}
              id={product.id}
              name={product.name}
              mainPhoto={product.mainPhoto}
              price={product.price}
              deliveryCost={product.deliveryCost}
              orders={product.orders}
              rating={product.rating}
            />
          );
        }

        return (
          <ProductCol
            key={product.id}
            id={product.id}
            name={product.name}
            mainPhoto={product.mainPhoto}
            price={product.price}
          />
        );
      })}
    </div>
  );
};
