import img from 'assets/phone.png';

import { Seller } from '../types';

export const sellerFromServer: Seller = {
  id: 'das63g4b5bs3w4',
  supplierCompany: 'Guanjoi Trading LLC',
  isVerified: true,
  isWorldwideShipped: true,
  name: 'Seller name',
  photo: img,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  delivery: {
    cost: 5,
    regions: ['Moscow', 'Saint Petersburg'],
  },
  paymentMethods: ['card', 'cash'],
  returnPolicy: 'Returns accepted within 30 days',
  categories: ['electronics', 'home appliances'],
  brands: ['Samsung', 'LG'],
  rating: 4.5,
  reviews: [
    {
      author: {
        id: '6136dascd',
        name: 'John Doe',
        photo: 'url',
      },
      rating: 5,
      likes: 10,
      dislikes: 2,
      date: new Date(),
      text: 'Great seller, fast delivery and excellent customer service.',
    },
  ],
  address: {
    country: 'Russia',
    city: 'Moscow',
    street: 'Lenina street',
    house: '1',
    postalCode: '123456',
  },
  contacts: {
    phone: '+7 (999) 123-45-67',
    email: 'seller@example.com',
    socialMedia: {
      facebook: 'https://www.facebook.com/seller',
      twitter: 'https://twitter.com/seller',
      instagram: 'https://www.instagram.com/seller',
    },
  },
};
