import { useMatchMedia } from 'shared/lib';
import { Slider } from 'shared/ui/Slider/ui/ui';

import { productFromServer, sellerFromServer } from '../../model';

import { ProductInfo } from './ProductInfo';
import { SellerCard } from './SellerCard';

const sliderItems = [
  {
    id: 1,
    img: 'https://img.freepik.com/free-photo/wide-angle-shot-of-a-single-tree-growing-under-a-clouded-sky-during-a-sunset-surrounded-by-grass_181624-22807.jpg',
  },
  {
    id: 2,
    img: 'https://images.pexels.com/photos/827209/pexels-photo-827209.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: 3,
    img: 'https://img.freepik.com/free-photo/landscape-of-morning-fog-and-mountains-with-hot-air-balloons-at-sunrise_335224-794.jpg',
  },
];

export const ProductHero = () => {
  const { isDesktop, isLaptop } = useMatchMedia();
  return (
    <div
      className={
        'mb-5 flex justify-between gap-5 bg-white border border-gray-medium rounded-md pt-4 pl-3 pr-3 pb-8 md:flex-col md:px-3 '
      }>
      <Slider
        slideClassNames={'slide-center'}
        wrapperClassNames={
          'max-w-[380px] min-w-[200px] w-full lg:mx-auto lg:max-w-none md:px-10 sm:px-0 grow'
        }>
        {sliderItems.map(slide => (
          <div className={'w-full h-full'} key={slide.id}>
            <img
              className={'w-full h-full object-cover '}
              src={slide.img}
              alt={''}
            />
          </div>
        ))}
      </Slider>
      <div className={'w-full flex justify-between gap-3 lg:gap-0 lg:flex-col'}>
        <ProductInfo
          name={productFromServer.name}
          description={productFromServer.description}
          rating={productFromServer.rating}
          sold={productFromServer.sold}
          params={productFromServer.params}
          quantity={productFromServer.quantity}
          reviewsCount={productFromServer.reviewsCount}
        />

        {(isDesktop || isLaptop) && (
          <SellerCard
            classNames={''}
            name={sellerFromServer.name}
            supplierCompany={sellerFromServer.supplierCompany}
            address={sellerFromServer.address}
            photo={sellerFromServer.photo}
            isVerified={sellerFromServer.isVerified}
            isWorldwideShipped={sellerFromServer.isWorldwideShipped}
          />
        )}
      </div>
    </div>
  );
};
