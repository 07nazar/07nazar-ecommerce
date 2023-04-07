import { Children, FC, ReactNode, useState } from 'react';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';

interface SliderDesktopProps {
  children: ReactNode;
}

export const SliderDesktop: FC<SliderDesktopProps> = ({ children }) => {
  const [swiperRef, setSwiperRef] = useState<any>(null);

  const slideTo = (index: number) => {
    swiperRef.slideTo(index);
  };

  return (
    <div className={'max-w-[380px] flex flex-col gap-2 '}>
      <Swiper
        modules={[FreeMode]}
        freeMode
        onSwiper={setSwiperRef}
        slidesPerView={'auto'}
        spaceBetween={7}
        className={'w-full overflow-hidden '}>
        {Children.map(children, (child, i) => (
          <SwiperSlide className={'slide-w-full'} key={i}>
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={'w-full flex'}>
        {Children.map(children, (child, i) => (
          <button
            key={i}
            className={'max-w-[56px] w-full object-cover mx-auto '}
            onClick={() => slideTo(i)}>
            {child}
          </button>
        ))}
      </div>
    </div>
  );
};
