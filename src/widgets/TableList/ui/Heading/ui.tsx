import { FC, useState } from 'react';

import { Checkbox } from 'shared/ui/Checkbox';

import type { SortActiveType } from '../SortButton';

import { SortButton } from '../SortButton';

type HeadingKey = {
  name: string;
  sortable: boolean;
  width: string;
};

type TableHeadingProps = {
  headingKeys: HeadingKey[];
  activeSort: SortActiveType;
  handleSortChange: (active: SortActiveType) => void;
};

export const TableHeading: FC<TableHeadingProps> = ({
  headingKeys,
  activeSort,
  handleSortChange,
}) => {
  const [isActive, setActive] = useState<boolean>(false);

  return (
    <div
      className={`flex w-full h-10 leading-10 px-2 duration-300 border border-b-0 border-gray-medium rounded-t-md text-gray-dark font-medium uppercase`}>
      <Checkbox isChecked={isActive} onChange={() => setActive(!isActive)}>
        <></>
      </Checkbox>

      {headingKeys &&
        headingKeys.map(({ name, width, sortable }) => {
          if (sortable) {
            return (
              <SortButton
                key={`sort-button-${name}`}
                className={width}
                title={name}
                onClick={handleSortChange}
                isActive={activeSort.name === name.toString().toLowerCase()}
                activeSort={activeSort}
              />
            );
          }

          return (
            <p key={`sort-button-text-${name}`} className={width}>
              {name}
            </p>
          );
        })}
      <div className={'w-1/12'}>actions</div>
    </div>
  );
};
