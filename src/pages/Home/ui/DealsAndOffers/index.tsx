import { FC } from 'react';

import img from '../../assets/rasm.png';

import { DealsItem, IDealsItem } from './DealsItem';
import { Timer } from './Timer';

const dealsItems: IDealsItem[] = [
  { id: 1, image: img, promo: '-25%', title: 'Smart watches' },
  { id: 2, image: img, promo: '-25%', title: 'Smart watches' },
  { id: 3, image: img, promo: '-25%', title: 'Smart watches' },
  { id: 4, image: img, promo: '-25%', title: 'Smart watches' },
  { id: 5, image: img, promo: '-25%', title: 'Smart watches' },
];

export const DealsAndOffers: FC = () => (
  <div
    className={
      'flex justify-start bg-white border-b border-x border-gray-medium rounded-md'
    }>
    <div
      className={
        'flex flex-col pt-4 pl-5 pr-16 border-t rounded-tl-md  border-gray-medium'
      }>
      <h4 className={'text-xl font-semibold leading-7'}>Deals and offers</h4>
      <p className={'text-base mb-4 text-gray-hot leading-5'}>
        Hygiene equipments
      </p>
      <Timer deadline={'2023-4-28'} />
    </div>
    <div className={'flex items-center'}>
      {dealsItems.map(({ id, image, promo, title }) => (
        <DealsItem key={id} image={image} id={id} promo={promo} title={title} />
      ))}
    </div>
  </div>
);
