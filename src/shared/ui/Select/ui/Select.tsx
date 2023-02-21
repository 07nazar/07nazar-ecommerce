import { useTransition, animated } from '@react-spring/web'
import { FC, ReactNode, MouseEvent } from 'react'

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
}

export const Select: FC<ISelect> = ({
  isPill = true,
  isOpen,
  className = '',
  selectedValue,
  children,
  setOpen,
}) => {
  const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setOpen(!isOpen)
  }

  const menuAnimation = useTransition(isOpen, {
    from: { opacity: 0, transform: 'translateY(-10px)' },
    enter: { opacity: 1, transform: 'translateY(0%)' },
    leave: { opacity: 0, transform: 'translateY(-10px)' },
  })

  return (
    <div className={`${className} flex flex-col`}>
      <SelectButton
        onClickHandler={(e: MouseEvent<HTMLButtonElement>) => onClickHandler(e)}
        isOpen={isOpen}
        selectedValue={selectedValue}
        isPill={isPill}
      />
      <div className="max-w-[314px] w-[100%] mb-10">
        {menuAnimation((style, isOpenProp) => (
          <animated.div style={style}>
            {isOpenProp && (
              <div className="flex flex-col items-start border border-gray-pale rounded-md shadow-md">
                {children}
              </div>
            )}
          </animated.div>
        ))}
      </div>
    </div>
  )
}
