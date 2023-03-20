import { FC } from 'react';

import { ReactComponent as LogoImage } from './assets/logo.svg';

interface LogoProps {
  className?: string;
}

export const Logo: FC<LogoProps> = ({ className }) => (
  <LogoImage className={className} />
);
