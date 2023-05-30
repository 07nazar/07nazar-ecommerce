import { FC } from 'react';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillYoutube,
} from 'react-icons/all';

import { ReactComponent as AppStore } from 'assets/appStore.svg';
import { ReactComponent as GooglePlay } from 'assets/googlePlay.svg';
import { AppLink } from 'shared/ui/links';
import { Logo } from 'shared/ui/logo';

const footerLinks = [
  {
    title: 'About',
    links: [
      { text: 'About us', to: '/about' },
      { text: 'Find store', to: '/find-store' },
      { text: 'Categories', to: '/categories' },
      { text: 'Blogs', to: '/blogs' },
    ],
  },
  {
    title: 'Information',
    links: [
      { text: 'Help Center', to: '/help-center' },
      { text: 'Money Refund', to: '/money-refund' },
      { text: 'Shipment', to: '/shipment' },
      { text: 'Contact us', to: '/contact-us' },
    ],
  },
  {
    title: 'For users',
    links: [
      { text: 'Login', to: '/login' },
      { text: 'Register', to: '/register' },
      { text: 'Settings', to: '/settings' },
      { text: 'My orders', to: '/my-orders' },
    ],
  },
  {
    title: 'Partnership',
    links: [
      { text: 'Become a partner', to: '/partner' },
      { text: 'Advertise', to: '/advertise' },
    ],
  },
];

const externalLinks = [
  {
    to: 'https://www.facebook.com',
    icon: <AiFillFacebook size={30} />,
  },
  {
    to: 'https://www.twitter.com',
    icon: <AiFillTwitterSquare size={30} />,
  },
  {
    to: 'https://www.linkedin.com',
    icon: <AiFillLinkedin size={30} />,
  },
  {
    to: 'https://www.instagram.com',
    icon: <AiFillInstagram size={30} />,
  },
  {
    to: 'https://www.youtube.com/',
    icon: <AiFillYoutube size={30} />,
  },
];

const ApplicationLinks = () => (
  <div className={'lg:flex md:items-center lg:flex-col md:col-span-2'}>
    <h6 className={'mb-4 sm:mb-2 text-black font-medium lg:text-center'}>
      Get app
    </h6>
    <div className={'flex flex-col md:flex-row gap-2'}>
      <AppLink to={'/download'}>
        <AppStore className={'rect-hover'} />
      </AppLink>
      <AppLink to={'/download'}>
        <GooglePlay className={'rect-hover'} />
      </AppLink>
    </div>
  </div>
);

const CopyrightBlock = () => (
  <div className={'bg-gray-pale border-t border-gray-medium'}>
    <div
      className={
        'container py-5 flex md:flex-col justify-between md:items-center'
      }>
      <p className={'text-gray-dark sm:text-xs'}>© 2023 Ecommerce.</p>
      <p className={'flex gap-1 text-gray-dark sm:text-xs'}>
        <span className={'select-none'}>Creators: </span>
        <a
          className={'hover:text-blue duration-200'}
          target={'_blank'}
          href={'https://github.com/07nazar'}
          rel={'noreferrer'}>
          07nazar
        </a>
        <span className={'select-none'}>/</span>
        <a
          className={'hover:text-blue duration-200'}
          target={'_blank'}
          href={'https://github.com/ImpossiblePlayer'}
          rel={'noreferrer'}>
          ImpossiblePlayer
        </a>
        <span className={'select-none'}>/</span>
        <a
          className={'hover:text-blue duration-200'}
          target={'_blank'}
          href={'https://github.com/Hym1ack'}
          rel={'noreferrer'}>
          Hym1ack
        </a>
      </p>
    </div>
  </div>
);

export const Footer: FC = () => (
  <footer className={'container-fluid bg-white'}>
    <div
      className={
        'container pt-10 lg:pt-8 md:pt-4 pb-14 lg:pb-10 md:pb-6 sm:pb-2'
      }>
      <div
        className={
          'flex gap-14 md:gap-10 sm:gap-4 lg:flex-col lg:items-start my-4'
        }>
        <div
          className={
            'w-1/4 lg:w-full lg:items-center lg:justify-center lg:flex lg:flex-col'
          }>
          <Logo className={'mb-4 lg:mb-2'} />
          <p className={'text-gray-dark lg:text-center px-4'}>
            Quality products at affordable prices! Fast delivery and easy
            returns. A satisfied customer is our top priority.
          </p>
          <div className={'mt-4 flex gap-2.5'}>
            {externalLinks.map(link => (
              <AppLink to={link.to} key={link.to} className={'text-gray-deep'}>
                {link.icon}
              </AppLink>
            ))}
          </div>
        </div>
        <div
          className={
            'grid grid-cols-5 md:grid-cols-3 sm:grid-cols-2 lg:w-full gap-10 md:gap-4 lg:p-2'
          }>
          {footerLinks.map(linkGroup => (
            <div
              className={'flex flex-col items-start md:items-center gap-1'}
              key={linkGroup.title}>
              <h6
                className={
                  'mb-1.5 font-medium text-black lg:text-center md:text-center whitespace-nowrap'
                }>
                {linkGroup.title}
              </h6>
              {linkGroup.links.map(link => (
                <AppLink
                  key={link.to}
                  to={link.to}
                  className={'lg:whitespace-nowrap'}>
                  {link.text}
                </AppLink>
              ))}
            </div>
          ))}
          <ApplicationLinks />
        </div>
      </div>
    </div>
    <CopyrightBlock />
  </footer>
);
