import { FC } from 'react';

import logo from './assets/logo.png';

interface LogoProps {
  className?: string;
}

export const Logo: FC<LogoProps> = ({ className }) => (
  <img src={logo} alt={'logo'} className={className} />
);
