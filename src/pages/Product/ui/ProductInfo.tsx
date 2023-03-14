import { FC } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { FcCheckmark } from 'react-icons/fc'
import { IoBagCheckOutline } from 'react-icons/io5'
import { MdOutlineMessage } from 'react-icons/md'

import { colors } from 'shared/lib'
import { Button } from 'shared/ui/Button'

interface IProductInfo {
  quantity: number
  name: string
  rating: number
  reviews: number
  sold: number
  params: any
}

interface IProductInfoProps {
  data: IProductInfo
}

interface IRatingProps {
  rating: number
  reviews: number
  sold: number
}
interface IParamsProps {
  params: string[][]
}

const Rating: FC<IRatingProps> = ({ rating, reviews, sold }) => {
  const ratingIcons = Array(5)
    .fill(0)
    .map((star, index) => (
      <AiFillStar key={index} color={index < rating ? colors.orange : colors.gray.medium} />
    ))
  return (
    <div className="flex items-center gap-5 mb-5">
      <div className="flex items-center gap-2">
        <div className="flex items-center">{ratingIcons}</div>
        <span className="text-orange">{rating}</span>
      </div>
      <div className="flex items-center gap-2">
        <MdOutlineMessage size={16} color={colors.gray.dark} />
        <span className="text-gray-dark">{reviews} reviews</span>
      </div>
      <div className="flex items-center gap-2">
        <IoBagCheckOutline size={18} color={colors.gray.dark} />
        <span className="text-gray-dark">{sold} sold</span>
      </div>
    </div>
  )
}

const Params: FC<IParamsProps> = ({ params }) => (
  <div className="flex flex-col">
    <div className="flex items-center pb-4 border-b border-b-gray-medium mb-4">
      <p className="text-gray-hot self-start max-w-[150px] w-full">{params[0][0]}</p>
      <p className="self-center">{params[0][1]}</p>
    </div>
    {params.map(([k, value]: string[], index: number) => {
      if (index === 0) return null
      return (
        <div
          className={`flex items-center pb-4${
            index % 3 === 0 ? ' border-b border-b-gray-medium mb-4' : ''
          }  `}
          key={k}>
          <p className="text-gray-hot self-start max-w-[150px] w-full">{k}</p>
          <p className="self-center max-w-[200px] w-full ">{value}</p>
        </div>
      )
    })}
  </div>
)

export const ProductInfo: FC<IProductInfoProps> = ({
  data: { quantity, params, rating, reviews, sold, name },
}) => (
  <div className="flex flex-col">
    <div className="flex items-start gap-2">
      <FcCheckmark size={22} />
      <p className="text-green mb-1">{quantity ? 'In stock' : 'Not available'}</p>
    </div>
    <h3 className="text-2xl mb-2.5 text-black font-semibold">{name}</h3>

    <Rating rating={rating} reviews={reviews} sold={sold} />

    <div className="flex items-center gap-9 mb-11">
      <Button>Save for later</Button>
      <Button>Move to cart</Button>
    </div>

    <Params params={params} />
  </div>
)
