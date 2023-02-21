import { FC, ReactNode } from "react";

type TextGroupProps = {
  children: ReactNode;
  className?: string;
};

export const TextGroup: FC<TextGroupProps> = ({
  children,
  className = "border rounded-md bg-gray-medium",
}) => (
  <p className={`${className} flex items-center text-gray-hot px-2`}>
    {children}
  </p>
);
