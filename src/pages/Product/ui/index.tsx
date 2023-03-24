import { FC } from 'react';

import { Breadcrumbs } from 'shared/ui/Breadcrumbs';
import { DiscountBanner } from 'shared/ui/DiscountBanner';

import { productFromServer, sellerFromServer } from '../model';

import { AsideLikeItems } from './AsideLikeItems';
import { ProductContent } from './ProductContent';
import { ProductHero } from './ProductHero';
import { RelatedItems } from './RelatedItems';

export const Product: FC = () => (
  <>
    <Breadcrumbs />
    <ProductHero />
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
