import { useMatchMedia } from 'shared/lib';
import { productApi } from 'entities/product';
import { userApi } from 'entities/user';

import { ProductInfo } from './product-info';
import { SellerCard } from './seller-card';
import { SliderPhotos } from './slider-photos';

export const ProductHero = () => {
  const { isDesktop, isLaptop } = useMatchMedia();
  const { productFromServer } = productApi;
  const { sellerFromServer } = userApi;
  return (
    <div
      className={
        'mb-5 flex justify-between gap-5 bg-white border border-gray-medium rounded-md pt-4 pl-3 pr-3 pb-8 md:flex-col md:px-3 '
      }>
      <SliderPhotos />
      <div className={'w-full flex justify-between gap-3 lg:gap-0 lg:flex-col'}>
        <ProductInfo
          id={productFromServer.id}
          name={productFromServer.name}
          description={productFromServer.description}
          rating={productFromServer.rating}
          sold={productFromServer.sold}
          params={productFromServer.params}
          quantity={productFromServer.quantity}
          reviewsCount={productFromServer.reviewsCount}
        />

        {(isDesktop || isLaptop) && (
          <SellerCard
            classNames={''}
            name={sellerFromServer.name}
            supplierCompany={sellerFromServer.supplierCompany}
            address={sellerFromServer.address}
            photo={sellerFromServer.photo}
            isVerified={sellerFromServer.isVerified}
            isWorldwideShipped={sellerFromServer.isWorldwideShipped}
          />
        )}
      </div>
    </div>
  );
};
