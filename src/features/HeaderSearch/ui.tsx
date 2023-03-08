import { useState } from "react";

import { Button } from "shared/ui/Button";
import { InputGroup } from "shared/ui/Input";
import { Search } from "shared/ui/Search";
import { MenuItem, Select } from "shared/ui/Select";

interface IItem {
  id: number;
  text: string;
  subTitle?: string;
}

const items: IItem[] = [
  { id: 1, text: "text", subTitle: "title" },
  { id: 2, text: "text2", subTitle: "title2" },
  { id: 3, text: "text3", subTitle: "title3" },
];

export const HeaderSearch = () => {
  const [isOpen, setOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<IItem[]>([]);

  return (
    <InputGroup className={"w-[650px]"}>
      <Search className="border border-blue border-r-0 grow" />
      <Select
        menuClassName=""
        isOpen={isOpen}
        selectedValue={selectedItems}
        className="border border-blue min-w-[145px]"
        setOpen={setOpen}
        isPill={false}
        defaultValue="All categories"
      >
        {items.map((item) => (
          <MenuItem
            active={selectedItems.includes(item)}
            isMulti={false}
            item={item}
            setOpen={setOpen}
            setSelectedItems={setSelectedItems}
            key={item.id}
          >
            <span>{item.text}</span>
          </MenuItem>
        ))}
      </Select>
      <Button className={"rounded-none"}>Search</Button>
    </InputGroup>
  );
};
