import { ChangeEvent, FC, ReactNode } from "react";

interface InputProps {
  value: string | number;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
  className?: string;
  icon?: ReactNode;
}

export const Input: FC<InputProps> = ({
  value,
  handleChange,
  placeholder,
  type = "text",
  className = "",
  icon,
}) => (
  <div className={"relative w-full h-full"}>
    <span
      className={
        "absolute pl-2.5 top-[50%] translate-y-[-50%] pointer-events-none"
      }
    >
      {icon}
    </span>
    <input
      className={`base-input ${className} ${icon ? "pl-9" : ""}`}
      type={type}
      onChange={handleChange}
      value={value}
      placeholder={placeholder}
    />
  </div>
);
