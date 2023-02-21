import { useState } from 'react'
import { Button, InputGroup, MenuItem, Search, Select } from 'shared/ui'

interface IItem {
  id: number
  text: string
  subTitle?: string
}

const items: IItem[] = [
  { id: 1, text: 'text', subTitle: 'title' },
  { id: 2, text: 'text2', subTitle: 'title2' },
  { id: 3, text: 'text3', subTitle: 'title3' },
]

export const HeaderSearch = () => {
  const [isOpen, setOpen] = useState(false)
  const [selectedItems, setSelectedItems] = useState<IItem[]>([])
  const isMulti = true

  return (
    <div>
      <InputGroup className="w-full mt-7 border rounded-md border-blue">
        <Search />
        <Select
          isOpen={isOpen}
          selectedValue={selectedItems}
          className="min-w-[145px]"
          setOpen={setOpen}
          isPill={false}>
          {items.map((item) => {
            return (
              <MenuItem
                active={selectedItems.includes(item)}
                isMulti={false}
                item={item}
                setOpen={setOpen}
                setSelectedItems={setSelectedItems}
                key={item.id}>
                <span>{item.text}</span>
              </MenuItem>
            )
          })}
        </Select>
        <Button className="">BUTTON</Button>
      </InputGroup>
    </div>
  )
}
