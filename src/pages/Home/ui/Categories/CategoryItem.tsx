import { FC } from 'react';

export interface CategoryItemProps {
  title: string;
  price: string;
  image: string;
  className?: string;
}

export const CategoryItem: FC<CategoryItemProps> = ({
  price,
  image,
  title,
  className,
}) => (
  <div
    className={`flex flex-col sm:flex-col-reverse max-w-[225px] py-5 md:py-3 px-4 ${className}`}>
    <h6 className={'leading-5 sm:text-center'}>{title}</h6>
    <div className={'flex sm:flex-col-reverse  justify-between'}>
      <p className={'w-full mt-2 text-xs text-gray-hot sm:text-center'}>
        <span className={'block sm:inline-block '}>From</span> USD {price}
      </p>
      <img
        className={'sm:mx-auto max-w-[75px] max-h-[75px] object-contain'}
        src={image}
        alt={'category'}
      />
    </div>
  </div>
);
