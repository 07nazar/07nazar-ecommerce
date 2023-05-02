import { FC } from 'react';

import { Dropdown } from 'shared/ui/dropdown';
import { AppLink } from 'shared/ui/links';

export const CategoryBlock: FC = () => {
  const categoriesLinks = [
    {
      title: 'Mobile accessory',
      to: 'mobiles/accessory',
    },
    {
      title: 'Electronics',
      to: 'electronics',
    },
    {
      title: 'Smartphones ',
      to: 'mobiles/smartphones',
    },
    {
      title: 'Modern tech',
      to: 'modern',
    },
    {
      title: 'Clothings',
      to: 'clothings',
    },
  ];

  return (
    <Dropdown maxItems={3} title={'Category'}>
      {categoriesLinks.map(category => (
        <AppLink
          key={category.title}
          to={category.to}
          className={'text-gray-dark py-1.5'}>
          {category.title}
        </AppLink>
      ))}
    </Dropdown>
  );
};
