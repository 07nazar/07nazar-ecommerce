import { useState, FC } from 'react'
import { HiViewGrid } from 'react-icons/hi'
import { MdTableRows } from 'react-icons/md'

import { Button } from 'shared/ui/Button'
import { Checkbox } from 'shared/ui/Input'
import { MenuItem, Select } from 'shared/ui/Select'

interface IItem {
  id: number
  text: string
  subTitle?: string
  children?: IItem[]
}
interface IConrolPanelProps {
  itemsCount: number
  category: string
}

const items: IItem[] = [
  { id: 1, text: 'text1' },
  { id: 2, text: 'text2' },
  { id: 3, text: 'text3' },
  { id: 4, text: 'text4' },
  { id: 5, text: 'text5' },
]

export const ConrolPanel: FC<IConrolPanelProps> = ({ category = '', itemsCount = 0 }) => {
  const [isOpenSelect, setOpenSelect] = useState(false)
  const [selectedMenuItem, setSelectedMenuItem] = useState<IItem[]>([])
  const [isVerified, setIsVerified] = useState(false)

  const smartFloatRegex = /\B(?=(\d{3})+(?!\d))/g
  const numberWithSmartFloat = itemsCount.toString().replace(smartFloatRegex, ',')
  return (
    <div className="flex items-center gap-4 p-2.5 bg-white border rounded-md border-gray-medium">
      <p className="flex grow gap-1">
        {numberWithSmartFloat} items in <span className="font-medium">{category}</span>
      </p>

      <Checkbox isChecked={isVerified} onChange={() => setIsVerified(!isVerified)}>
        <p>Verified only</p>
      </Checkbox>

      <Select
        className="relative max-w-[171.81px] w-full border border-gray-medium rounded-md"
        menuClassName="absolute top-[40px] right-0"
        isOpen={isOpenSelect}
        selectedValue={selectedMenuItem}
        defaultValue="Featured"
        setOpen={setOpenSelect}>
        {items.map((item) => (
          <MenuItem
            setOpen={setOpenSelect}
            key={item.id}
            active={false}
            setSelectedItems={setSelectedMenuItem}
            item={item}>
            <p>{item.text}</p>
          </MenuItem>
        ))}
      </Select>

      <div>
        <Button color="light" className="p-[5px]">
          <HiViewGrid size={28} color="black" />
        </Button>
        <Button color="light" className="p-[5px]">
          <MdTableRows size={28} color="black" />
        </Button>
      </div>
    </div>
  )
}
