import {
  ChangeEvent,
  RefObject,
  KeyboardEvent,
  ClipboardEvent,
  SetStateAction,
} from 'react';

import type { TypeMyFormValues } from '../ui';

// TODO при заполненом инпуте при нажитие на ввод значение перезаписывает текущий инпут и делает фокус на следующий

export const setNextInput = (
  e: ChangeEvent<HTMLInputElement>,
  inputs: Record<string, RefObject<HTMLInputElement>>,
  currInputIndex: number,
  handleChange: any
) => {
  const inputsArray = Object.entries(inputs);

  if (e.target.value.length === 1) {
    handleChange(e);
    const nextInput = inputsArray[currInputIndex + 1];
    nextInput?.[1]?.current?.focus();
  } else if (e.target.value.length >= 1) {
    const nextInput = inputsArray[currInputIndex + 1];
    nextInput?.[1]?.current?.focus();
  }
};

export const setPrevInput = (
  e: KeyboardEvent<HTMLInputElement>,
  inputs: Record<string, RefObject<HTMLInputElement>>,
  currInputIndex: number,
  setFieldValue: any,
  fieldName: string
) => {
  const inputsArray = Object.entries(inputs);
  setFieldValue(fieldName, '');
  if (e.code === 'Backspace' && (e.target as HTMLInputElement).value === '') {
    const prevInput = inputsArray[currInputIndex - 1];
    prevInput?.[1]?.current?.focus();
  }
};

export const onPasteInput = (
  e: ClipboardEvent<HTMLInputElement>,
  setValues: (values: SetStateAction<TypeMyFormValues>) => void
) => {
  e.preventDefault();
  const pastedText = e.clipboardData.getData('text');

  const valuesArray = pastedText.split('');

  const resultObj: TypeMyFormValues = {
    code1: '',
    code2: '',
    code3: '',
    code4: '',
    code5: '',
    code6: '',
  };

  for (let i = 0; i < 6; i += 1) {
    const key = `code${i + 1}`;
    resultObj[key] = valuesArray[i];
  }

  setValues(resultObj);
};
