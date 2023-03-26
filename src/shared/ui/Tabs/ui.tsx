import { useSpring, animated } from '@react-spring/web';
import { FC, ReactElement, ReactNode } from 'react';

import { colors } from '../../lib';

interface OrientationTabs {
  orientation: 'vertical' | 'horizontal';
}

interface ITabs extends OrientationTabs {
  children: ReactNode;
  buttons: ReactElement<ITabBtnProps>[];
  border?: string;
  className?: string;
}

interface ITabBtnProps {
  children: ReactNode;
  index: number;
  activeTab: number;
  setActiveTab: (index: number) => void;
  isPill?: boolean;
  outlined?: boolean;
  className?: string;
}

export const TabBtn: FC<ITabBtnProps> = ({
  children,
  index,
  activeTab,
  setActiveTab,
  isPill = true,
  outlined = false,
  className = '',
}) => {
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

  return (
    <>
      <animated.button
        onClick={() => setActiveTab(index)}
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

export const Tabs: FC<ITabs> = ({
  children,
  buttons,
  orientation = 'vertical',
  border = '',
  className = '',
}) => {
  const tabsWrapperStyles = `inline-flex w-full ${border} rounded-md ${
    orientation === 'horizontal' ? 'flex-col' : 'flex-row'
  }`;
  const tabsStyles = `relative flex grow ${
    orientation === 'horizontal' ? 'flex-row pb-2.5' : 'flex-col pr-2.5'
  }`;

  return (
    <div className={`${tabsWrapperStyles}`}>
      <div className={`${tabsStyles} ${className}`}>{buttons}</div>
      {children}
    </div>
  );
};
