import { productFromServer, sellerFromServer } from '../../model';

import { ProductInfo } from './ProductInfo';
import { SellerCard } from './SellerCard';
import { Slider } from './Slider';

export const ProductHero = () => (
  <div
    className={
      'mb-5 flex justify-between gap-5 bg-white border border-gray-medium rounded-md pt-4 pl-3 pr-7 pb-8'
    }>
    <Slider />
    <ProductInfo
      id={productFromServer.id}
      name={productFromServer.name}
      rating={productFromServer.rating}
      sold={productFromServer.sold}
      params={productFromServer.params}
      quantity={productFromServer.quantity}
      reviewsCount={productFromServer.reviewsCount}
    />
    <SellerCard
      name={sellerFromServer.name}
      supplierCompany={sellerFromServer.supplierCompany}
      address={sellerFromServer.address}
      photo={sellerFromServer.photo}
      isVerified={sellerFromServer.isVerified}
      isWorldwideShipped={sellerFromServer.isWorldwideShipped}
    />
  </div>
);
