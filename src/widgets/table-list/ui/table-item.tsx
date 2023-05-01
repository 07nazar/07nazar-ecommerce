import { FC, ReactNode, useState } from 'react';

import { AppLink } from 'shared/ui/appLink';
import { Checkbox } from 'shared/ui/checkbox';

export type TableItemLinkType = {
  name: string;
  sortable: boolean;
  className: string;
  width: string;
  id?: string;
  to?: string;
};

type TableItemProps = {
  item: Record<string, TableItemLinkType>;
  actions: ReactNode;
};

export const TableItem: FC<TableItemProps> = ({ item, actions }) => {
  const [isActive, setActive] = useState(false);

  // TODO добавить тултипы при наводке на actions
  return (
    <div
      className={`flex w-full p-2 border-t border-gray-medium hover:bg-gray-light duration-300 ${
        isActive ? 'bg-lightblue' : ''
      }`}>
      <Checkbox isChecked={isActive} onChange={() => setActive(!isActive)} />

      {Object.entries(item).map(([key, value]) => {
        if (value.to) {
          return (
            <AppLink
              key={`table-link-${key}`}
              to={`/${value.to}`}
              className={`${value.className} ${value.width}`}>
              {value.name}
            </AppLink>
          );
        }

        return (
          <p
            key={`table-text-${key}`}
            className={`${value.className} ${value.width}`}>
            {value.name}
          </p>
        );
      })}

      {actions}
    </div>
  );
};
