import { Children, FC, ReactNode } from 'react';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useMatchMedia } from 'shared/lib';

interface SliderProps {
  children: ReactNode;
}

export const MobileSlider: FC<SliderProps> = ({ children }) => {
  const { isMobile } = useMatchMedia();

  if (!isMobile) return <>{children}</>;

  return (
    <Swiper
      modules={[FreeMode]}
      slidesPerView={'auto'}
      spaceBetween={7}
      freeMode
      className={'w-full overflow-hidden'}>
      {Children.map(children, (child, i) => (
        <SwiperSlide className={'slide-w-auto'} key={i}>
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
