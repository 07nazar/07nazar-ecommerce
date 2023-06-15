import { FC, HTMLProps } from 'react';

export const Textarea: FC<HTMLProps<HTMLTextAreaElement>> = ({
  className = '',
  name,
  value,
  onChange,
  onBlur,
  minLength,
  maxLength,
  placeholder,
}) => (
  <textarea
    minLength={minLength}
    maxLength={maxLength}
    name={name}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    className={`base-input resize-none ${className} scrollbar-y overflow-y-scroll`}
    placeholder={placeholder}
  />
);
