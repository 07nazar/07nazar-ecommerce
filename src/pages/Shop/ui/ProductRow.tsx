import { FC } from 'react'

import { ProductCard } from 'entities/ProductCard'

import img from '../assets/phone.png'

interface IContent {
  rating: {
    rating: number
    orders: number
    freeShip: boolean
  }
  description: string
}

const Content: FC<IContent> = ({ description, rating }) => (
  <>
    <div className="flex items-center gap-2">
      <p>{rating.rating}</p>
      <p>{rating.orders} orders</p>
      {rating.freeShip && <p> Free Shipping</p>}
    </div>
    <p className="text-base text-gray-dark pr-20">{description}</p>
    <a href="/" className="text-blue">
      View details
    </a>
  </>
)

export const ProductRow = () => (
  <>
    <ProductCard
      image={img}
      price={{ current: 100 }}
      className={{
        image: 'w-[184px] max-h-[184px] h-full object-cover',
        title: 'w-full font-medium text-black text-base',
        box: ' max-w-[920px] w-full flex gap-5 border border-gray-medium rounded-md p-5',
        price: 'font-semibold text-xl',
        content: 'flex flex-col pt-5 gap-2',
      }}
      title="Canon Cmera EOS 2000, Black 10x zoom">
      <Content
        description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit "
        rating={{ freeShip: true, orders: 152, rating: 7.6 }}
      />
    </ProductCard>
  </>
)
