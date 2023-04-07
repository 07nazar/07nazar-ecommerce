import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { useMatchMedia } from 'shared/lib/hooks/useMatchMedia';

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

export const DealsAndOffers: FC = () => {
  const { isDesktop } = useMatchMedia();

  return (
    <div
      className={
        'flex w-full justify-start bg-white border-b border-x border-gray-medium rounded-md md:flex-col'
      }>
      <div
        className={
          'flex flex-col pt-4 pl-5 pr-16 border-t rounded-tl-md border-gray-medium md:flex-row md:justify-between md:items-start xl:pr-5 sm:pt-2 sm:pl-2 sm:pr-8 sm:gap-1 '
        }>
        <div>
          <h4
            className={
              'text-xl font-semibold leading-7 lg:text-lg sm:text-sm sm:leading-4 sm:whitespace-nowrap '
            }>
            Deals and offers
          </h4>
          <p
            className={
              'text-base mb-4 text-gray-hot leading-5 sm:text-xs sm:whitespace-nowrap'
            }>
            Hygiene equipments
          </p>
        </div>
        <Timer deadline={'2023-4-28'} />
      </div>

      <div className={'flex w-full justify-around'}>
        {isDesktop ? (
          dealsItems.map(({ id, image, promo, title }) => (
            <DealsItem
              key={id}
              image={image}
              id={id}
              promo={promo}
              title={title}
            />
          ))
        ) : (
          <Swiper spaceBetween={0} slidesPerView={3}>
            {dealsItems.map(({ id, image, promo, title }) => (
              <SwiperSlide key={id}>
                <DealsItem image={image} id={id} promo={promo} title={title} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};
