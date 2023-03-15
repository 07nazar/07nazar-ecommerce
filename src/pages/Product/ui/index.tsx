import { FC } from 'react';

import { ProductLiked, ProductRelated } from 'entities/ProductCard';
import { Breadcrumbs } from 'shared/ui/Breadcrumbs';
import { DiscountBanner } from 'shared/ui/DiscountBanner';

import {
  productFromServer,
  productsLikes,
  productsRelated,
  sellerFromServer,
} from '../model';

import { ProductContent } from './ProductContent';
import { ProductInfo, SellerCard, Slider } from './ProductHero';

const AsideLikeItems: FC = () => (
  <div
    className={
      'h-auto max-w-[280px] w-full bg-white border border-gray-medium rounded-md px-4 py-5'
    }>
    <h3 className={'mb-3 text-black font-semibold leading-5'}>You may like</h3>
    <div className={'flex flex-col gap-4'}>
      {productsLikes.map(liked => (
        <ProductLiked
          key={liked.name}
          name={liked.name}
          mainPhoto={liked.mainPhoto}
          price={liked.price}
        />
      ))}
    </div>
  </div>
);

const RelatedItems: FC = () => (
  <div className={'bg-white border border-gray-medium rounded-md p-5 mb-5'}>
    <h3 className={'mb-4 text-black text-xl font-semibold'}>
      Related products
    </h3>
    <div className={'flex gap-5'}>
      {productsRelated.map(relate => (
        <ProductRelated
          key={relate.name}
          name={relate.name}
          mainPhoto={relate.mainPhoto}
          price={relate.price}
        />
      ))}
    </div>
  </div>
);

export const Product = () => (
  <>
    <Breadcrumbs />
    <div
      className={
        'mb-5 flex justify-between gap-5 bg-white border border-gray-medium rounded-md pt-4 pl-3 pr-7 pb-8'
      }>
      <Slider />
      <ProductInfo
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
        isWorldwideShipping={sellerFromServer.isWorldwideShipping}
      />
    </div>
    <div className={'flex items-start gap-5 mb-5'}>
      <ProductContent product={productFromServer} seller={sellerFromServer} />
      <AsideLikeItems />
    </div>

    <RelatedItems />
    <div className={'mb-16'}>
      <DiscountBanner />
    </div>
  </>
);
