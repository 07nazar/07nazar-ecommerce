import { Children, FC, ReactNode } from 'react';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useMatchMedia } from 'shared/lib';

interface SliderProps {
  children: ReactNode;
  className?: string;
}

/**
 * Слайдер срабатывающий при разрешении 991px и меньше
 */
export const LaptopSlider: FC<SliderProps> = ({ children, className = '' }) => {
  const { isDesktop } = useMatchMedia();

  if (isDesktop) return <>{children}</>;

  return (
    <Swiper
      modules={[FreeMode]}
      slidesPerView={'auto'}
      freeMode
      className={className}>
      {Children.map(children, child => (
        <SwiperSlide className={'slide-w-auto'}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};
