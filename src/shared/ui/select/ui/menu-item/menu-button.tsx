import {
  Dispatch,
  FC,
  MouseEvent,
  ReactNode,
  SetStateAction,
  useCallback,
} from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

export type MenuItemType = {
  id: number;
  text: string | JSX.Element;
  subTitle?: string;
  to?: string;
  children?: MenuItemType[];
};

export type MenuItemProps = {
  children: ReactNode;
  item: MenuItemType;
  disabled?: boolean;
  active: boolean;
  isMulti?: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  onClickOptionHandler?: (item: MenuItemType) => void;
  setSelectedItems?: Dispatch<SetStateAction<MenuItemType[]>>;
};

export const MenuButton: FC<MenuItemProps> = ({
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
      type={'button'}
      disabled={disabled}
      onClick={onClickHandler}
      className={`flex items-center justify-between w-full p-4 lg:p-3 text-left ${
        active ? 'bg-gray-pale' : ''
      } `}>
      {children}
      {item.children && (
        <MdOutlineKeyboardArrowRight className={'w-[16px] ml-2  shrink-0'} />
      )}
    </button>
  );
};
