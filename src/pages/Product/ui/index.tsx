import { Breadcrumbs } from 'shared/ui/Breadcrumbs'

import { ProductCard } from 'entities/ProductCard';
import { DiscountBanner } from 'shared/ui/DiscountBanner';

import { ProductInfo } from './ProductInfo'
import { SellerCard } from './SellerCard'
import { Slider } from './Slider'
import { ProductContent } from './ProductContent';

import {
    productFromServer,
    productsLikes,
    productsRelated,
    sellerFromServer,
} from '../model';

const seller = {
    name: 'Supplier',
    supplierCompany: 'Guanjoi Trading LLC',
    image: '',
    country: 'Germany',
    city: 'Berlin',
    isVerified: true,
    isWorldwideShipping: true,
}

export const Product = () => (
    <>
        <Breadcrumbs />
        <div className="flex justify-between gap-5 bg-white border border-gray-medium rounded-md pt-4 pl-3 pr-7 pb-8">
            <Slider />
            <ProductInfo data={productFromServer} />
            <SellerCard seller={seller} />
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
        <DiscountBanner />
    </>
)
