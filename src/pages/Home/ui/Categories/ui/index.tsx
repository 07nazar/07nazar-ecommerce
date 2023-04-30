import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';

import { normalizeStringToURL, useMatchMedia } from 'shared/lib';
import { Button } from 'shared/ui/Button';
import { LaptopSlider } from 'shared/ui/Slider';
import { categoriesModel } from 'entities/Categories';

import { getAllChildren } from '../../../lib';

import { CategoryItem } from './CategoryItem';

const MAX_VISIBLE_CATEGORIES = 8;

export const Categories = () => {
  const navigate = useNavigate();
  const { isMobile } = useMatchMedia();
  const { data, isLoading, isError } =
    categoriesModel.useGetFeaturedCategoriesQuery();

  const clickHandler = (id: number, text: string) => {
    navigate(
      `/catalog/${normalizeStringToURL(text)}-${String(id).substring(0, 5)}`
    );
  };

  const itemsBorders = (i: number): string => {
    const rightBorder =
      i !== Math.floor(MAX_VISIBLE_CATEGORIES / 2) - 1 &&
      i !== MAX_VISIBLE_CATEGORIES - 1
        ? 'border-r'
        : '';

    const bottomBorder =
      i < Math.floor(MAX_VISIBLE_CATEGORIES / 2) ? 'border-b' : '';

    return `border-gray-pale ${rightBorder} ${bottomBorder}`;
  };

  if (isError || data === undefined) {
    return <p>Error...</p>;
  }

  if (isLoading) {
    return <p>Please wait...</p>;
  }

  // TODO разбить на более мелкие блоки

  return data.map(({ id, image, children, text }) => (
    <div
      key={`category-${id}`}
      className={
        'flex lg:flex-col lg:max-h-auto lg:h-auto max-h-[257px] h-full mt-5'
      }>
      <div
        className={
          'relative w-[23%] lg:w-full lg:border lg:border-b-0 lg:rounded-t-md rounded-l-md lg:rounded-bl-none border-gray-pale overflow-hidden'
        }>
        <div
          className={'absolute w-full h-full lg:blur-sm '}
          style={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div
          className={`relative sm:bg-white sm:border-t sm:border-gray-medium h-full  p-5 sm:p-4`}>
          <h5
            className={
              'text-black sm:w-full text-xl sm:text-lg leading-6.5 font-semibold mb-5 sm:mb-0'
            }>
            {text}
          </h5>
          {!isMobile && (
            <Button
              onClick={() => clickHandler(id, text)}
              className={'bg-white text-black'}>
              Source now
            </Button>
          )}
        </div>
      </div>

      <div
        className={
          'w-3/4 bg-white lg:w-full grow rounded-r-md lg:rounded-b-md lg:rounded-tr-none border border-gray-pale overflow-hidden'
        }>
        <LaptopSlider
          className={
            'w-full grid grid-cols-4 lg:block bg-white rounded-b-md border border-gray-pale overflow-hidden'
          }>
          {children &&
            getAllChildren(children).map((item, i) => {
              if (i === MAX_VISIBLE_CATEGORIES) {
                return null;
              }

              const itemClassNames = itemsBorders(i);

              return (
                <CategoryItem
                  key={`category-item-${item.text}-${item.id}`}
                  id={item.id}
                  text={item.text}
                  image={item.image}
                  minPrice={item.minPrice}
                  className={`${itemClassNames} lg:border-x`}
                />
              );
            })}
        </LaptopSlider>
      </div>
      {isMobile && (
        <Button
          onClick={() => clickHandler(id, text)}
          className={
            'p-5 bg-white font-medium text-blue flex items-center gap-1.5 border-b border-gray-medium'
          }>
          <span>Source now</span>
          <BsArrowRight />
        </Button>
      )}
    </div>
  ));
};
