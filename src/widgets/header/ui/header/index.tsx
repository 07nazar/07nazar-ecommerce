import { createElement, FC } from 'react';

import { HeaderSearch } from 'features/product/header-search';
import { useMatchMedia } from 'shared/lib';
import { AppLink } from 'shared/ui/links';
import { Logo } from 'shared/ui/logo';

import { appLinks, appLinksMobile } from '../../lib';
import { BurgerMenu } from '../burger-menu';

export const Header: FC = () => {
  const { isDesktop, isMobile } = useMatchMedia();
  const items = isDesktop ? appLinks : appLinksMobile;

  return (
    <header
      className={
        'container-fluid flex border-b border-gray-medium bg-white pb-2 pt-2 sm:px-2.5'
      }>
      <div className={'container flex items-center pb-6 pt-5 sm:flex-wrap'}>
        {isMobile && <BurgerMenu />}
        <AppLink to={'/'} className={'mr-auto'}>
          <Logo className={'min-w-[116px]'} />
        </AppLink>
        <HeaderSearch />
        <nav
          className={'ml-4 flex max-h-10 items-center gap-5 lg:gap-2 sm:gap-4'}>
          {items.map(link => (
            <AppLink
              key={link.to}
              to={link.to}
              className={
                'items-center whitespace-nowrap text-xs leading-[15px] text-gray-hot'
              }>
              {createElement(link.icon, {
                size:
                  isMobile && link.extraSize ? link.extraSize : link.baseSize,
              })}

              {!isMobile && <p className={'mt-1'}>{link.text}</p>}
            </AppLink>
          ))}
        </nav>
      </div>
    </header>
  );
};
