import { FC, ReactNode, Dispatch, SetStateAction, MouseEvent } from 'react'

interface IItem {
  id: number
  text: string
  subTitle?: string
}

interface MenuItemProps {
  children: ReactNode
  item: IItem
  active: boolean
  isMulti: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  setSelectedItems: Dispatch<SetStateAction<IItem[]>>
}

export const MenuItem: FC<MenuItemProps> = ({
  children,
  active,
  item,
  setSelectedItems,
  isMulti = true,
  setOpen,
}) => {
  const selectWithMulti = () => {
    setSelectedItems((prev: IItem[]) => {
      const isSelected = prev.some((selectedItem: IItem) => selectedItem.id === item.id)

      return isSelected
        ? prev.filter((selectedItem: IItem) => selectedItem.id !== item.id)
        : [...prev, item]
    })
  }

  const selectWithOutMulti = () => {
    setSelectedItems([item])
    setOpen(false)
  }

  const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    return isMulti ? selectWithMulti() : selectWithOutMulti()
  }

  return (
    <button
      onClick={(e: MouseEvent<HTMLButtonElement>) => onClickHandler(e)}
      className={`flex flex-col w-full p-[16px] ${active ? 'bg-gray-pale' : ''}`}>
      {children}
    </button>
  )
}
