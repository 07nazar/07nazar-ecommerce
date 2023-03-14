import { ProductCard } from 'entities/ProductCard';
import { Breadcrumbs } from 'shared/ui/Breadcrumbs';
import { DiscountBanner } from 'shared/ui/DiscountBanner';

import {
  productFromServer,
  productsLikes,
  productsRelated,
  sellerFromServer,
} from '../model';

import { ProductContent } from './ProductContent';
import { ProductInfo } from './ProductInfo';
import { SellerCard } from './SellerCard';
import { Slider } from './Slider';

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
      <div
        className={
          'h-auto max-w-[280px] w-full bg-white border border-gray-medium rounded-md px-4 py-5'
        }>
        <h3 className={'mb-3 text-black font-semibold leading-5'}>
          You may like
        </h3>
        <div className={'flex flex-col gap-4'}>
          {productsLikes.map(liked => (
            <ProductCard
              key={liked.name}
              product={liked}
              className={{
                image:
                  'max-w-[80px] max-h-[80px] object-cover border border-gray-medium rounded-md',
                title: 'max-w-[151px] w-full text-black text-base',
                box: 'flex gap-2.5 max-w-[242px] w-full',
                price: 'text-base text-gray-hot',
                content: '',
              }}
            />
          ))}
        </div>
      </div>
    </div>

    <div className={'bg-white border border-gray-medium rounded-md p-5 mb-5'}>
      <h3 className={'mb-4 text-black text-xl font-semibold'}>
        Related products
      </h3>
      <div className={'flex gap-5'}>
        {productsRelated.map(relate => (
          <ProductCard
            key={relate.name}
            product={relate}
            className={{
              image: 'w-[172px] bg-gray-medium rounded-md mb-3.5',
              title: 'max-w-[142px] w-full text-gray-dark',
              box: 'inline-flex flex-col',
              price: 'text-gray-hot text-base',
              content: '',
            }}
          />
        ))}
      </div>
    </div>
    <div className={'mb-16'}>
      <DiscountBanner />
    </div>
  </>
);
