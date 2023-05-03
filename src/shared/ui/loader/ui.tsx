import { FC } from 'react';

type LoaderProps = {
  className?: string;
};

export const Loader: FC<Partial<LoaderProps>> = ({ className = '' }) => (
  <div className={`loader ${className}`} />
);
