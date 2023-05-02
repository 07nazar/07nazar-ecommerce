import { Children, FC, ReactNode } from 'react';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useMatchMedia } from '../../lib';

type SliderProps = {
  children: ReactNode;
  spaceBetween?: number;
  activateOn: 'isMobile' | 'isLaptop';
  className?: string;
};

export const Slider: FC<SliderProps> = ({
  children,
  className = '',
  spaceBetween = 0,
  activateOn,
}) => {
  const { isMobile, isDesktop } = useMatchMedia();

  const activateMap = {
    isLaptop: !isDesktop,
    isMobile,
  };

  const isSlider = activateMap[activateOn] ?? false;

  if (!isSlider) {
    return <div className={className}>{children}</div>;
  }

  return (
    <Swiper
      modules={[FreeMode]}
      slidesPerView={'auto'}
      spaceBetween={spaceBetween}
      freeMode
      className={'w-full overflow-hidden'}>
      {Children.map(children, child => (
        <SwiperSlide className={'slide-w-auto'}>
          <div className={className}>{child}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
