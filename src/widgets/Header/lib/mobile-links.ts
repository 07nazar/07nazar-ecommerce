import { IconType } from 'react-icons';
import {
  AiOutlineAlignLeft,
  AiOutlineHeart,
  AiOutlineHome,
} from 'react-icons/ai';
import { BsHeadset } from 'react-icons/bs';
import { CiShop } from 'react-icons/ci';
import { TbBuildingCommunity } from 'react-icons/tb';
import { TfiWorld } from 'react-icons/tfi';

export type MobileMenuLinkType = {
  title: string;
  icon?: IconType;
  to?: string;
  handler?: () => void;
};

export const mobileLinks: MobileMenuLinkType[][] = [
  [
    {
      icon: AiOutlineHome,
      title: 'Home',
      to: '/home',
    },
    {
      icon: AiOutlineAlignLeft,
      title: 'Categories',
      to: '/categories',
    },
    {
      icon: AiOutlineHeart,
      title: 'Favorites',
      to: '/favourites',
    },
    {
      icon: CiShop,
      title: 'My orders',
      to: '/orders',
    },
  ],
  [
    {
      icon: TfiWorld,
      title: 'English | USD',
      handler: () => {
        // TODO обработка смены языка
        console.log('change language handler');
      },
    },
    {
      icon: BsHeadset,
      title: 'Contact us',
      to: '/contact-us',
    },
    {
      icon: TbBuildingCommunity,
      title: 'About',
      to: '/about-us',
    },
  ],
  [
    {
      title: 'user agreement',
      to: '/user-agreement',
    },
    {
      title: 'Partnership',
      to: '/partnership',
    },
    {
      title: 'Privacy policy',
      to: '/privacy-policy',
    },
  ],
];
