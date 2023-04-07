import { FC } from 'react';

import { Checkbox } from 'shared/ui/Checkbox';
import { Dropdown } from 'shared/ui/Dropdown';

import { useSelectedCheckbox } from '../../model';

export const ConditionsBlock: FC = () => {
  const [conditionSelected, handleConditionChange] = useSelectedCheckbox();

  const conditions = [
    {
      label: 'Any',
      value: 'any',
    },
    { label: 'Refurbished', value: 'refurbished' },
    { label: 'Brand new', value: 'brand-new' },
    { label: 'Old items', value: 'old-items' },
  ];

  return (
    <Dropdown maxItems={5} title={'Condition'} className={'gap-2'}>
      {conditions.map(option => (
        <Checkbox
          key={option.value}
          circle
          checkedValue={option.value}
          value={option.value}
          isChecked={conditionSelected.includes(option.value)}
          onChange={handleConditionChange}>
          {option.label}
        </Checkbox>
      ))}
    </Dropdown>
  );
};
