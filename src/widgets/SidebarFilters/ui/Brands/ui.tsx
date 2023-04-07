import { FC } from 'react';

import { Checkbox } from 'shared/ui/Checkbox';
import { Dropdown } from 'shared/ui/Dropdown';

import { useSelectedCheckbox } from '../../model';

export const BrandsBlock: FC = () => {
  const [brandsSelected, handleBrandsChange] = useSelectedCheckbox();

  const brands = [
    {
      label: 'Samsung',
      value: 'samsung',
    },
    { label: 'Apple', value: 'apple' },
    { label: 'Huawei', value: 'huawei' },
    { label: 'Pocco', value: 'pocco' },
    { label: 'Lenovo', value: 'lenovo' },
    { label: 'HTC', value: 'htc' },
    { label: 'Oppo', value: 'oppo' },
  ];

  return (
    <Dropdown maxItems={5} title={'Brands'} className={'gap-2'}>
      {brands.map(option => (
        <Checkbox
          key={option.value}
          value={option.value}
          isChecked={brandsSelected.includes(option.value)}
          onChange={handleBrandsChange}>
          {option.label}
        </Checkbox>
      ))}
    </Dropdown>
  );
};
