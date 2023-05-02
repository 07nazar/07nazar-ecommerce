import { FC } from 'react';

import { useMatchMedia } from 'shared/lib';
import { Breadcrumbs } from 'shared/ui/breadcrumbs';
import { DiscountBanner } from 'shared/ui/discount-banner';
import { productApi } from 'entities/product';
import { userApi } from 'entities/user';

import { AsideLikeItems } from './aside-like-items';
import { ProductContent } from './product-content';
import { ProductHero, SellerCard } from './product-hero';
import { RelatedItems } from './related-items';

export const Product: FC = () => {
  const { isDesktop, isLaptop } = useMatchMedia();

  const { sellerFromServer } = userApi;
  return (
    <>
      <Breadcrumbs />
      <ProductHero />

      {!isDesktop && !isLaptop && (
        <div className={'mb-5'}>
          <SellerCard
            classNames={''}
            name={sellerFromServer.name}
            supplierCompany={sellerFromServer.supplierCompany}
            address={sellerFromServer.address}
            photo={sellerFromServer.photo}
            isVerified={sellerFromServer.isVerified}
            isWorldwideShipped={sellerFromServer.isWorldwideShipped}
          />
        </div>
      )}

      <div className={'flex items-start gap-5 mb-5 md:flex-col'}>
        <ProductContent
          product={productApi.productFromServer}
          seller={sellerFromServer}
        />
        <AsideLikeItems />
      </div>

      <RelatedItems />

      <div className={'mb-16'}>
        <DiscountBanner />
      </div>
    </>
  );
};
