import { FC, ReactNode } from "react";

type TextGroupProps = {
  children: ReactNode;
  border?: string;
  borderColor?: string;
};

export const TextGroup: FC<TextGroupProps> = ({
  children,
  border = "rounded-md",
  borderColor = "bg-gray-medium",
}) => (
  <p
    className={`flex items-center border ${border} ${borderColor} text-gray-hot px-2`}
  >
    {children}
  </p>
);
