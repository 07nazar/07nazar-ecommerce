import { Breadcrumbs } from 'shared/ui/Breadcrumbs'

import { ProductCard } from 'entities/ProductCard'

import img from '../assets/phone.png'
import sellerImg from '../assets/sellerImg.png'

import { ProductInfo } from './ProductInfo'
import { SellerCard } from './SellerCard'
import { Slider } from './Slider'

const product = {
  name: 'name',
  mainPhoto: {
    url: 'String',
    thumbUrl: 'String',
  },
  additionalPhotos: [
    {
      url: '',
    },
    {
      url: '',
    },
  ],
  price: {
    current: 2,

    old: 3,
  },
  rating: 4,
  description: 'descr',
  advantages: ['str', 'str2'],
  specifications: [{ name: '', value: '' }],
  reviews: [{}, {}],
  options: [
    { color: 'Red', memory: '64 GB', price: 52, count: 100 },
    { color: 'Red', memory: '128 GB', price: 33, count: 100 },
    { color: 'Red', memory: '256 GB', price: 4, count: 0 },
    { color: 'Green', memory: '64 GB', price: 3, count: 100 },
    { color: 'Green', memory: '128 GB', price: 4, count: 100 },
    { color: 'Green', memory: '256 GB', price: 5, count: 100 },
    { color: 'Blue', memory: '64 GB', price: 4, count: 100 },
    { color: 'Blue', memory: '128 GB', price: 5, count: 0 },
    { color: 'Blue', memory: '256 GB', price: 6, count: 100 },
  ],
}

const seller = {
  name: 'Supplier',
  supplierCompany: 'Guanjoi Trading LLC',
  image: sellerImg,
  country: 'Germany',
  city: 'Berlin',
  isVerified: true,
  isWorldwideShipping: true,
}

const productData = {
  quantity: 123123,
  params: [
    ['Price:', 'Negotiable'],
    ['Type:', 'Classic  shoes'],
    ['Material:', 'Plastic material'],
    ['Design:', 'Modern nice'],
    ['Customization:', 'Customized logo and design custom packages'],
    ['Protection:', 'Refund Policy'],
    ['Warranty:', '2 years full warranty '],
  ],
  rating: 4,
  reviews: 21,
  sold: 154,
  name: 'Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle',
}

export const Product = () => (
  <div className="py-5">
    <Breadcrumbs />
    <div className="flex justify-between gap-5 bg-white border border-gray-medium rounded-md pt-4 pl-3 pr-7 pb-8">
      <Slider />
      <ProductInfo data={productData} />
      <SellerCard seller={seller} />
    </div>

    <div className="grid grid-cols-6  gap-5 max-w[1180px] w-full bg-white mt-5 p-5">
      <ProductCard
        image={img}
        price={{ current: 32 }}
        title="Xiaomi Redmi 8 Original "
        className={{
          image: 'w-[172px] bg-gray-medium rounded-md mb-3.5',
          title: 'max-w-[142px] w-full text-gray-dark',
          box: 'inline-flex flex-col',
          price: 'text-gray-hot text-base',
          content: '',
        }}
      />
    </div>
    <div className="grid grid-cols-1 max-w[242px] gap-4 pl-4 pr-5 w-full bg-white">
      <ProductCard
        image={img}
        price={{ current: 32 }}
        title="Xiaomi Redmi 8 Original "
        className={{
          image: 'w-[80px] border border-gray-medium rounded-md',
          title: 'max-w-[151px] w-full text-black text-base',
          box: 'flex gap-2.5',
          price: 'text-base text-gray-hot',
          content: '',
        }}
      />
    </div>
  </div>
)
