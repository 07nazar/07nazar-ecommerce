// TODO по высоте не на весь экран белый фон

import { FC, Fragment } from 'react';

import avatar from 'assets/avatar.png';
import { Button } from 'shared/ui/button';
import { AppLink } from 'shared/ui/links';

import { mobileLinks, MobileMenuLinkType } from '../../lib';

export const MobileMenu: FC = () => (
  <div className={'w-60'}>
    <div className={'bg-gray-pale p-5'}>
      <AppLink to={'/profile'} className={'max-w-[44px] mb-2.5'}>
        <img src={avatar} alt={'user avatar'} />
      </AppLink>
      <AppLink
        className={'inline-flex text-black pr-1 border-r border-black'}
        to={'/login'}>
        Sign in
      </AppLink>
      <AppLink className={'inline-flex text-black pl-1'} to={'/register'}>
        Register
      </AppLink>
    </div>
    <div className={'px-2.5'}>
      {mobileLinks.map((menuArr: MobileMenuLinkType[]) => (
        <Fragment key={`mobile-menu-${menuArr[0].title}`}>
          {menuArr.map((link: MobileMenuLinkType) => {
            if (link.handler && !link.to) {
              return (
                <Button
                  key={link.title}
                  onClick={link.handler}
                  className={
                    'text-black font-normal p-0 pl-2.5 h-12 items-center w-full'
                  }>
                  {link.icon && <link.icon className={'text-gray-hot'} />}
                  <span className={'ml-4'}>{link.title}</span>
                </Button>
              );
            }

            return (
              <AppLink
                key={link.title}
                className={'flex-row items-center pl-2.5 h-12 text-black'}
                to={link.to ?? ''}>
                {link.icon && <link.icon className={'text-gray-hot'} />}
                <span className={!link.icon ? 'ml-8' : 'ml-4'}>
                  {link.title}
                </span>
              </AppLink>
            );
          })}
          <span className={'block bg-gray-medium h-[1px] w-full my-2.5'} />
        </Fragment>
      ))}
    </div>
  </div>
);
