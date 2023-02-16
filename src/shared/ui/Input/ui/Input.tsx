import { ChangeEvent, FC, useState } from "react";

interface InputProps {
  placeholder: string;
  border?: string;
  borderColor?: string;
}

export const Input: FC<InputProps> = ({
  placeholder,
  border,
  borderColor = "border-gray-medium",
}) => {
  const [text, setText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <input
      className={`border ${border} ${borderColor} w-full px-[10px] py-[9.5px] leading-[19px] text-black placeholder:text-gray-hot outline-none focus:ring-1`}
      type="text"
      onChange={handleChange}
      value={text}
      placeholder={placeholder}
    />
  );
};
