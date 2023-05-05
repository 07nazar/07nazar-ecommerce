import { FC, ReactElement, ReactNode } from 'react';

import { TabBtnProps } from './tab-btn';

type OrientationTabs = {
  orientation: 'vertical' | 'horizontal';
};

type TabsProps = OrientationTabs & {
  children: ReactNode;
  buttons: ReactElement<TabBtnProps>[];
  border?: string;
  className?: string;
};

export const Tabs: FC<TabsProps> = ({
  children,
  buttons,
  orientation = 'vertical',
  border = '',
  className = '',
}) => {
  const tabsWrapperStyles = `inline-flex w-full  ${border} rounded-md ${
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
