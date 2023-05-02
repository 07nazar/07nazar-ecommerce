import {FC, useState} from 'react';

import {useMatchMedia} from 'shared/lib';
import {Button} from 'shared/ui/button';
import {InputGroup} from 'shared/ui/input';
import {Search} from 'shared/ui/search';
import {ISelectedValue, MenuItem, Select} from 'shared/ui/select';

const items: ISelectedValue[] = [
  { id: 1, text: 'text', subTitle: 'title' },
  { id: 2, text: 'text2', subTitle: 'title2' },
  { id: 3, text: 'text3', subTitle: 'title3' },
];

export const HeaderSearch: FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<ISelectedValue[]>([]);
  const { isDesktop, isMobile } = useMatchMedia();

  if (isMobile) {
    return (
      <Search
        className={
          'mt-2.5 order-3 h-[40px] bg-[#F7FAFC] border border-gray-medium grow rounded-md'
        }
      />
    );
  }

  return (
    <InputGroup className={'max-w-[650px] w-full'}>
      <Search className={'border border-blue border-r-0 grow'} />
      {isDesktop && (
        <Select
          menuClassName={''}
          isOpen={isOpen}
          selectedValue={selectedItems}
          className={'border border-blue whitespace-nowrap w-36 shrink-0'}
          setOpen={setOpen}
          isPill={false}
          defaultValue={'All categories'}>
          {items.map(item => (
            <MenuItem
              active={selectedItems.includes(item)}
              isMulti={false}
              item={item}
              setOpen={setOpen}
              setSelectedItems={setSelectedItems}
              key={item.id}>
              <span>{item.text}</span>
            </MenuItem>
          ))}
        </Select>
      )}
      <Button className={'bg-primary rounded-none'}>Search</Button>
    </InputGroup>
  );
};
