import { FC, InputHTMLAttributes, ReactNode } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
}

export const Input: FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  type = 'text',
  className = '',
  icon,
  min,
  max,
}) => (
  <div className={'relative w-full'}>
    <span
      className={
        'absolute pl-2.5 top-[50%] translate-y-[-50%] pointer-events-none'
      }>
      {icon}
    </span>
    <input
      className={`base-input ${className} ${icon ? 'pl-9' : ''}`}
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      min={min}
      max={max}
    />
  </div>
);
