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
      <div className={'container flex justify-between pt-[22px] pb-[24px]'}>
        <nav className={'flex gap-[28px]'}>
          <MultiCategories />
          {categoriesLinks.map(link => (
            <AppLink
              key={link.to}
              to={link.to}
              className={'text-black font-medium'}>
              {link.text}
            </AppLink>
          ))}
        </nav>
        <div className={'flex items-center gap-[15px]'}>
          <ChangeCountry />
          <ChangeLanguage />
        </div>
      </div>
    </div>
  </div>
);
