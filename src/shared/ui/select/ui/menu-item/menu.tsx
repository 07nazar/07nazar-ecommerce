import { animated, useTransition } from '@react-spring/web';
import { FC, ReactNode } from 'react';

interface IMenu {
  isOpen: boolean;
  menuClassName?: string;
  children: ReactNode;
}

const Menu: FC<IMenu> = ({ isOpen, menuClassName = '', children }) => {
  const menuAnimation = useTransition(isOpen, {
    from: { opacity: 0, transform: 'translateY(-10px)' },
    enter: { opacity: 1, transform: 'translateY(0%)' },
    leave: { opacity: 0, transform: 'translateY(-10px)' },
  });
  return (
    <>
      {menuAnimation((style, isOpenProp) => (
        <animated.div style={style} className={`${menuClassName} z-50 w-fit`}>
          {isOpenProp && (
            <div
              className={
                'flex flex-col items-start whitespace-nowrap rounded-md border border-gray-pale bg-white shadow-md'
              }>
              {children}
            </div>
          )}
        </animated.div>
      ))}
    </>
  );
};

export default Menu;
