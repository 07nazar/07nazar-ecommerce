import { animated, useTransition } from '@react-spring/web';
import { FC, ReactNode } from 'react';

interface IMenu {
  isOpen: boolean;
  menuClassName?: string;
  children: ReactNode;
}

const Menu: FC<IMenu> = ({ isOpen, menuClassName, children }) => {
  const menuAnimation = useTransition(isOpen, {
    from: { opacity: 0, transform: 'translateY(-10px)' },
    enter: { opacity: 1, transform: 'translateY(0%)' },
    leave: { opacity: 0, transform: 'translateY(-10px)' },
  });
  return (
    <div className={`${menuClassName || ''} w-fit  z-50`}>
      {menuAnimation((style, isOpenProp) => (
        <animated.div style={style}>
          {isOpenProp && (
            <div
              className={
                'flex flex-col items-start border border-gray-pale rounded-md shadow-md bg-white whitespace-nowrap'
              }>
              {children}
            </div>
          )}
        </animated.div>
      ))}
    </div>
  );
};

export default Menu;
