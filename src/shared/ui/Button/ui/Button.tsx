import { FC, SyntheticEvent, ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  onClick?: (e: SyntheticEvent) => void;
  color?: "primary" | "light" | string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  color = "primary",
  disabled = false,
  size = "md",
  className = "",
}) => {
  const disabledStyles = disabled
    ? "disabled:bg-gray-light disabled:hover:cursor-not-allowed"
    : "";

  return (
    <button
      disabled={disabled}
      className={`base-button ${className} bg-${color} ${size} ${disabledStyles}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
