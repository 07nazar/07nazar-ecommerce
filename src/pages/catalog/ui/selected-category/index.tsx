import { ComponentType, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { categoriesModel } from 'entities/categories';
import { useAppDispatch, useMatchMedia, useSliceSelector } from 'shared/lib';

import { Loader } from '../../../../shared/ui/loader';
import { formatNumber } from '../../lib';

const withCategoryDispatch = (WrappedComponent: ComponentType) => () => {
  const categories = useSliceSelector('categories', state => state.categories);
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const regex = /[^/]*-([^/]+)$/;
    const match = pathname.match(regex);
    const [, curId] = (match && match[0].split('-')) || [];

    if (curId && categories.length !== 0) {
      dispatch(categoriesModel.setCurrentCategory(curId));
    }
  }, [pathname, categories.length]);

  return <WrappedComponent />;
};

const Category = () => {
  const { isMobile, isTablet } = useMatchMedia();
  const { name, productsCount } = useSliceSelector(
    'categories',
    state => state.currentCategory
  );

  if (isMobile || isTablet) {
    return null;
  }

  if (name === '') {
    return <Loader type={'skeleton'} className={'mr-auto h-6 w-52'} />;
  }

  return (
    <p className={'flex grow gap-1 lg:whitespace-nowrap'}>
      {formatNumber(productsCount)} items in
      <span className={'font-medium first-letter:uppercase'}>{name}</span>
    </p>
  );
};

export const SelectedCategory = withCategoryDispatch(Category);
