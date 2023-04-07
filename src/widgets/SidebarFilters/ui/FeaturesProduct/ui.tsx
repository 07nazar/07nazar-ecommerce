import { FC } from 'react';

import { Checkbox } from 'shared/ui/Checkbox';
import { Dropdown } from 'shared/ui/Dropdown';

import { useSelectedCheckbox } from '../../model';

export const FeaturesBlock: FC = () => {
  const [featuresSelected, handleFeaturesChange] = useSelectedCheckbox();

  const features = [
    {
      label: 'Metallic',
      value: 'metallic',
    },
    { label: 'Plastic cover', value: 'plastic-cover' },
    { label: '8GB Ram', value: '8gb-ram' },
    { label: 'Super power', value: 'super-power' },
    { label: 'Large Memory', value: 'large-memory' },
    { label: 'Large battery', value: 'large-battery' },
  ];

  return (
    <Dropdown maxItems={5} title={'Features'} className={'gap-2'}>
      {features.map(option => (
        <Checkbox
          key={option.value}
          value={option.value}
          isChecked={featuresSelected.includes(option.value)}
          onChange={handleFeaturesChange}>
          {option.label}
        </Checkbox>
      ))}
    </Dropdown>
  );
};
