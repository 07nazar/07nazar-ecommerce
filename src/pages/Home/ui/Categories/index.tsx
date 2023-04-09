import { FC } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { useMatchMedia } from 'shared/lib';
import { Button } from 'shared/ui/Button';

import { CategoryItem, CategoryItemProps } from './CategoryItem';

interface CategoriesProps {
  title: string;
  link: string;
  image: string;
  children: CategoryItemProps[];
}

export const Categories: FC<CategoriesProps> = ({
  children,
  title,
  link,
  image,
}) => {
  const navigate = useNavigate();
  const { isDesktop, isMobile } = useMatchMedia();

  const clickHandler = () => {
    navigate(link);
  };

  const itemsBorders = (i: number): string => {
    const rightBorder =
      i !== Math.floor(children.length / 2) - 1 && i !== children.length - 1
        ? 'border-r'
        : '';

    const bottomBorder = i < Math.floor(children.length / 2) ? 'border-b' : '';

    return `border-gray-pale ${rightBorder} ${bottomBorder}`;
  };

  return (
    <div className={'flex lg:flex-col mt-5'}>
      <div
        className={`relative sm:bg-white sm:border-t sm:border-gray-medium w-1/4 lg:w-full overflow-hidden rounded-l-md lg:rounded-t-md lg:rounded-bl-none p-5 sm:p-4`}>
        {!isMobile && (
          <img
            className={
              'absolute w-full h-full inset-0  -z-10  object-cover lg:blur-[3px]'
            }
            src={image}
            alt={'background'}
          />
        )}
        <h5
          className={
            'text-black w-2/3 sm:w-full text-xl sm:text-lg leading-6.5 font-semibold mb-5 sm:mb-0'
          }>
          {title}
        </h5>
        {!isMobile && (
          <Button onClick={clickHandler} className={'bg-white text-black'}>
            Source now
          </Button>
        )}
      </div>
      {isDesktop ? (
        <div
          className={
            'bg-white grid grid-cols-4 grow rounded-r-md lg:rounded-b-md lg:rounded-tr-none border border-gray-pale overflow-hidden'
          }>
          {children.map((item, i) => {
            const itemClassNames = itemsBorders(i);

            return (
              <CategoryItem
                key={item.title}
                price={item.price}
                image={item.image}
                title={item.title}
                className={itemClassNames}
              />
            );
          })}
        </div>
      ) : (
        <Swiper
          modules={[FreeMode]}
          slidesPerView={'auto'}
          freeMode
          className={
            'w-full bg-white rounded-b-md border border-gray-pale overflow-hidden'
          }>
          {children.map((item, i) => {
            const itemClassNames = itemsBorders(i);

            return (
              <SwiperSlide className={'slide-w-auto'} key={item.title}>
                <CategoryItem
                  price={item.price}
                  image={item.image}
                  title={item.title}
                  className={itemClassNames}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
      {isMobile && (
        <Button
          onClick={clickHandler}
          className={
            'p-5 bg-white font-medium text-blue flex items-center gap-1.5 border-b border-gray-medium'
          }>
          <span>Source now</span>
          <BsArrowRight />
        </Button>
      )}
    </div>
  );
};
