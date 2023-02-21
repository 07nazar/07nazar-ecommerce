/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-internal-modules */
import { MouseEvent, useState } from "react";
import "./styles/index.css";

import { Button, Checkbox, InputGroup, Select } from "shared/ui";
import { MenuItem } from "shared/ui/Select/ui/Menu";

import { Search } from "features/Search";

import { withProviders } from "./providers";

interface IItem {
  id: number;
  text: string;
  subTitle?: string;
}

const items: IItem[] = [
  { id: 1, text: "text1", subTitle: "subtitle" },
  { id: 2, text: "text2", subTitle: "subtitle" },
  { id: 3, text: "text3", subTitle: "subtitle" },
];

const App = () => {
  const [isOpen, setOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<IItem[]>([]);
  const isMulti = true;

  return (
    <div className="container">
      <Select
        selectedValue={selectedItems}
        isOpen={isOpen}
        isPill={false}
        setOpen={setOpen}
      >
        {items.map((item: IItem) => (
          <MenuItem
            active={selectedItems.includes(item)}
            key={item.text}
            item={item}
            isMulti={isMulti}
            setSelectedItems={setSelectedItems}
            setOpen={setOpen}
          >
            {/* <span>{item.text}</span>
            <span>{item.subTitle}</span> */}
            <Checkbox
              onClick={(event: MouseEvent<HTMLElement>) => {
                event.stopPropagation();
              }}
              onChange={() => setSelectedItems((prev) => [...prev, item])}
              isChecked={selectedItems.includes(item)}
            >
              {item.text}
            </Checkbox>
          </MenuItem>
        ))}
      </Select>

      <InputGroup className={"w-full"}>
        <Search className={"border border-blue"} />
        <Button>test</Button>
        <Button>test</Button>
      </InputGroup>
    </div>
  );
};

export default withProviders(App);

// =================================================
// const onClickHandler = (item: IItem) => {
//   setSelectedItems((prev) => {
//     const isSelected = prev.some((selectedItem) => selectedItem.id === item.id)
//     return isSelected
//       ? prev.filter((selectedItem) => selectedItem.id !== item.id)
//       : [...prev, item]
//   })
// }
// =================================================

/* <Checkbox
              onChange={() => {
                onClickHandler(item)
              }}
              onClick={(event: MouseEvent<HTMLElement>) => {
                event.stopPropagation()
              }}
              isChecked={selectedItems.includes(item)}
              key={item.id}>
              {item.text}
            </Checkbox> */

// const onClickHandler = (item: IItem) => {
//   setSelected(item)
//   setOpen(false)
// }

/* <Select selectedValue={selected.text} isOpen={isOpen} setOpen={setOpen}>
{items.map((item) => (
  <MenuItem
    active={selected.id === item.id}
    key={item.text}
    onSelectOption={() => onClickHandler(item)}>
    <span>{item.text}</span>
    <span>{item.subTitle}</span>
  </MenuItem>
))}
</Select> */
