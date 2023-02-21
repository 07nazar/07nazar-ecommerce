import { ChangeEvent, FC } from 'react'

interface InputProps {
  value: string | number;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
}

export const Input: FC<InputProps> = ({
                                        value,
                                        handleChange,
                                        placeholder,
                                        className = "",
                                      }) => (
    <input
        className={`${className} w-full px-[10px] py-[9.5px] leading-[19px] text-black placeholder:text-gray-hot outline-none`}
        type="text"
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
    />
);
