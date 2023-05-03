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
    <header className={'container-fluid bg-white flex sm:px-2.5'}>
      <div className={'container flex items-center  pt-5 pb-6 sm:flex-wrap'}>
        {isMobile && <BurgerMenu />}
        <AppLink to={'/'} className={'mr-auto'}>
          <Logo className={'min-w-[116px]'} />
        </AppLink>
        <HeaderSearch />
        <nav
          className={'flex items-center gap-5 lg:gap-2 sm:gap-4 ml-4 max-h-10'}>
          {items.map(link => (
            <AppLink
              key={link.to}
              to={link.to}
              className={
                'text-xs leading-[15px] items-center text-gray-hot whitespace-nowrap'
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
