import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';

import { categoriesApi } from 'entities/categories';
import { HOME_MAX_VISIBLE_FEATURED } from 'shared/config';
import { generateStringURL, useMatchMedia } from 'shared/lib';
import { Button } from 'shared/ui/button';
import { Slider } from 'shared/ui/slider';

import { generateItemBorder, getAllChildren } from '../../lib';

import { CategoryItem } from './category-item';

export const Categories = (): JSX.Element => {
  const navigate = useNavigate();
  const { isMobile } = useMatchMedia();
  const { data, isLoading, isError } =
    categoriesApi.useGetFeaturedCategoriesQuery();

  const clickHandler = (id: string, text: string) => {
    navigate(
      `/catalog/${generateStringURL(text)}-${String(id).substring(0, 9)}`
    );
  };

  if (isError || data === undefined) {
    return <div />;
  }

  if (isLoading) {
    return <p>Please wait...</p>;
  }

  return (
    <div>
      {data.map(({ id, image, children, name }) => (
        <div
          key={`category-${id}`}
          className={
            'lg:max-h-auto mt-5 flex h-full max-h-[257px] lg:h-auto lg:flex-col'
          }>
          <div
            className={
              'relative w-[23%] overflow-hidden rounded-l-md border-gray-pale lg:w-full lg:rounded-t-md lg:rounded-bl-none lg:border lg:border-b-0'
            }>
            <div
              className={'absolute h-full w-full lg:blur-sm '}
              style={{
                backgroundImage: `url(${image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div
              className={`relative h-full p-5 sm:border-t sm:border-gray-medium  sm:bg-white sm:p-4`}>
              <h5
                className={
                  'mb-5 text-xl font-semibold leading-6.5 text-black sm:mb-0 sm:w-full sm:text-lg'
                }>
                {name}
              </h5>
              {!isMobile && (
                <Button
                  onClick={() => clickHandler(id, name)}
                  className={'bg-white text-black'}>
                  Source now
                </Button>
              )}
            </div>
          </div>

          <div
            className={
              'w-3/4 grow overflow-hidden rounded-r-md border border-gray-pale bg-white lg:w-full lg:rounded-b-md lg:rounded-tr-none'
            }>
            <Slider
              activateOn={'isLaptop'}
              className={
                'grid w-full grid-cols-4 overflow-hidden rounded-b-md border border-gray-pale bg-white lg:block'
              }>
              {children &&
                getAllChildren(children).map((item, i) => {
                  if (i === HOME_MAX_VISIBLE_FEATURED) {
                    return null;
                  }

                  const itemClassNames = generateItemBorder(i);

                  return (
                    <CategoryItem
                      key={`category-item-${item.name}-${item.id}`}
                      id={item.id}
                      name={item.name}
                      image={item.image}
                      minPrice={item.minPrice}
                      className={`${itemClassNames} lg:border-x`}
                    />
                  );
                })}
            </Slider>
          </div>
          {isMobile && (
            <Button
              onClick={() => clickHandler(id, name)}
              className={
                'flex items-center gap-1.5 border-b border-gray-medium bg-white p-5 font-medium text-blue'
              }>
              <span>Source now</span>
              <BsArrowRight />
            </Button>
          )}
        </div>
      ))}
    </div>
  );
};
