import { cloneElement, FC, ReactElement } from 'react';

import { ButtonProps } from './button';

interface ButtonGroupProps {
  children: ReactElement<ButtonProps>[];
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const styles = {
  sm: {
    left: 'rounded-l-md',
    right: 'rounded-r-md',
  },
  md: {
    left: 'rounded-l-md',
    right: 'rounded-r-md',
  },
  lg: {
    left: 'rounded-l-lg',
    right: 'rounded-r-lg',
  },
};

export const ButtonGroup: FC<ButtonGroupProps> = ({
  children,
  className,
  size = 'md',
}) => (
  <div className={`flex ${className}`}>
    {children.map((child, index) => {
      const borderLeft = index === 0 && size ? styles[size].left : '';
      const borderRight =
        index === children.length - 1 && size ? styles[size].right : '';

      return cloneElement(child, {
        className: `${borderLeft} ${borderRight} ${
          child.props.className || ''
        }`,
        size,
        key: `btn-${children.length}-${className?.length}`,
      });
    })}
  </div>
);
