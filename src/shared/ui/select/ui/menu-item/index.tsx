import { FC, useState } from 'react';

import Menu from './menu';
import { MenuButton, MenuItemProps, MenuItemType } from './menu-button';

export type { MenuItemType };

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
        <div className={'absolute top-0 left-full bg-white border-gray-200'}>
          <Menu isOpen>
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
