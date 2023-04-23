import { productTypes } from 'entities/Product';
import { userTypes } from 'entities/User';

import img from '../assets/phone.png';

export const productFromServer: productTypes.ProductType = {
  id: 'das2wtgv412',
  name: 'product name',
  deliveryCost: '0',
  category: ['phone'],
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
      author: { name: 'John Smith', photo: '' },
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
      author: { name: 'Jane Doe', photo: '' },
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
      author: { name: 'Alex Johnson', photo: '' },
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
      author: { name: 'Emily Brown', photo: '' },
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
      author: { name: 'Mike Wilson', photo: '' },
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
      author: { name: 'Sarah Johnson', photo: '' },
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
      author: { name: 'Michael Lee', photo: '' },
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
      author: { name: 'Nancy Chen', photo: '' },
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
      author: { name: 'David Kim', photo: '' },

      text: {
        advantages: 'Great customer service and fast shipment',
        disadvantages: 'Product was a bit overpriced',
        comment: 'Overall, satisfied with the purchase',
      },
      rating: 3,
      likes: 2,
      dislikes: 1,
      date: new Date('1995-12-17T03:24:00'),
    },
    {
      author: { name: 'Lisa Johnson', photo: '' },

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
      author: { name: 'Jane Johnson', photo: '' },

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
      author: { name: 'Alex Johnsond', photo: '' },

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

export const sellerFromServer: userTypes.SellerType = {
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

export const productsRelated: productTypes.ProductMinType[] = [
  {
    id: '1dasda622v3',
    mainPhoto: { url: img, thumbUrl: '' },
    name: 'Xiaomi Redmi 86 Original',
    price: { current: 32 },
  },
  {
    id: '1dasda622v3',
    mainPhoto: { url: img, thumbUrl: '' },
    name: 'Xiaomi Redmi 85 Original',
    price: { current: 32 },
  },
  {
    id: '1dasda622v3',
    mainPhoto: { url: img, thumbUrl: '' },
    name: 'Xiaomi Redmi 84 Original',
    price: { current: 32 },
  },
  {
    id: '1dasda622v3',
    mainPhoto: { url: img, thumbUrl: '' },
    name: 'Xiaomi Redmi 83 Original',
    price: { current: 32 },
  },
  {
    id: '1dasda622v3',
    mainPhoto: { url: img, thumbUrl: '' },
    name: 'Xiaomi Redmi 82 Original',
    price: { current: 32 },
  },
  {
    id: '1dasda622v3',
    mainPhoto: { url: img, thumbUrl: '' },
    name: 'Xiaomi Redmi 841 Original',
    price: { current: 32 },
  },
];

export const productsLikes: productTypes.ProductMinType[] = [
  {
    id: '1dasda622v3',
    mainPhoto: { url: img, thumbUrl: '' },
    name: 'Xiaomi Redmi 5 Original',
    price: { current: 32 },
  },
  {
    id: '1dasda622v3',
    mainPhoto: { url: img, thumbUrl: '' },
    name: 'Xiaomi Redmi 84Original',
    price: { current: 32 },
  },
  {
    id: '1dasda622v3',
    mainPhoto: { url: img, thumbUrl: '' },
    name: 'Xiaomi Redmi 3 Original',
    price: { current: 32 },
  },
  {
    id: '1dasda622v3',
    mainPhoto: { url: img, thumbUrl: '' },
    name: 'Xiaomi Redmi 2 Original',
    price: { current: 32 },
  },
  {
    id: '1dasda622v3',
    mainPhoto: { url: img, thumbUrl: '' },
    name: 'Xiaomi Redmi das Original',
    price: { current: 32, old: 99 },
  },
];
