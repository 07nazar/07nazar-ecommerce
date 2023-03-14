import { useState } from 'react';

import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { MenuItem, Select } from 'shared/ui/Select';

interface IItem {
  id: number;
  text: string;
  subTitle?: string;
}

const selectItems: IItem[] = [
  {
    id: 1,
    text: 'kilograms',
  },
  { id: 2124, text: 'tons', subTitle: 'title2' },
  { id: 312412, text: 'centners', subTitle: 'title3' },
];

export const RequestsForm = () => {
  const [{ firstInput, textField, quantity }, setInputValue] = useState({
    firstInput: '',
    textField: '',
    quantity: '',
  });
  const [selectedValue, setSelectedValue] = useState<IItem[]>([]);
  const [isOpen, setOpen] = useState(false);

  const onInputChange = (key: string, value: string) => {
    setInputValue(prev => ({ ...prev, [key]: value }));
  };

  return (
    <form
      className={
        'w-[491px] h-[346px] flex flex-col gap-5 justify-between p-5 bg-white rounded-md'
      }>
      <h3 className={'font-medium text-xl text-black'}>
        Send quote to suppliers
      </h3>

      <Input
        value={firstInput}
        onChange={e => onInputChange('firstInput', e.target.value)}
        className={'formInput'}
        placeholder={'What item you need?'}
      />
      <Input
        value={textField}
        onChange={e => onInputChange('textField', e.target.value)}
        className={'formInput'}
        placeholder={'Type more details'}
      />

      <div className={'flex items-start gap-2'}>
        <Input
          value={quantity}
          onChange={e => onInputChange('quantity', e.target.value)}
          className={'formInput max-w-[206px] '}
          placeholder={'Quantity'}
        />
        <Select
          menuClassName={'absolute top-12'}
          selectedValue={selectedValue}
          className={
            'max-w-[111px] w-full border rounded-md border-gray-medium'
          }
          isOpen={isOpen}
          defaultValue={'Pcs'}
          setOpen={setOpen}>
          {selectItems.map(item => (
            <MenuItem
              active={selectedValue.includes(item)}
              key={`${item.id}${item.text}`}
              item={item}
              setOpen={setOpen}
              setSelectedItems={setSelectedValue}>
              <span>{item.text}</span>
            </MenuItem>
          ))}
        </Select>
      </div>

      <Button className={'bg-primary max-w-[128px] w-full'}>
        Send inquiry
      </Button>
    </form>
  );
};
