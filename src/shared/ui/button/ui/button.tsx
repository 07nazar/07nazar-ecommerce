import { FC, ReactNode, SyntheticEvent } from 'react';

export interface ButtonProps {
  children: ReactNode;
  type?: 'button' | 'submit';
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
  type = 'button',
}) => {
  const disabledStyles = disabled
    ? 'disabled:bg-gray-light disabled:hover:cursor-not-allowed'
    : '';

  return (
    <button
      type={type === 'button' ? 'button' : 'submit'}
      disabled={disabled}
      className={`base-button ${className} ${size} ${disabledStyles}`}
      onClick={onClick}>
      {children}
    </button>
  );
};
