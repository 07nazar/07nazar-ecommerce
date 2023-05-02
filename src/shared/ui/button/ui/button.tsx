import { FC, ReactNode, SyntheticEvent } from 'react';

export interface ButtonProps {
  children: ReactNode;
  onClick?: (e: SyntheticEvent) => void;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  size = 'md',
  className = '',
}) => {
  const disabledStyles = disabled
    ? 'disabled:bg-gray-light disabled:hover:cursor-not-allowed'
    : '';

  return (
    <button
      type={'button'}
      disabled={disabled}
      className={`base-button ${className} ${size} ${disabledStyles}`}
      onClick={onClick}>
      {children}
    </button>
  );
};
