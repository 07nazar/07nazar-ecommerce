import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

export const AppLink: FC<LinkProps> = ({
  to,
  className = 'text-gray-hot',
  children,
}) => (
  <Link to={to} className={`link ${className || ''}`}>
    {children}
  </Link>
);
