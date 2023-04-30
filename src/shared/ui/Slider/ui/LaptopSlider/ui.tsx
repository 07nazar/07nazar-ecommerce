import { Children, FC, ReactNode } from 'react';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { useMatchMedia } from '../../../../lib';

interface SliderProps {
  children: ReactNode;
  className?: string;
}

/**
 * Слайдер срабатывающий при разрешении 991px и меньше
 */
export const LaptopSlider: FC<SliderProps> = ({ children, className = '' }) => {
  const { isDesktop } = useMatchMedia();

  if (isDesktop) {
    return <div className={className}>{children}</div>;
  }

  return (
    <Swiper modules={[FreeMode]} slidesPerView={'auto'} freeMode>
      {Children.map(children, child => (
        <SwiperSlide className={'slide-w-auto'}>
          <div className={className}>{child}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
