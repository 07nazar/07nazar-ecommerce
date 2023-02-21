import { ChangeEvent, FC } from 'react'

interface InputProps {
  value: string | number
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  border?: string
  borderColor?: string
  styles?: string
}

export const Input: FC<InputProps> = ({
  value,
  handleChange,
  placeholder,
  border,
  borderColor = 'border-gray-medium',
  styles = '',
}) => (
  <input
    className={`${styles} ${border} ${borderColor} w-full px-[10px] py-[9.5px] leading-[19px] text-black placeholder:text-gray-hot outline-none`}
    type="text"
    onChange={handleChange}
    value={value}
    placeholder={placeholder}
  />
)
