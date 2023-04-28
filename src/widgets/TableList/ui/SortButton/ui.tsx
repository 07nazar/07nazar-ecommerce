import { FC, useEffect, useState } from 'react';
import { FaSortDown } from 'react-icons/fa';

export type SortActiveType = { name: string; type: string };

type SortButtonProps = {
  className: string;
  title: string;
  activeSort: SortActiveType;
  isActive: boolean;
  onClick: (newEl: SortActiveType) => void;
};

export const SortButton: FC<SortButtonProps> = ({
  className,
  title,
  activeSort,
  isActive,
  onClick,
}) => {
  const [disabled, setDisabled] = useState<boolean>(!isActive);
  const { name: activeName, type: activeType } = activeSort;

  useEffect(() => {
    setDisabled(!isActive);
  }, [isActive]);

  const handleSortClick = () => {
    const name = title.toLowerCase();
    let type: SortActiveType['type'] = 'asc';

    if (!disabled) {
      if (activeType === 'asc') {
        type = 'desc';
      } else if (activeType === 'desc') {
        type = 'none';
        setDisabled(true);
      }
    } else {
      setDisabled(false);
    }
    onClick({ name, type });
  };

  return (
    <button
      className={`${className} group flex items-center`}
      onClick={handleSortClick}>
      <p className={'uppercase inline-block'}>{title}</p>
      <div
        className={`ml-1 opacity-0 h-full group-hover:opacity-100 ${
          !disabled ? 'opacity-100' : ''
        } group-hover:text-gray-hot duration-200`}>
        {activeName && (
          <FaSortDown
            className={`h-5 w-5 mt-1 ${
              disabled ? 'text-gray-medium' : 'text-black'
            }  ${
              activeType === 'desc' ? 'rotate-0 mt-1.5' : 'rotate-180 mt-3'
            } duration-200`}
          />
        )}
      </div>
    </button>
  );
};
