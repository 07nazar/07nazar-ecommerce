import { FC, useEffect, useState } from 'react';
import { FaSortDown } from 'react-icons/fa';

type SortButtonProps = {
  className: string;
  title: string;
  activeSort: string;
  isActive: boolean;
  onClick: (newEl: string) => void;
};

export const SortButton: FC<SortButtonProps> = ({
  className,
  title,
  activeSort,
  isActive,
  onClick,
}) => {
  const [disabled, setDisabled] = useState<boolean>(!isActive);
  const [name, type] = activeSort.split('-');

  useEffect(() => {
    setDisabled(!isActive);
  }, [isActive]);

  const handleSortClick = () => {
    const newName = title.toLowerCase();
    let newType = 'asc';

    if (!disabled) {
      if (type === 'asc') {
        newType = 'desc';
      } else if (type === 'desc') {
        newType = 'none';
        setDisabled(true);
      }
    } else {
      setDisabled(false);
    }

    onClick(`${newName}-${newType}`);
  };

  return (
    <button
      type={'button'}
      className={`${className} group flex items-center`}
      onClick={handleSortClick}>
      <p className={'uppercase inline-block'}>{title}</p>
      <div
        className={`ml-1 opacity-0 h-full group-hover:opacity-100 ${
          !disabled ? 'opacity-100' : ''
        } group-hover:text-gray-hot duration-200`}>
        {name && (
          <FaSortDown
            className={`h-5 w-5 mt-1 ${
              disabled ? 'text-gray-medium' : 'text-black'
            }  ${
              type === 'desc' ? 'rotate-0 mt-1.5' : 'rotate-180 mt-3'
            } duration-200`}
          />
        )}
      </div>
    </button>
  );
};
