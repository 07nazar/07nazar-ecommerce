import { FC } from 'react';

type LoaderProps = {
  type: 'skeleton' | 'spinner';
  className?: string;
};

export const Loader: FC<LoaderProps> = ({
  className = '',
  type = 'spinner',
}) => (
  <div
    className={`${type === 'spinner' ? 'loader' : 'skeleton'} ${className}`}
  />
);
