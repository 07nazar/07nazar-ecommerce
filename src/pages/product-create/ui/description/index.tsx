import { ErrorMessage, Field, FormikValues, useFormikContext } from 'formik';

import { Textarea } from 'shared/ui/textarea';

export const Description = () => {
  const { values, handleChange, handleBlur } = useFormikContext<FormikValues>();

  return (
    <div className={'flex w-full flex-col gap-2'}>
      <p className={'whitespace-nowrap'}>Description</p>
      <Textarea
        name={'description'}
        value={values.description}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={'Description'}
        className={
          'scrollbar-y h-96 overflow-y-scroll rounded-md border border-gray-medium p-3'
        }
      />
      <ErrorMessage
        name={'description'}
        render={msg => <p className={'text-red'}>{msg}</p>}
      />
    </div>
  );
};
