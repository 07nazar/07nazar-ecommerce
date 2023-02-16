import { FC, ReactNode } from 'react'

interface InputGroupProps {
  children: ReactNode
  styles?: string
}

export const InputGroup: FC<InputGroupProps> = ({ children, styles }) => (
  <form className={`inline-flex h-10 ${styles}`}>{children}</form>
)
