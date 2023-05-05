import { useState } from 'react';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

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
  {
    id: 4,
    img: 'https://images.pexels.com/photos/827209/pexels-photo-827209.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: 5,
    img: 'https://img.freepik.com/free-photo/landscape-of-morning-fog-and-mountains-with-hot-air-balloons-at-sunrise_335224-794.jpg',
  },
];

export const SliderPhotos = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>();

  return (
    <div className={'max-w-[400px] md:max-w-[600px] w-full md:mx-auto'}>
      <Swiper
        loop
        spaceBetween={10}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Thumbs]}
        className={'h-4/5 w-full'}>
        {sliderItems.map(slide => (
          <SwiperSlide className={'w-full h-full'} key={slide.id}>
            <img
              className={'w-full h-full object-cover'}
              src={slide.img}
              alt={'slider product'}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={swiper => {
          setThumbsSwiper(swiper);
        }}
        spaceBetween={10}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
        className={'mt-2  swiper-active-slide'}>
        {sliderItems.map(slide => (
          <SwiperSlide className={'opacity-60'} key={slide.id}>
            <img
              className={'h-full object-cover '}
              src={slide.img}
              alt={'thumb'}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
