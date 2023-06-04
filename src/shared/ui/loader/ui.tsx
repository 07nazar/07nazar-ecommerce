import { FC } from 'react';

type LoaderProps = {
  className?: string;
  type?: 'skeleton' | 'spinner';
};

export const Loader: FC<LoaderProps> = ({
  className = '',
  type = 'spinner',
}) => (
  <div
    className={`${type === 'spinner' ? 'loader' : 'skeleton'} ${className}`}
  />
);
