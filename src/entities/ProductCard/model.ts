import { ProductReviewType } from '../Review';

type ProductMainPhotoType = {
  url: string;
  thumbUrl: string;
};

type ProductAdditionalPhotoType = {
  url: string;
};

type ProductSpecificationType = {
  name: string;
  value: string;
};

type ProductPriceType = {
  current: number;
  old?: number;
};

export type ProductType = {
  name: string;
  category: string[]; // ['phones', 'mobile']
  quantity: number;
  mainPhoto: ProductMainPhotoType;
  price: ProductPriceType;
  rating: number;
  sold: number;
  description: string;
  orders: number;
  additionalPhotos: ProductAdditionalPhotoType[];
  specifications: ProductSpecificationType[];
  params: ProductSpecificationType[];
  advantages: string[];
  reviewsCount: number;
  reviews: ProductReviewType[];
  sellerId: string;
};

type Menu = {
  id: number;
  text: string;
  to: string;
  children?: Menu[];
};

const menus: Menu = {
  id: 1,
  text: 'Home',
  to: '/',
  children: [
    {
      id: 2,
      text: 'Electronics',
      to: '/electronics',
      children: [
        {
          id: 3,
          text: 'Computers',
          to: '/computers',
          children: [
            {
              id: 4,
              text: 'Laptops',
              to: '/laptops',
            },
            {
              id: 5,
              text: 'Desktops',
              to: '/desktops',
            },
          ],
        },
        {
          id: 6,
          text: 'Phones',
          to: '/phones',
          children: [
            {
              id: 7,
              text: 'Smartphones',
              to: '/smartphones',
            },
            {
              id: 8,
              text: 'Feature Phones',
              to: '/feature-phones',
            },
          ],
        },
        {
          id: 9,
          text: 'Wearable Devices',
          to: '/wearable-devices',
        },
      ],
    },
    {
      id: 10,
      text: 'Clothing',
      to: '/clothing',
      children: [
        {
          id: 11,
          text: 'Men',
          to: '/clothing/men',
          children: [
            {
              id: 12,
              text: 'T-Shirts',
              to: '/clothing/men/t-shirts',
            },
            {
              id: 13,
              text: 'Jeans',
              to: '/clothing/men/jeans',
            },
          ],
        },
        {
          id: 14,
          text: 'Women',
          to: '/clothing/women',
          children: [
            {
              id: 15,
              text: 'Dresses',
              to: '/clothing/women/dresses',
            },
            {
              id: 16,
              text: 'Skirts',
              to: '/clothing/women/skirts',
            },
          ],
        },
      ],
    },
    {
      id: 17,
      text: 'Furniture',
      to: '/furniture',
      children: [
        {
          id: 18,
          text: 'Living Room Furniture',
          to: '/furniture/living-room-furniture',
          children: [
            {
              id: 19,
              text: 'Sofas',
              to: '/furniture/living-room-furniture/sofas',
            },
            {
              id: 20,
              text: 'Chairs',
              to: '/furniture/living-room-furniture/chairs',
            },
          ],
        },
        {
          id: 21,
          text: 'Bedroom Furniture',
          to: '/furniture/bedroom-furniture',
          children: [
            {
              id: 22,
              text: 'Beds',
              to: '/furniture/bedroom-furniture/beds',
            },
            {
              id: 23,
              text: 'Dressers',
              to: '/furniture/bedroom-furniture/dressers',
            },
            {
              id: 24,
              text: 'Nightstands',
              to: '/furniture/bedroom-furniture/nightstands',
            },
          ],
        },
        {
          id: 25,
          text: 'Home Goods',
          to: '/home-goods',
          children: [
            {
              id: 31,
              text: 'Kitchen & Dining',
              to: '/home-goods/kitchen-dining',
              children: [
                {
                  id: 301,
                  text: 'Cookware',
                  to: '/home-goods/kitchen-dining/cookware',
                },
                {
                  id: 302,
                  text: 'Utensils',
                  to: '/home-goods/kitchen-dining/utensils',
                },
                {
                  id: 303,
                  text: 'Dinnerware',
                  to: '/home-goods/kitchen-dining/dinnerware',
                },
              ],
            },
            {
              id: 32,
              text: 'Bath',
              to: '/home-goods/bath',
              children: [
                {
                  id: 321,
                  text: 'Towels',
                  to: '/home-goods/bath/towels',
                },
                {
                  id: 322,
                  text: 'Bathroom Accessories',
                  to: '/home-goods/bath/bathroom-accessories',
                },
              ],
            },
          ],
        },
        {
          id: 26,
          text: 'Kids',
          to: '/kids',
          children: [
            {
              id: 41,
              text: 'Toys & Games',
              to: '/kids/toys-games',
            },
            {
              id: 42,
              text: 'Clothing',
              to: '/kids/clothing',
              children: [
                {
                  id: 421,
                  text: 'Boys',
                  to: '/kids/clothing/boys',
                },
                {
                  id: 422,
                  text: 'Girls',
                  to: '/kids/clothing/girls',
                },
              ],
            },
            {
              id: 43,
              text: 'Baby',
              to: '/baby',
              children: [
                {
                  id: 431,
                  text: 'Nursery Furniture',
                  to: '/nursery-furniture',
                },
                {
                  id: 432,
                  text: 'Strollers',
                  to: '/strollers',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
function getUrlById(obj: Menu, id: number, parentUrl = ''): string | null {
  if (!obj.children) {
    return null;
  }

  for (let i = 0; i < obj.children.length; i += 1) {
    const item = obj.children[i];
    const url = parentUrl + item.to;

    if (item.id === id) {
      return url;
    }

    if (item.children) {
      const childUrl = getUrlById(item, id, url);
      if (childUrl) {
        return childUrl;
      }
    }
  }

  return null;
}
const url = getUrlById(menus, 8);
console.log(url);

export type ProductMinType = Pick<ProductType, 'name' | 'mainPhoto' | 'price'>;
