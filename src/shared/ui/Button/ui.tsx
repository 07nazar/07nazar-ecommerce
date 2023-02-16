import { FC, SyntheticEvent, ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  onClick?: (e: SyntheticEvent) => void
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'light'
  border?: string
  disabled?: boolean
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  size = 'md',
  color = 'primary',
  border = '',
  disabled = false,
}) => (
  <button
    disabled={disabled}
    className={`${border} bg-${color} ${size} ${
      color === 'primary' ? 'text-white' : 'text-blue'
    } justify-items-center text-center shrink-0 disabled:bg-gray-light disabled:hover:cursor-not-allowed`}
    onClick={onClick}>
    <span className={`relative z-10  text-center ${Array.isArray(children) ? `gap-${size}` : ''}`}>
      {children}
    </span>
  </button>
)
