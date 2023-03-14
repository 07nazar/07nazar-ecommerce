import {
  FC,
  ReactNode,
  Dispatch,
  SetStateAction,
  MouseEvent,
  useState,
  useCallback,
} from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

import Menu from './Menu';

interface IItem {
  id: number;
  text: string;
  subTitle?: string;
  children?: IItem[];
}

interface MenuItemProps {
  children: ReactNode;
  item: IItem;
  disabled?: boolean;
  active: boolean;
  isMulti?: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  onClickOptionHandler?: (value: string) => void;
  setSelectedItems?: Dispatch<SetStateAction<IItem[]>>;
}

export const MenuItem: FC<MenuItemProps> = ({
  children,
  active,
  item,
  disabled = false,
  setSelectedItems,
  isMulti = false,
  setOpen,
  onClickOptionHandler,
}) => {
  const [isHover, setIsHover] = useState(false);

  const selectWithMulti = useCallback(() => {
    if (setSelectedItems) {
      setSelectedItems(prev => {
        const index = prev.findIndex(
          selectedItem => selectedItem.id === item.id
        );

        return index !== -1
          ? prev.filter(selectedItem => selectedItem.id !== item.id)
          : [...prev, item];
      });
    }
  }, [setSelectedItems, item]);

  const selectWithoutMulti = useCallback(() => {
    if (setSelectedItems) {
      setSelectedItems([item]);
      setOpen(false);
    }
  }, [setSelectedItems, setOpen, item]);

  const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (onClickOptionHandler) {
      onClickOptionHandler(item.text);
    }

    return isMulti ? selectWithMulti() : selectWithoutMulti();
  };

  const handleMenuHover = () => {
    setIsHover(true);
  };

  const handleMenuLeave = () => {
    setIsHover(false);
  };

  return (
    <div
      onMouseEnter={handleMenuHover}
      onMouseLeave={handleMenuLeave}
      className='w-full'>
      <button
        disabled={disabled}
        onClick={(e: MouseEvent<HTMLButtonElement>) => onClickHandler(e)}
        className={`flex flex-col w-full p-[16px] ${
          active ? 'bg-gray-pale' : ''
        }`}>
        {children}
        {item.children && (
          <MdOutlineKeyboardArrowRight className='absolute top-1/2 translate-y-[-50%] right-1' />
        )}
      </button>
      {item.children && isHover && (
        <div className='absolute w-[130%] top-0 left-full bg-white border-gray-200'>
          <Menu isOpen={true}>
            {item.children.map(child => (
              <MenuItem
                key={child.id}
                active={false}
                isMulti={false}
                item={child}
                setOpen={setOpen}>
                <Link to={child.text}>
                  <p>{child.text}</p>
                  {child.children && (
                    <MdOutlineKeyboardArrowRight className='absolute top-1/2 translate-y-[-50%] right-1' />
                  )}
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </div>
      )}
    </div>
  );
};
