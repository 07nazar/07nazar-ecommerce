import { FC, ReactNode } from 'react';

import { AppLink } from 'shared/ui/AppLink';

import { ProductMinType, ProductType } from './model';

interface IProductCardClassNames {
  title?: string;
  image?: string;
  price?: string;
  box?: string;
  boxImage?: string;
  content?: string;
}

type IProductCardProps = {
  product: ProductType | ProductMinType;
  children?: ReactNode;
  before?: ReactNode;
  between?: ReactNode;
  className?: IProductCardClassNames;
};

export const ProductCard: FC<IProductCardProps> = ({
  product,
  between,
  children,
  before,
  className = {},
}) => (
  <div className={`${className.box || ''} bg-white`}>
    <AppLink
      className={className.boxImage || ''}
      to={{ pathname: `/product/${product.id}`, search: '?tab=description' }}>
      <img
        src={product.mainPhoto.url}
        className={`${className.image || ''} product-image`}
        alt={product.name}
      />
    </AppLink>

    <div className={className.content || ''}>
      {before}
      <h3 className={className.title || ''}>{product.name}</h3>
      {between}
      <div className={'flex items-center gap-2 md:gap-1'}>
        <p className={className.price || ''}>
          ${product.price.current.toFixed(2)}
        </p>
        {product.price.old && (
          <p
            className={
              'self-start text-gray-hot text-base sm:text-xs line-through'
            }>
            ${product.price.old.toFixed(2)}
          </p>
        )}
      </div>
      {children}
    </div>
  </div>
);
