import { FC, ReactNode } from "react";

interface InputGroupProps {
  children: ReactNode;
}

export const InputGroup: FC<InputGroupProps> = ({ children }) => (
  <form className={"flex h-10"}>{children}</form>
);
