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

import Menu from './Menu';

interface IItem {
  id: number;
  text: string;
  subTitle?: string;
  to?: string;
  children?: IItem[];
}

interface MenuItemProps {
  children: ReactNode;
  item: IItem;
  disabled?: boolean;
  active: boolean;
  isMulti?: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  onClickOptionHandler?: (item: IItem) => void;
  setSelectedItems?: Dispatch<SetStateAction<IItem[]>>;
}

const MenuButton: FC<MenuItemProps> = ({
  children,
  item,
  active,
  disabled = false,
  setSelectedItems,
  isMulti = false,
  setOpen,
  onClickOptionHandler,
}) => {
  const select = useCallback(() => {
    if (setSelectedItems) {
      setSelectedItems(prev => {
        const index = prev.findIndex(
          selectedItem => selectedItem.id === item.id
        );
        const isSelected = index !== -1;

        if (isMulti) {
          return isSelected
            ? prev.filter(selectedItem => selectedItem.id !== item.id)
            : [...prev, item];
        }
        return isSelected ? prev : [item];
      });
      setOpen(false);
    }
  }, [setSelectedItems, setOpen, item, isMulti]);

  const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClickOptionHandler?.(item);
    select();
  };

  return (
    <button
      disabled={disabled}
      onClick={onClickHandler}
      className={`flex flex-col w-full p-4 ${active ? 'bg-gray-pale' : ''}`}>
      {children}
      {item.children && (
        <MdOutlineKeyboardArrowRight
          className={'absolute top-1/2 translate-y-[-50%] right-1'}
        />
      )}
    </button>
  );
};

export const MenuItem: FC<MenuItemProps> = ({
  active,
  item,
  disabled = false,
  setSelectedItems,
  isMulti = false,
  setOpen,
  onClickOptionHandler,
}) => {
  const [isHover, setIsHover] = useState(false);

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
      className={'w-full relative'}>
      <MenuButton
        active={active}
        item={item}
        setOpen={setOpen}
        disabled={disabled}
        setSelectedItems={setSelectedItems}
        isMulti={isMulti}
        onClickOptionHandler={onClickOptionHandler}>
        {item.text}
      </MenuButton>
      {item.children && isHover && (
        <div
          className={
            'absolute w-[130%] top-0 left-full bg-white border-gray-200'
          }>
          <Menu isOpen={true}>
            {item.children.map(child => (
              <MenuItem
                key={child.id}
                active={false}
                isMulti={false}
                item={child}
                onClickOptionHandler={onClickOptionHandler}
                setOpen={setOpen}>
                <MenuButton
                  active={active}
                  item={child}
                  setOpen={setOpen}
                  disabled={disabled}
                  setSelectedItems={setSelectedItems}
                  isMulti={isMulti}
                  onClickOptionHandler={onClickOptionHandler}>
                  {child.text}
                </MenuButton>
              </MenuItem>
            ))}
          </Menu>
        </div>
      )}
    </div>
  );
};
