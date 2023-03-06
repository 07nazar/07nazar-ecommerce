import { ProductCard } from 'entities/ProductCard'

import img from '../assets/phone.png'

export const ProductCol = () => (
  <>
    <ProductCard
      image={img}
      price={{ old: 1000, current: 2000 }}
      title="Canon Cmera EOS 2000, Black 10x zoom"
      className={{
        image: 'w-[230px]',
        title: 'max-w-[215px] w-full',
        box: 'inline-flex flex-col justify-center items-center border border-gray-medium rounded-md py-5',
        price: '',
        content: 'w-full flex flex-col-reverse border-t gap-2.5  border-gray-medium px-4 pt-4',
      }}
    />
  </>
)
