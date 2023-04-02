import { FC } from 'react';

import { AppLink } from 'shared/ui/AppLink';

import { ChangeCountry } from './ChangeCountry';
import { ChangeLanguage } from './ChangeLanguage';
import { MultiCategories } from './MultiCategories';

const categoriesLinks = [
  {
    to: 'shop',
    text: 'Shop',
  },
  {
    to: 'gifts',
    text: 'Gift boxes',
  },
  {
    to: 'mobiles',
    text: 'Mobiles',
  },
  {
    to: 'pc',
    text: 'Laptops & PC',
  },
];

export const NavBar: FC = () => (
  <div className={'container-fluid bg-white'}>
    <div className={'beforeLine afterLine'}>
      <div className={'container flex gap-7 py-5'}>
        <MultiCategories />
        <nav className={'flex items-center gap-7'}>
          {categoriesLinks.map(link => (
            <AppLink
              key={link.to}
              to={link.to}
              className={'text-black font-medium'}>
              {link.text}
            </AppLink>
          ))}
        </nav>
        <div className={'flex ml-auto items-center gap-4'}>
          <ChangeCountry />
          <ChangeLanguage />
        </div>
      </div>
    </div>
  </div>
);
