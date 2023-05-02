import img from 'assets/phone.png';

import { Product } from '../types';

export const productFromServer: Product = {
  id: 'das2wtgv412',
  name: 'product name',
  deliveryCost: '0',
  category: ['phone'],
  quantity: 24,
  orders: 43,
  mainPhoto: {
    url: img,
    thumbUrl: img,
  },
  additionalPhotos: [
    {
      url: 'https://c.dns-shop.ru/thumb/st4/fit/100/100/ef99659833990b772c8ff6500ec44b81/7e5f8aa12f8e12df94d97bdbb136668231e85f87fa0c44e1fadb301a96dd19bd.jpg',
    },
    {
      url: 'https://c.dns-shop.ru/thumb/st1/fit/100/100/8a1e6c9d82eab9739e42f0d9cdd69cc4/245567092cfe646ea84e843fe16a9e567a32a839e67c530a5a0cd406f3f9b928.jpg',
    },
    {
      url: 'https://c.dns-shop.ru/thumb/st1/fit/100/100/38fc576a72f03db08e3cb04a1dce34a6/44fce10e6eb04b1a19c257b7dc5797a588f128a534a69b3ac8a7e3cc5a6b8949.jpg',
    },
    {
      url: 'https://c.dns-shop.ru/thumb/st1/fit/100/100/38fc576a72f03db08e3cb04a1dce34a6/44fce10e6eb04b1a19c257b7dc5797a588f128a534a69b3ac8a7e3cc5a6b8949.jpg',
    },
    {
      url: 'https://c.dns-shop.ru/thumb/st1/fit/100/100/38fc576a72f03db08e3cb04a1dce34a6/44fce10e6eb04b1a19c257b7dc5797a588f128a534a69b3ac8a7e3cc5a6b8949.jpg',
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
    { name: 'Model', value: '#5236326', order: 1 },
    { name: 'Style', value: 'Classic', order: 3 },
    { name: 'Type', value: '#5236326', order: 2 },
    { name: 'Color', value: 'Classic', order: 5 },
    { name: 'Weight', value: 'Classic', order: 4 },
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
      author: { id: '6136dasd', name: 'John Smith', photo: '' },
      text: {
        advantages: '',
        disadvantages: 'A bit short',
        comment: 'Recommended for sci-fi fans',
      },
      rating: 2,
      likes: 12,
      dislikes: 2,
      date: new Date('1995-12-17T03:24:00'),
    },
    {
      author: { id: '6136dasdd', name: 'Jane Doe', photo: '' },
      text: {
        advantages: 'Excellent restaurant with amazing food',
        disadvantages: '',
        comment: 'Great place for special occasions',
      },
      rating: 5,
      likes: 27,
      dislikes: 1,
      date: new Date('1995-12-17T03:24:00'),
    },
    {
      author: { id: '6136dazsd', name: 'Alex Johnson', photo: '' },
      text: {
        advantages: 'Excellent sound quality and ease of use',
        disadvantages: 'Expensive',
        comment: 'Highly recommended for music lovers',
      },
      rating: 5,
      likes: 5,
      dislikes: 0,
      date: new Date('1995-12-17T03:24:00'),
    },
    {
      author: { id: '61v36dasd', name: 'Emily Brown', photo: '' },
      text: {
        advantages: 'Great work, very professionally done',
        disadvantages: 'Slightly delayed with deadlines',
        comment: 'Overall, satisfied with the result',
      },
      rating: 3,
      likes: 1,
      dislikes: 0,
      date: new Date('1995-12-17T03:24:00'),
    },
    {
      author: { id: '6136dxcbasd', name: 'Mike Wilson', photo: '' },
      text: {
        advantages: 'Great vacation, beautiful ocean view',
        disadvantages: 'Pool is a bit small',
        comment: 'Highly recommend for a peaceful and relaxing vacation',
      },
      rating: 5,
      likes: 9,
      dislikes: 2,
      date: new Date('1995-12-17T03:24:00'),
    },
    {
      author: { id: '61h6dasd', name: 'Sarah Johnson', photo: '' },
      text: {
        advantages: 'Excellent customer service',
        disadvantages: 'Limited product selection',
        comment: 'Would recommend for the quality of service',
      },
      rating: 4,
      likes: 3,
      dislikes: 0,
      date: new Date('1995-12-17T03:24:00'),
    },
    {
      author: { id: '6136hdfdasd', name: 'Michael Lee', photo: '' },
      text: {
        advantages: 'Great gym with excellent equipment',
        disadvantages: 'A bit crowded during peak hours',
        comment: 'Would recommend for serious fitness enthusiasts',
      },
      rating: 4,
      likes: 6,
      dislikes: 1,
      date: new Date('1995-12-17T03:24:00'),
    },
    {
      author: { id: '6136dasdaasd', name: 'Nancy Chen', photo: '' },
      text: {
        advantages: 'Delicious food and great ambiance',
        disadvantages: 'Service was a bit slow',
        comment: 'Highly recommend for a date night',
      },
      rating: 4,
      likes: 12,
      dislikes: 0,
      date: new Date('1995-12-17T03:24:00'),
    },
    {
      author: { id: '6136dczxczasd', name: 'David Kim', photo: '' },

      text: {
        advantages: 'Great customer service and fast shipment',
        disadvantages: 'product was a bit overpriced',
        comment: 'Overall, satisfied with the purchase',
      },
      rating: 3,
      likes: 2,
      dislikes: 1,
      date: new Date('1995-12-17T03:24:00'),
    },
    {
      author: { id: '61dasdaw36dasd', name: 'Lisa Johnson', photo: '' },

      text: {
        advantages: 'Beautiful and spacious apartment',
        disadvantages: 'A bit noisy due to nearby construction',
        comment: 'Overall, a great place to live',
      },
      rating: 4,
      likes: 8,
      dislikes: 0,
      date: new Date('1995-12-17T03:24:00'),
    },
    {
      author: { id: 'dasdawd', name: 'Jane Johnson', photo: '' },

      text: {
        advantages: 'Excellent restaurant with amazing food',
        disadvantages: 'Prices are a bit higher than average',
        comment: 'Great place for special occasions',
      },
      rating: 5,
      likes: 27,
      dislikes: 1,
      date: new Date('1995-12-17T03:24:00'),
    },
    {
      author: { id: 'dax', name: 'Alex Johnsond', photo: '' },

      text: {
        advantages: 'Excellent sound quality and ease of use',
        disadvantages: 'Expensive',
        comment: 'Highly recommended for music lovers',
      },
      rating: 5,
      likes: 5,
      dislikes: 0,
      date: new Date('1995-12-17T03:24:00'),
    },
  ],
  sellerId: '2d65dx3zs463',
};
