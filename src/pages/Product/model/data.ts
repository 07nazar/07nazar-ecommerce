import { ProductMinType, ProductType } from 'entities/ProductCard';
import { SellerType } from 'entities/UserCard';

import img from '../assets/phone.png';

export const productFromServer: ProductType = {
  name: 'product name',
  quantity: 24,
  orders: 43,
  mainPhoto: {
    url: 'stg',
    thumbUrl: 'sg',
  },
  additionalPhotos: [
    {
      url: '',
    },
    {
      url: '',
    },
  ],
  price: {
    current: 2,
    old: 3,
  },
  rating: 4,
  sold: 35,
  reviewsCount: 12,
  params: [
    { name: 'Model', value: '#5236326' },
    { name: 'Style', value: 'Classic' },
    { name: 'Type', value: '#5236326' },
    { name: 'Color', value: 'Classic' },
    { name: 'Weight', value: 'Classic' },
  ],
  specifications: [
    { name: 'Model', value: '#5236326' },
    { name: 'Style', value: 'Classic' },
    { name: 'Type', value: '#5236326' },
    { name: 'Color', value: 'Classic' },
    { name: 'Weight', value: 'Classic' },
  ],
  advantages: [
    'Some great feature name here',
    'Lorem ipsum dolor sit amet, consectetur',
    'Duis aute irure dolor in reprehenderit',
    'Some great feature name 2',
  ],
  description:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  reviews: [
    {
      author: { name: 'John Smith', photo: '' },
      text: {
        pluses: '',
        minus: 'A bit short',
        commentary: 'Recommended for sci-fi fans',
      },
      rating: 2,
      likes: 12,
      dislikes: 2,
      date: new Date('1995-12-17T03:24:00'),
    },
    {
      author: { name: 'Jane Doe', photo: '' },
      text: {
        pluses: 'Excellent restaurant with amazing food',
        minus: '',
        commentary: 'Great place for special occasions',
      },
      rating: 5,
      likes: 27,
      dislikes: 1,
      date: new Date('1995-12-17T03:24:00'),
    },
    {
      author: { name: 'Alex Johnson', photo: '' },
      text: {
        pluses: 'Excellent sound quality and ease of use',
        minus: 'Expensive',
        commentary: 'Highly recommended for music lovers',
      },
      rating: 5,
      likes: 5,
      dislikes: 0,
      date: new Date('1995-12-17T03:24:00'),
    },
    {
      author: { name: 'Emily Brown', photo: '' },
      text: {
        pluses: 'Great work, very professionally done',
        minus: 'Slightly delayed with deadlines',
        commentary: 'Overall, satisfied with the result',
      },
      rating: 3,
      likes: 1,
      dislikes: 0,
      date: new Date('1995-12-17T03:24:00'),
    },
    {
      author: { name: 'Mike Wilson', photo: '' },
      text: {
        pluses: 'Great vacation, beautiful ocean view',
        minus: 'Pool is a bit small',
        commentary: 'Highly recommend for a peaceful and relaxing vacation',
      },
      rating: 5,
      likes: 9,
      dislikes: 2,
      date: new Date('1995-12-17T03:24:00'),
    },
    {
      author: { name: 'Sarah Johnson', photo: '' },
      text: {
        pluses: 'Excellent customer service',
        minus: 'Limited product selection',
        commentary: 'Would recommend for the quality of service',
      },
      rating: 4,
      likes: 3,
      dislikes: 0,
      date: new Date('1995-12-17T03:24:00'),
    },
    {
      author: { name: 'Michael Lee', photo: '' },
      text: {
        pluses: 'Great gym with excellent equipment',
        minus: 'A bit crowded during peak hours',
        commentary: 'Would recommend for serious fitness enthusiasts',
      },
      rating: 4,
      likes: 6,
      dislikes: 1,
      date: new Date('1995-12-17T03:24:00'),
    },
    {
      author: { name: 'Nancy Chen', photo: '' },
      text: {
        pluses: 'Delicious food and great ambiance',
        minus: 'Service was a bit slow',
        commentary: 'Highly recommend for a date night',
      },
      rating: 4,
      likes: 12,
      dislikes: 0,
      date: new Date('1995-12-17T03:24:00'),
    },
    {
      author: { name: 'David Kim', photo: '' },

      text: {
        pluses: 'Great customer service and fast shipping',
        minus: 'Product was a bit overpriced',
        commentary: 'Overall, satisfied with the purchase',
      },
      rating: 3,
      likes: 2,
      dislikes: 1,
      date: new Date('1995-12-17T03:24:00'),
    },
    {
      author: { name: 'Lisa Johnson', photo: '' },

      text: {
        pluses: 'Beautiful and spacious apartment',
        minus: 'A bit noisy due to nearby construction',
        commentary: 'Overall, a great place to live',
      },
      rating: 4,
      likes: 8,
      dislikes: 0,
      date: new Date('1995-12-17T03:24:00'),
    },
    {
      author: { name: 'Jane Johnson', photo: '' },

      text: {
        pluses: 'Excellent restaurant with amazing food',
        minus: 'Prices are a bit higher than average',
        commentary: 'Great place for special occasions',
      },
      rating: 5,
      likes: 27,
      dislikes: 1,
      date: new Date('1995-12-17T03:24:00'),
    },
    {
      author: { name: 'Alex Johnsond', photo: '' },

      text: {
        pluses: 'Excellent sound quality and ease of use',
        minus: 'Expensive',
        commentary: 'Highly recommended for music lovers',
      },
      rating: 5,
      likes: 5,
      dislikes: 0,
      date: new Date('1995-12-17T03:24:00'),
    },
  ],
  sellerId: '2d65dx3zs463',
};

export const sellerFromServer: SellerType = {
  name: 'Seller name',
  photo: 'url',
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

export const productsRelated: ProductMinType[] = [
  {
    mainPhoto: { url: img, thumbUrl: '' },
    name: 'Xiaomi Redmi 86 Original',
    price: { current: 32 },
  },
  {
    mainPhoto: { url: img, thumbUrl: '' },
    name: 'Xiaomi Redmi 85 Original',
    price: { current: 32 },
  },
  {
    mainPhoto: { url: img, thumbUrl: '' },
    name: 'Xiaomi Redmi 84 Original',
    price: { current: 32 },
  },
  {
    mainPhoto: { url: img, thumbUrl: '' },
    name: 'Xiaomi Redmi 83 Original',
    price: { current: 32 },
  },
  {
    mainPhoto: { url: img, thumbUrl: '' },
    name: 'Xiaomi Redmi 82 Original',
    price: { current: 32 },
  },
  {
    mainPhoto: { url: img, thumbUrl: '' },
    name: 'Xiaomi Redmi 81 Original',
    price: { current: 32 },
  },
];

export const productsLikes: ProductMinType[] = [
  {
    mainPhoto: { url: img, thumbUrl: '' },
    name: 'Xiaomi Redmi 5 Original',
    price: { current: 32 },
  },
  {
    mainPhoto: { url: img, thumbUrl: '' },
    name: 'Xiaomi Redmi 84Original',
    price: { current: 32 },
  },
  {
    mainPhoto: { url: img, thumbUrl: '' },
    name: 'Xiaomi Redmi 3 Original',
    price: { current: 32 },
  },
  {
    mainPhoto: { url: img, thumbUrl: '' },
    name: 'Xiaomi Redmi 2 Original',
    price: { current: 32 },
  },
  {
    mainPhoto: { url: img, thumbUrl: '' },
    name: 'Xiaomi Redmi 1 Original',
    price: { current: 32, old: 99 },
  },
];
