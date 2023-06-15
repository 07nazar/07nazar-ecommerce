import { FormikValues, useFormikContext } from 'formik';

import { Button } from 'shared/ui/button';

export const SubmitButton = () => {
  const { handleSubmit } = useFormikContext<FormikValues>();

  return (
    <Button
      className={
        'mx-auto mb-8 flex justify-center bg-green px-10 duration-300 hover:saturate-150 sm:w-full'
      }
      onClick={() => handleSubmit()}>
      Submit
    </Button>
  );
};
