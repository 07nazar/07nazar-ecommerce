import { ChangeEventHandler, useState } from 'react';

import { generateStringURL } from '../lib';

import { useSortParams } from './useSortParams';

type SelectedObject = {
  [name: string]: string[];
};

type UseSelectedCheckboxReturnType = [
  string[],
  ChangeEventHandler<HTMLInputElement>
];

export const useSelectedCheckbox = (
  name: string
): UseSelectedCheckboxReturnType => {
  const [selected, setSelected] = useState<SelectedObject>({ [name]: [] });

  useSortParams(name, selected[name]);

  // TODO при перезагрузке не отмечает чекбоксы которые записаны в строке url

  const handleCheckboxChange: ChangeEventHandler<HTMLInputElement> = event => {
    const { value, checked } = event.target;
    const generatedValue = generateStringURL(value);
    setSelected(previousState => {
      const previousSelected = previousState[name];
      let newSelected;
      if (checked) {
        newSelected = [...previousSelected, generatedValue];
      } else {
        newSelected = previousSelected.filter(val => val !== generatedValue);
      }

      return { [name]: newSelected };
    });
  };

  return [selected[name], handleCheckboxChange];
};
