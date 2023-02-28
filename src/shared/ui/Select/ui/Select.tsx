import { FC, ReactNode, MouseEvent } from 'react'

import Menu from './Menu'
import SelectButton from './SelectButton'

interface ISelectedValue {
  id: number
  text: string
  subTitle?: string
}

interface ISelect {
  isPill?: boolean
  isOpen: boolean
  className: string
  setOpen: (isOpen: boolean) => void
  children: ReactNode
  selectedValue: ISelectedValue[] | ISelectedValue
  defaultValue?: string
  menuClassName?: string
}

export const Select: FC<ISelect> = ({
  isPill = false,
  isOpen,
  className = '',
  selectedValue,
  children,
  setOpen,
  defaultValue,
  menuClassName = '',
}) => {
  const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setOpen(!isOpen)
  }

  return (
    <div className={`relative ${className} flex flex-col`}>
      <SelectButton
        onClickHandler={(e: MouseEvent<HTMLButtonElement>) => onClickHandler(e)}
        isOpen={isOpen}
        selectedValue={selectedValue}
        isPill={isPill}
        defaultValue={defaultValue}
      />
      <Menu isOpen={isOpen} menuClassName={menuClassName}>
        {children}
      </Menu>
    </div>
  )
}
