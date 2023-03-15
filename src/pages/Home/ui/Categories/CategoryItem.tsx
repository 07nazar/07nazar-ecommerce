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
  <div className={`py-5 px-4 ${className}`}>
    <h6 className={'leading-5'}>{title}</h6>
    <div className={'flex flex-nowrap justify-between'}>
      <p className={'mt-2 text-xs text-gray-hot'}>
        From <br /> <span className={'whitespace-nowrap'}> USD {price}</span>
      </p>

      <img
        className={'max-w-[75px] max-h-[75px] object-contain'}
        src={image}
        alt={'category'}
      />
    </div>
  </div>
);
