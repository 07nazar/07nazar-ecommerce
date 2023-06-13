import { ErrorMessage, Field } from 'formik';

export const NameDeliveryBlock = () => (
  <div className={'flex w-full gap-4 md:w-full'}>
    <div className={'flex w-4/5 flex-col gap-2'}>
      <p className={'whitespace-nowrap'}>Name</p>
      <Field
        name={'name'}
        placeholder={'Example name'}
        className={'w-full rounded-md border border-gray-medium p-3 '}
      />
      <ErrorMessage
        name={'name'}
        render={msg => <p className={'text-red'}>{msg}</p>}
      />
    </div>

    <div className={'flex w-2/5 flex-col gap-2'}>
      <p className={'whitespace-nowrap'}>Delivery cost</p>
      <Field
        type={'number'}
        name={'deliveryCost'}
        placeholder={'799'}
        className={'w-36 rounded-md border border-gray-medium p-3 sm:w-24'}
      />
      <ErrorMessage
        name={'deliveryCost'}
        render={msg => <p className={'text-red'}>{msg}</p>}
      />
    </div>
  </div>
);
