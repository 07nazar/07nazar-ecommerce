import { FC } from 'react';

import { Checkbox } from 'shared/ui/Checkbox';
import { Dropdown } from 'shared/ui/Dropdown';

import { generateStringURL } from '../../lib';
import { useSelectedCheckbox } from '../../model';

type BaseFilterProps = { title: string; items: string[] };

export const BaseFilter: FC<BaseFilterProps> = ({ title, items }) => {
  const [conditionSelected, handleConditionChange] = useSelectedCheckbox(
    title.toLowerCase()
  );

  return (
    <Dropdown maxItems={5} title={title} className={'gap-2'}>
      {items.map(option => (
        <Checkbox
          key={option}
          circle
          checkedValue={option}
          value={option}
          isChecked={conditionSelected.includes(generateStringURL(option))}
          onChange={handleConditionChange}>
          {option}
        </Checkbox>
      ))}
    </Dropdown>
  );
};
