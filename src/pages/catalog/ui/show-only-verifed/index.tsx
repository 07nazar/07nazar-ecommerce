import { FC } from 'react';

import { sidebarFiltersModel } from 'widgets/sidebar-filters';
import { useMatchMedia } from 'shared/lib';
import { Checkbox } from 'shared/ui/checkbox';

export const ShowOnlyVerified: FC = () => {
  const { isDesktop } = useMatchMedia();
  const [conditionSelected, handleConditionChange] =
    sidebarFiltersModel.useSelectedCheckbox('verified');

  if (!isDesktop) {
    return null;
  }

  return (
    <Checkbox
      checkedValue={'true'}
      isChecked={conditionSelected.includes('true')}
      value={'true'}
      onChange={handleConditionChange}>
      <p>Verified only</p>
    </Checkbox>
  );
};
