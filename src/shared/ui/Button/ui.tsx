import { FC, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  color?: "primary" | "light";
  border?: string;
};

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  size = "md",
  color = "primary",
  border,
}) => (
  <button
    className={`${border} bg-${color} ${size} ${
      color === "primary" ? "text-white" : "text-blue"
    } justify-items-center text-center shrink-0`}
    onClick={onClick}
  >
    <span
      className={`relative z-10  text-center ${
        Array.isArray(children) ? `gap-${size}` : ""
      }`}
    >
      {children}
    </span>
  </button>
);
