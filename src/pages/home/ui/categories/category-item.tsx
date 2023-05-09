import { FC } from 'react';

import { categoriesTypes } from 'entities/categories';
import { normalizeStringToURL } from 'shared/lib';
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
    to={`/catalog/${normalizeStringToURL(name)}-${String(id).substring(0, 5)}`}
    className={`flex flex-col sm:flex-col-reverse max-w-[225px] py-5 md:py-3 px-4 ${className}`}>
    <h6 className={'leading-5 sm:text-center'}>{name}</h6>
    <div className={'flex sm:flex-col-reverse  justify-between'}>
      <p className={'w-full mt-2 text-xs text-gray-hot sm:text-center'}>
        <span className={'block sm:inline-block '}>From</span> USD {minPrice}
      </p>
      <img
        className={'sm:mx-auto max-w-[75px] max-h-[75px] object-contain'}
        src={image}
        alt={'category'}
      />
    </div>
  </DivLink>
);
