import { ChangeEventHandler, useState } from 'react';

type UseSelectedCheckboxReturnType = [
  string[],
  ChangeEventHandler<HTMLInputElement>
];

export const useSelectedCheckbox = (): UseSelectedCheckboxReturnType => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleCheckboxChange: ChangeEventHandler<HTMLInputElement> = e => {
    const { value, checked } = e.target;

    if (checked) {
      setSelected([...selected, value]);
    } else {
      setSelected(selected.filter(val => val !== value));
    }
  };

  return [selected, handleCheckboxChange];
};
