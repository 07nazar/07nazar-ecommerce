import { FC, SyntheticEvent, ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  rounded?: "rounded-md" | "rounded-lg";
  onClick?: (e: SyntheticEvent) => void;
  size?: "sm" | "md" | "lg";
  textColor?: "white" | "blue" | string;
  color?: "primary" | "light";
  disabled?: boolean;
  className?: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  rounded,
  onClick,
  size = "md",
  color = "primary",
  textColor = "white",
  disabled = false,
  className = "",
}) => {
  const disabledStyles = disabled
    ? "disabled:bg-gray-light disabled:hover:cursor-not-allowed"
    : "";

  return (
    <button
      disabled={disabled}
      className={`${className} ${size} ${
        rounded || ""
      } text-${textColor} bg-${color} 
      outline-none focus-visible:ring-1 ${disabledStyles}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
