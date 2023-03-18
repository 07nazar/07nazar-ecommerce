import { FC } from 'react';
import { FaUserAlt, FaHeart } from 'react-icons/fa';
import { IoMdCart } from 'react-icons/io';
import { IconBaseProps } from 'react-icons/lib/esm/iconBase';
import { MdMessage } from 'react-icons/md';

type LinkType = {
  icon: FC<IconBaseProps>;
  text: string;
  to: string;
  baseSize: number;
  extraSize?: number;
};
export const appLinks: LinkType[] = [
  {
    icon: FaUserAlt,
    text: 'Profile',
    to: 'profile',
    baseSize: 20,
  },
  {
    icon: MdMessage,
    text: 'Message',
    to: 'messages',
    baseSize: 20,
  },
  {
    icon: FaHeart,
    text: 'Orders',
    to: 'favourites',
    baseSize: 20,
  },
  {
    icon: IoMdCart,
    text: 'My cart',
    to: 'cart',
    baseSize: 20,
  },
];

export const appLinksMobile: LinkType[] = [
  {
    icon: IoMdCart,
    text: 'My cart',
    to: 'cart',
    baseSize: 20,
    extraSize: 30,
  },
  {
    icon: FaUserAlt,
    text: 'Profile',
    to: 'profile',
    baseSize: 20,
    extraSize: 25,
  },
];
