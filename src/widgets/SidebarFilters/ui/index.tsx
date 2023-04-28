import { FC } from 'react';

import { BaseFilter } from './BaseFilter';
import { CategoryBlock } from './CategoryBlock';
import { PriceRangeBlock } from './PriceRange';

const data = [
  {
    title: 'Brands',
    items: ['Samsung', 'Apple', 'Huawei', 'Pocco', 'Lenovo', 'HTC', 'Oppo'],
  },
  {
    title: 'Features',
    items: [
      'Metallic',
      'Plastic cover',
      '8GB Ram',
      'Super power',
      'Large Memory',
      'Large battery',
    ],
  },
  {
    title: 'Condition',
    items: ['Any', 'Refurbished', 'Brand new', 'Old items'],
  },
  {
    title: 'Ratings',
    items: ['5', '4', '3', '2', '1'],
  },
  {
    title: 'Price',
    items: [],
  },
];

const orders = ['Features', 'Brands', 'Condition', 'Price', 'Ratings'];

export const SidebarFilters: FC = () => (
  <>
    <CategoryBlock />
    {orders.map(key => {
      const filter = data.find(val => val.title === key);

      if (!filter) {
        return null;
      }

      if (filter.title === 'Price') {
        return <PriceRangeBlock key={filter.title} />;
      }

      return (
        <BaseFilter
          key={filter.title}
          title={filter.title}
          items={filter.items}
        />
      );
    })}
  </>
);
