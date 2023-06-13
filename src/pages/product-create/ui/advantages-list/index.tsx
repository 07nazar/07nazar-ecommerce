/* eslint-disable react/no-array-index-key */
import { ErrorMessage, Field, FieldArray, useFormikContext } from 'formik';
import { ChangeEvent } from 'react';

import { productTypes } from 'entities/product';
import { Button } from 'shared/ui/button';
import { Input } from 'shared/ui/input';

export const AdvantagesList = () => {
  const { values } = useFormikContext<productTypes.NewProductType>();

  return (
    <FieldArray
      name={'advantages'}
      render={({ push, remove }) => (
        <div className={'mb-4 flex w-full flex-col gap-4'}>
          <p>Advantages</p>
          {values.advantages.map((_, index) => (
            <div
              key={`advantages-list-${index}`}
              className={
                'scrollbar flex w-2/3 gap-4 overflow-x-scroll md:w-full'
              }>
              <div className={'w-full'}>
                <Field
                  name={`advantages.${index}`}
                  placeholder={'Product advantage...'}
                  className={'w-full rounded-md border border-gray-medium p-3'}
                />
                <ErrorMessage
                  name={`advantages.${index}`}
                  render={msg => <p className={'text-red'}>{msg}</p>}
                />
              </div>
              <Button
                onClick={() => remove(index)}
                className={
                  'self-start border border-red bg-white text-xl text-red duration-300 hover:bg-red hover:text-white'
                }>
                -
              </Button>
            </div>
          ))}
          {values.advantages.length < 5 && (
            <Button
              className={
                'w-fit border border-blue bg-white  text-blue duration-300 hover:bg-blue hover:text-white'
              }
              onClick={() => push('')}>
              Add new advantage
            </Button>
          )}
        </div>
      )}
    />
  );
};

/*

export const AdvantagesList = () => {
  const { values, setFieldValue } =
    useFormikContext<productTypes.NewProductType>();

  return (
    <FieldArray
      name={'advantages'}
      render={({ push, remove }) => (
        <div className={'mb-4 flex w-full flex-col gap-4'}>
          <p>Advantages</p>
          {values.advantages.map((_, index) => (
            <div
              key={`advantages-list-${index}`}
              className={
                'scrollbar flex w-2/3 gap-4 overflow-x-scroll md:w-full'
              }>
              <Input
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setFieldValue(`advantages.${index}`, e.target.value)
                }
                name={`advantages.${index}`}
                value={values.advantages[index]}
                placeholder={'Product advantage...'}
                className={'w-full rounded-md border border-gray-medium py-4'}
              />
              <Button
                onClick={() => remove(index)}
                className={
                  'border border-red bg-white text-2xl text-red duration-300 hover:bg-red hover:text-white'
                }>
                -
              </Button>
            </div>
          ))}
          {values.advantages.length < 5 && (
            <Button
              className={
                'w-fit border border-blue bg-white  text-blue duration-300 hover:bg-blue hover:text-white'
              }
              onClick={() => push('')}>
              Add new advantage
            </Button>
          )}
        </div>
      )}
    />
  );
};

 */
