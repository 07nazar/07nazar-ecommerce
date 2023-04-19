import { useState } from 'react';
import { AiOutlineDelete, AiOutlineEdit, AiOutlineEye } from 'react-icons/ai';

import { AppLink } from 'shared/ui/AppLink';
import { Button } from 'shared/ui/Button';
import { Checkbox } from 'shared/ui/Checkbox';

export type TableItemLinkType = {
  name: string | number;
  sortable?: boolean;
  to?: string;
  className: string;
  width: string;
};

type TableItemProps<T> = {
  item: T;
};

export const TableItem = <
  T extends { [key: string]: string | number | TableItemLinkType }
>({
  item,
}: TableItemProps<T>) => {
  const [isActive, setActive] = useState(false);

  // TODO добавить тултипы при наводке на actions

  return (
    <div
      className={`flex w-full p-2 border-t border-gray-medium hover:bg-gray-light duration-300 ${
        isActive ? 'bg-lightblue' : ''
      }`}>
      <Checkbox isChecked={isActive} onChange={() => setActive(!isActive)}>
        <></>
      </Checkbox>

      {Object.entries(item).map(([key, value]) => {
        if (typeof value === 'object') {
          if (value.to) {
            return (
              <AppLink
                key={`table-link-${key}`}
                to={value.to}
                className={`${value.className || ''} + ${value.width || ''}`}>
                {value.name}
              </AppLink>
            );
          }

          return (
            <p
              key={`table-text-${key}`}
              className={`${value.className || ''} + ${value.width || ''}`}>
              {value.name}
            </p>
          );
        }

        return null;
      })}

      <div className={'w-1/12 flex'}>
        <Button className={'text-black p-1.5 hover:text-blue duration-300'}>
          <AiOutlineEye />
        </Button>
        <Button className={'text-black p-1.5 hover:text-green duration-300'}>
          <AiOutlineEdit />
        </Button>
        <Button className={'text-black p-1.5 hover:text-red duration-300'}>
          <AiOutlineDelete />
        </Button>
      </div>
    </div>
  );
};
