import { animated, useSpring } from '@react-spring/web';
import { FC, ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { colors } from '../../../lib';

export type TabBtnProps = {
  children: ReactNode;
  index: number;
  activeTab: number;
  setActiveTab: (index: number) => void;
  isPill?: boolean;
  outlined?: boolean;
  className?: string;
};

export const TabBtn: FC<TabBtnProps> = ({
  children,
  index,
  activeTab,
  setActiveTab,
  isPill = true,
  outlined = false,
  className = '',
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = activeTab === index;

  const animation = useSpring({
    borderColor: isActive && outlined ? `${colors.blue}` : '#fff',
    backgroundColor: isActive && isPill ? `${colors.lightblue}` : '#fff',
    config: {
      duration: 600,
    },
  });

  const nonActiveTextStyles = isPill ? 'text-gray-dark' : 'text-gray-hot';
  const activeTextStyles = isPill ? 'bg-lightblue text-black' : 'text-blue';

  const buttonStyles = `p-2.5 lg:p-1.5 whitespace-nowrap rounded-md ${
    isActive ? activeTextStyles : nonActiveTextStyles
  }`;
  const borderStyles =
    isActive && outlined ? 'border-b-2 border-blue rounded-none z-10' : '';

  const handleClick = () => {
    navigate(location.pathname + location.search, {
      state: { tab: index },
    });

    setActiveTab(index);
  };

  return (
    <>
      <animated.button
        onClick={handleClick}
        style={animation}
        className={`${buttonStyles} ${borderStyles} ${className} leading-5`}>
        {children}
      </animated.button>
      {outlined && (
        <span
          className={
            'absolute left-0 right-0 bottom-[10px] h-[2px] bg-gray-medium z-[2]'
          }
        />
      )}
    </>
  );
};
