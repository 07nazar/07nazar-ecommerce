import { ProductCard } from 'entities/ProductCard'

import img from '../assets/phone.png'

export const Product = () => (
  <div>
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
