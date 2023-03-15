import { FC, ReactNode } from 'react';

import { ProductMinType, ProductType } from '../../model';

interface IProductCardClassNames {
  title?: string;
  image?: string;
  price?: string;
  box?: string;
  content?: string;
}

type IProductCardProps = {
  product: ProductType | ProductMinType;
  children?: ReactNode;
  between?: ReactNode;
  className?: IProductCardClassNames;
};

export const BaseCard: FC<IProductCardProps> = ({
  product,
  between,
  children,
  className = {},
}) => (
  <div className={`${className.box || ''} bg-white`}>
    <img
      src={product.mainPhoto.url}
      className={`${className.image || ''} mx-auto object-cover`}
      alt={''}
    />

    <div className={className.content || ''}>
      <h3 className={className.title || ''}>{product.name}</h3>
      {between}
      <div className={'flex items-center gap-2'}>
        <p className={className.price || ''}>
          ${product.price.current.toFixed(2)}
        </p>
        {product.price.old && (
          <p className={'self-start text-gray-hot text-base line-through'}>
            ${product.price.old.toFixed(2)}
          </p>
        )}
      </div>
      {children}
    </div>
  </div>
);
