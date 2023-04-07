import { Children, FC, ReactNode } from 'react';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

interface SliderProps {
  children: ReactNode;
  slideClassNames?: string;
}

export const MobileSlider: FC<SliderProps> = ({
  children,
  slideClassNames = '',
}) => (
  <Swiper
    modules={[FreeMode]}
    slidesPerView={'auto'}
    spaceBetween={7}
    freeMode
    className={'w-full h-full overflow-hidden'}>
    {Children.map(children, (child, i) => (
      <SwiperSlide className={`${slideClassNames}`} key={i}>
        {child}
      </SwiperSlide>
    ))}
  </Swiper>
);
