import { FC } from 'react';

import { useMatchMedia } from 'shared/lib';
import { Breadcrumbs } from 'shared/ui/Breadcrumbs';
import { DiscountBanner } from 'shared/ui/DiscountBanner';

import { productFromServer, sellerFromServer } from '../model';

import { AsideLikeItems } from './AsideLikeItems';
import { ProductContent } from './ProductContent';
import { ProductHero } from './ProductHero';
import { SellerCard } from './ProductHero/SellerCard';
import { RelatedItems } from './RelatedItems';

export const Product: FC = () => {
  const { isDesktop, isLaptop } = useMatchMedia();
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
        <ProductContent product={productFromServer} seller={sellerFromServer} />
        <AsideLikeItems />
      </div>

      <RelatedItems />

      <div className={'mb-16'}>
        <DiscountBanner />
      </div>
    </>
  );
};
