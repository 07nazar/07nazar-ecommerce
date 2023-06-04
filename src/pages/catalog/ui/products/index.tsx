import { FC } from 'react';

import { ProductCol, ProductRow } from 'widgets/product-card';
import { productApi } from 'entities/product';

type ProductsProps = {
  showMode: 'row' | 'column';
};

export const Products: FC<ProductsProps> = ({ showMode }) => {
  const products = productApi.productsRowFromServer;
  // get products from server

  // if (!products) {
  //     return <Loader />
  // }

  const pr = { isVerified: false };

  return (
    <div
      className={`mb-8 grid md:mb-4 ${
        showMode === 'column'
          ? 'grid-cols-3 gap-5 lg:gap-2 md:grid-cols-2 md:justify-items-center'
          : 'gap-2.5 md:gap-1.5'
      } sm:mx-2.5`}>
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
