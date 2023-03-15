import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div className={'flex bg-white mt-5'}>
      <div
        style={{
          backgroundImage: `url("${image}")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        className={`w-1/4 p-5 rounded-l-md bg-cover`}>
        <h5
          className={'text-black w-2/3 text-xl leading-6.5 font-semibold mb-5'}>
          {title}
        </h5>
        <Button onClick={clickHandler} className={'bg-white text-black'}>
          Source now
        </Button>
      </div>
      <div
        className={
          'grid grid-cols-[repeat(4,minmax(150px,1fr))] grow rounded-r-md border border-gray-pale overflow-hidden'
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
    </div>
  );
};
