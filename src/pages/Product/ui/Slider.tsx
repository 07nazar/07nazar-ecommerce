import { useSpring, animated } from '@react-spring/web';
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

import img2 from '../assets/image22.png';
import img3 from '../assets/image23.png';
import img4 from '../assets/image32.png';
import img5 from '../assets/image33.png';
import img from '../assets/phone.png';

const images = [img2, img3, img4, img, img5, img2];

export const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () =>
      setActiveSlide(prev =>
        prev >= images.length - 1 ? images.length - 1 : prev + 1
      ),
    onSwipedRight: () => setActiveSlide(prev => (prev > 1 ? prev - 1 : 0)),
  });

  const handleClick = (index: number) => {
    setActiveSlide(index);
  };

  const slide = useSpring({
    transform: `translateX(-${activeSlide * 380}px)`,
  });

  return (
    <div className={'w-[380px] flex flex-col items-center gap-5'}>
      <div className={'border border-gray-medium rounded-md overflow-hidden'}>
        <animated.div
          className={'flex w-[380px] items-center'}
          {...swipeHandlers}
          style={slide}>
          {images.map((item, index) => (
            <img
              key={index + item}
              src={item}
              className={'object-cover shrink-0 w-[380px] h-[380px]'}
              alt={''}
            />
          ))}
        </animated.div>
      </div>

      <div className={'flex gap-2'}>
        {images.map((item, index) => (
          <button key={index} onClick={() => handleClick(index)}>
            <img
              src={item}
              alt={''}
              className={`${
                index === activeSlide ? 'border-black' : 'border-gray-medium'
              } w-[56px] h-[56px] border object-cover  rounded-md cursor-pointer`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};
