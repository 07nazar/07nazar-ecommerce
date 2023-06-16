import { ChangeEventHandler, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { generateStringURL } from '../lib';

import { useSortParams } from './use-sort-params';

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
  const { search } = useLocation();
  const [selected, setSelected] = useState<SelectedObject>({ [name]: [] });
  const [sortValues, setSortValues] = useState<string[]>([]);

  useSortParams(name, sortValues);

  const searchParams = new URLSearchParams(search);
  const valuesFromURL = searchParams.getAll(name);
  const resultArray = valuesFromURL.flatMap(item => item.split(' '));

  useEffect(() => {
    setSelected(() => ({ [name]: [...selected[name], ...resultArray] }));
  }, []);

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

    setSortValues(prevSortValues => {
      if (checked) {
        return [...prevSortValues, generatedValue];
      }
      return prevSortValues.filter(val => val !== generatedValue);
    });
  };

  return [selected[name], handleCheckboxChange];
};
