import backgroundImg1 from '../assets/bg1.png';
import backgroundImg2 from '../assets/bg2.png';

type Item = {
  title: string;
  to: string;
  price: string;
  image: string;
};

type Category = {
  title: string;
  image: string;
  link: string;
  items: Item[];
};

export const categoriesHome: Category[] = [
  {
    title: 'Home and outdoor',
    image: backgroundImg1,
    link: '/outdoor',
    items: [
      {
        title: 'Soft chairs',
        to: '/test',
        price: '1111',
        image:
          'https://static.eldorado.ru/photos/mv/Big/20083580bb.jpg/resize/380x240/',
      },
      {
        title: 'Soft chairs 2',
        to: '/test',
        price: '2222',
        image:
          'https://static.eldorado.ru/photos/mv/Big/20083580bb.jpg/resize/380x240/',
      },
      {
        title: 'Soft chairs 3',
        to: '/test',
        price: '4124',
        image:
          'https://static.eldorado.ru/photos/mv/Big/20083580bb.jpg/resize/380x240/',
      },
      {
        title: 'Soft chairs 4',
        to: '/test',
        price: '321',
        image:
          'https://static.eldorado.ru/photos/mv/Big/20083580bb.jpg/resize/380x240/',
      },
      {
        title: 'Soft chairs 5',
        to: '/test',
        price: '515',
        image:
          'https://static.eldorado.ru/photos/mv/Big/20083580bb.jpg/resize/380x240/',
      },
      {
        title: 'Soft chairs 6666',
        to: '/test',
        price: '645',
        image:
          'https://static.eldorado.ru/photos/mv/Big/20083580bb.jpg/resize/380x240/',
      },
      {
        title: 'Soft chairs 7',
        to: '/test',
        price: '19',
        image:
          'https://static.eldorado.ru/photos/mv/Big/20083580bb.jpg/resize/380x240/',
      },
      {
        title: 'Soft chairs 8',
        to: '/test',
        price: '19',
        image:
          'https://static.eldorado.ru/photos/mv/Big/20083580bb.jpg/resize/380x240/',
      },
    ],
  },
  {
    title: 'Consumer electronics and gadgets',
    image: backgroundImg2,
    link: '/electronics',
    items: [
      {
        title: 'Smart watches',
        to: '/test',
        price: '19',
        image:
          'https://static.eldorado.ru/photos/mv/Big/20083580bb.jpg/resize/380x240/',
      },
      {
        title: 'Smart watches 2',
        to: '/test',
        price: '19',
        image:
          'https://static.eldorado.ru/photos/mv/Big/20083580bb.jpg/resize/380x240/',
      },
      {
        title: 'Smart watches 3',
        to: '/test',
        price: '19',
        image:
          'https://static.eldorado.ru/photos/mv/Big/20083580bb.jpg/resize/380x240/',
      },
      {
        title: 'Smart watches 4',
        to: '/test',
        price: '19',
        image:
          'https://static.eldorado.ru/photos/mv/Big/20083580bb.jpg/resize/380x240/',
      },
      {
        title: 'Smart watches 5',
        to: '/test',
        price: '19',
        image:
          'https://static.eldorado.ru/photos/mv/Big/20083580bb.jpg/resize/380x240/',
      },
      {
        title: 'Smart watches 6',
        to: '/test',
        price: '19',
        image:
          'https://static.eldorado.ru/photos/mv/Big/20083580bb.jpg/resize/380x240/',
      },
      {
        title: 'Smart watches 7',
        to: '/test',
        price: '19',
        image:
          'https://static.eldorado.ru/photos/mv/Big/20083580bb.jpg/resize/380x240/',
      },
      {
        title: 'Smart watches 8',
        to: '/test',
        price: '19',
        image:
          'https://static.eldorado.ru/photos/mv/Big/20083580bb.jpg/resize/380x240/',
      },
    ],
  },
];
