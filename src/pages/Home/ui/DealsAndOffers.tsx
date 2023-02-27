/* eslint-disable import/no-internal-modules */
import { FC } from 'react'
import { Link } from 'react-router-dom'

import img from 'shared/assets/dbPhotos/Home/image35.png'
import { Button } from 'shared/ui/Button'

import { Timer } from './Timer'

interface IDealsItem {
  id: number
  image: string
  title: string
  promo: string
}

const dealsItems: IDealsItem[] = [
  { id: 1, image: img, promo: '-25%', title: 'Smart watches' },
  { id: 2, image: img, promo: '-25%', title: 'Smart watches' },
  { id: 3, image: img, promo: '-25%', title: 'Smart watches' },
  { id: 4, image: img, promo: '-25%', title: 'Smart watches' },
  { id: 5, image: img, promo: '-25%', title: 'Smart watches' },
]

const DealsItem: FC<IDealsItem> = ({ image, promo, title }) => (
  <Link to={title}>
    <div className="flex flex-col items-center px-5 pt-2 pb-4 border-l border-gray-medium">
      <div className="w-[140px] h-[140px] flex  justify-center mb-3">
        <img src={image} alt={title} className="object-contain" />
      </div>
      <h5 className="mb-2">{title}</h5>
      <Button color="light-red" size="sm" textColor="red" className="leading-4">
        {promo}
      </Button>
    </div>
  </Link>
)

export const DealsAndOffers = () => (
  <div className="flex justify-start bg-white border-b border-x border-gray-medium rounded-md">
    <div className="flex flex-col pt-4 pl-5 pr-16 border-t rounded-tl-md  border-gray-medium">
      <h4 className="text-xl font-semibold leading-7">Deals and offers</h4>
      <p className="text-base mb-4.5 text-gray-hot leading-5">Hygiene equipments</p>
      <Timer deadline="2023-2-28" />
    </div>
    <div className="flex items-center">
      {dealsItems.map(({ id, image, promo, title }) => (
        <DealsItem key={id} image={image} id={id} promo={promo} title={title} />
      ))}
    </div>
  </div>
)
