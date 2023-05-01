import {FC} from 'react';

import {useMatchMedia} from 'shared/lib';
import {Breadcrumbs} from 'shared/ui/breadcrumbs';
import {DiscountBanner} from 'shared/ui/discount-banner';

import {productFromServer, sellerFromServer} from '../model';

import {AsideLikeItems} from './aside-like-items';
import {ProductContent} from './product-content';
import {RelatedItems} from './related-items';
import {SellerCard} from './seller-card';

export const Product: FC = () => {
  const { isDesktop, isLaptop } = useMatchMedia();
  return (
    <>
      <Breadcrumbs />
      <Product />

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
