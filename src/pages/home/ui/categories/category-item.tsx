import { FC } from 'react';

import { categoriesTypes } from 'entities/categories';
import { generateStringURL } from 'shared/lib';
import { DivLink } from 'shared/ui/links';

type CategoryItemProps = Pick<
  categoriesTypes.CategoryWithAdditionalInfo,
  'id' | 'name' | 'image' | 'minPrice'
> & { className: string };

export const CategoryItem: FC<CategoryItemProps> = ({
  id,
  name,
  image,
  minPrice,
  className,
}) => (
  <DivLink
    ariaLabel={`Go to ${name} catalog`}
    to={`/catalog/${generateStringURL(name)}-${String(id).substring(0, 5)}`}
    className={`flex max-w-[225px] flex-col px-4 py-5 md:py-3 sm:flex-col-reverse ${className}`}>
    <h6 className={'leading-5 sm:text-center'}>{name}</h6>
    <div className={'flex justify-between  sm:flex-col-reverse'}>
      <p className={'mt-2 w-full text-xs text-gray-hot sm:text-center'}>
        <span className={'block sm:inline-block '}>From</span> USD {minPrice}
      </p>
      <img
        className={'max-h-[75px] max-w-[75px] object-contain sm:mx-auto'}
        src={image}
        alt={'category'}
      />
    </div>
  </DivLink>
);
