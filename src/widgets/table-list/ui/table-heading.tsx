import { FC, useState } from 'react';

import { Checkbox } from 'shared/ui/checkbox';

import { SortButton } from './sort-button';

type HeadingKey = {
  name: string;
  sortable: boolean;
  width: string;
};

type TableHeadingProps = {
  headingKeys: HeadingKey[];
  activeSort: string;
  setActiveSort: (newEl: string) => void;
};

export const TableHeading: FC<TableHeadingProps> = ({
  headingKeys,
  activeSort,
  setActiveSort,
}) => {
  const [isActive, setActive] = useState<boolean>(false);
  const sortSplitted = activeSort.split('-');

  const handleSortChange = (active: string) => {
    setActiveSort(active);
  };

  return (
    <div
      className={`flex w-full h-10 leading-10 px-2 duration-300 border border-b-0 border-gray-medium rounded-t-md text-gray-dark font-medium uppercase`}>
      <Checkbox isChecked={isActive} onChange={() => setActive(!isActive)} />

      {headingKeys &&
        headingKeys.map(({ name, width, sortable }) => {
          if (sortable) {
            return (
              <SortButton
                key={`sort-button-${name}`}
                className={width}
                title={name}
                onClick={handleSortChange}
                isActive={sortSplitted[0] === name.toString().toLowerCase()}
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
