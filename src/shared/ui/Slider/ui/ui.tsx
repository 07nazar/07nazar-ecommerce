import { FC, ReactNode, Children } from 'react';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useMatchMedia } from 'shared/lib';

import { SliderDesktop } from './SliderDesktop';

interface SliderProps {
  children: ReactNode;
  wrapperClassNames?: string;
  slideClassNames?: string;
}

export const Slider: FC<SliderProps> = ({
  children,
  slideClassNames,
  wrapperClassNames = '',
}) => {
  const { isDesktop } = useMatchMedia();

  return (
    <div className={`${wrapperClassNames}`}>
      {isDesktop ? (
        <SliderDesktop>{children}</SliderDesktop>
      ) : (
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
      )}
    </div>
  );
};
