import { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

type DivLinkProps = {
  to: string;
  ariaLabel: string;
  children: ReactNode;
  className?: string;
};

export const DivLink: FC<DivLinkProps> = ({
  to,
  children,
  ariaLabel,
  className = '',
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <div
      onClick={handleClick}
      onKeyDown={handleClick}
      tabIndex={0}
      role={'button'}
      aria-label={ariaLabel}
      className={`cursor-pointer ${className}`}>
      {children}
    </div>
  );
};
