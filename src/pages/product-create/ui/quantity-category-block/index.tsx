import { ErrorMessage, Field, FormikValues, useFormikContext } from 'formik';

import { SelectCategory } from '../select-category';

export const QuantityCategoryBlock = () => {
  const { setFieldValue } = useFormikContext<FormikValues>();

  return (
    <div className={'flex w-full flex-wrap gap-2'}>
      <div className={'flex items-center gap-2'}>
        <div>
          <p className={'whitespace-nowrap'}>Enter quantity: </p>
          <ErrorMessage
            name={'quantity'}
            render={msg => <p className={'text-red'}>{msg}</p>}
          />
        </div>
        <Field
          type={'number'}
          name={'quantity'}
          placeholder={'10000'}
          className={'max-w-3xl rounded-md border border-gray-medium py-4 '}
        />
      </div>
      <div>
        <SelectCategory setFieldValue={setFieldValue} />
        <ErrorMessage
          name={'category'}
          render={msg => <p className={'text-red'}>{msg}</p>}
        />
      </div>
    </div>
  );
};
