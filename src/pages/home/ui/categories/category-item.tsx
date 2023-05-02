import { FC } from 'react';

import { normalizeStringToURL } from 'shared/lib';
import { DivLink } from 'shared/ui/links';
import { categoriesTypes } from 'entities/categories';

type CategoryItemProps = Pick<
  categoriesTypes.CategoryWithAdditionalInfo,
  'id' | 'text' | 'image' | 'minPrice'
> & { className: string };

export const CategoryItem: FC<CategoryItemProps> = ({
  id,
  text,
  image,
  minPrice,
  className,
}) => (
  <DivLink
    ariaLabel={`Go to ${text} catalog`}
    to={`/catalog/${normalizeStringToURL(text)}-${String(id).substring(0, 5)}`}
    className={`flex flex-col sm:flex-col-reverse max-w-[225px] py-5 md:py-3 px-4 ${className}`}>
    <h6 className={'leading-5 sm:text-center'}>{text}</h6>
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
