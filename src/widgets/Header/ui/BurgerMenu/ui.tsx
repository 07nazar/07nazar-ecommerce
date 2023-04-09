import { createElement, FC, Fragment, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

import { AppLink } from 'shared/ui/AppLink';
import { Button } from 'shared/ui/Button';
import { Modal } from 'shared/ui/Modal';

import avatar from './assets/avatar.png';
import { mobileMenuLinks, MobileMenuLinkType } from './lib';

// TODO по высоте не на весь экран белый фон

const MobileMenu: FC = () => (
  <div className={'w-60 h-full'}>
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
      {mobileMenuLinks.map((menuArr: MobileMenuLinkType[]) => (
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
                  {link.icon &&
                    createElement(link.icon, {
                      className: 'text-gray-hot',
                    })}
                  {createElement('span', { className: 'ml-4' }, link.title)}
                </Button>
              );
            }

            return (
              <AppLink
                key={link.title}
                className={'flex-row  items-center pl-2.5 h-12 text-black'}
                to={link.to ?? ''}>
                {link.icon &&
                  createElement(link.icon, {
                    className: 'text-gray-hot',
                  })}
                {createElement(
                  'span',
                  { className: !link.icon ? 'ml-8' : 'ml-4' },
                  link.title
                )}
              </AppLink>
            );
          })}
          <span className={'block bg-gray-medium h-[1px] w-full my-2.5'} />
        </Fragment>
      ))}
    </div>
  </div>
);

export const BurgerMenu: FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const clickHandler = () => {
    setShowModal(true);
  };

  return (
    <>
      <Button onClick={clickHandler} className={'text-black mr-1 -ml-3'}>
        <GiHamburgerMenu size={18} />
      </Button>
      <Modal
        position={'left'}
        className={'top-0 left-0 h-full rounded-none p-0'}
        isOpen={showModal}
        setClose={() => setShowModal(false)}
        backgroundColor={'rgba(99, 99, 99, 1)'}>
        <MobileMenu />
      </Modal>
    </>
  );
};
