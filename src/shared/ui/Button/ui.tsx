import { FC, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  color?: "primary" | "light";
};

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  size = "md",
  color = "primary",
}) => (
  <button
    className={`bg-${color} ${size} ${
      color === "primary" ? "text-white" : "text-blue"
    }`}
    onClick={onClick}
  >
    <span
      className={`relative z-10 inline-flex ${
        Array.isArray(children) ? `gap-${size}` : ""
      }`}
    >
      {children}
    </span>
  </button>
);
