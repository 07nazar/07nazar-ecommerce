import { FC, ReactNode } from 'react';

import { useMatchMedia } from 'shared/lib';

import { MobileSlider } from './MobileSlider';
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
        <MobileSlider slideClassNames={slideClassNames}>
          {children}
        </MobileSlider>
      )}
    </div>
  );
};
