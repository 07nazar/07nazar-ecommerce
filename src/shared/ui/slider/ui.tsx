import { Children, FC, ReactNode } from 'react';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useMatchMedia } from '../../lib';

type SliderProps = {
  children: ReactNode;
  spaceBetween?: number;
  activateOn: 'isMobile' | 'isTablet' | 'isLaptop' | 'isDesktop';
  className?: string;
};

/**
 * @param children - потомок который нужно обернуть в слайдер (чаще всего массив элементов)
 * @param className - класс для обёртки (если нету слайдера то div, иначе к Swiper)
 * @param spaceBetween - отступ для элементов при активном слайдере
 * @param activateOn - момент в который нужно включить слайдер
 *
 * @description
 * `activateOn` определяет, при каких размерах экрана должен включаться слайдер:
 * - `isMobile` &lt; 480px
 * - `isTablet` &lt; 768px
 * - `isLaptop` &lt; 991px
 * - `isDesktop` всегда вкл.
 */
export const Slider: FC<SliderProps> = ({
  children,
  className = '',
  spaceBetween = 0,
  activateOn,
}) => {
  const { isMobile, isDesktop, isTablet } = useMatchMedia();

  const activateMap = {
    isDesktop,
    isLaptop: !isDesktop,
    isTablet: isTablet || isMobile,
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
