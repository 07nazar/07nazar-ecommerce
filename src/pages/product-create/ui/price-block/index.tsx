import { ErrorMessage, Field } from 'formik';

export const PriceBlock = () => (
  <div className={'flex w-full gap-2'}>
    <div className={'flex flex-col gap-2'}>
      <p className={'whitespace-nowrap'}>Old price</p>
      <Field
        type={'number'}
        name={'price.old'}
        placeholder={'79'}
        className={'rounded-md border border-gray-medium p-3'}
      />
      <ErrorMessage
        name={'price.old'}
        render={msg => <p className={'text-red'}>{msg}</p>}
      />
    </div>
    <div className={'flex flex-col gap-2'}>
      <p className={'whitespace-nowrap'}>Current price</p>
      <Field
        type={'number'}
        name={'price.current'}
        placeholder={'59'}
        className={'rounded-md border border-gray-medium p-3'}
      />
      <ErrorMessage
        name={'price.current'}
        render={msg => <p className={'text-red'}>{msg}</p>}
      />
    </div>
  </div>
);
