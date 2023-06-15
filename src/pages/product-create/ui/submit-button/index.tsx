import { FormikValues, useFormikContext } from 'formik';

import { Button } from 'shared/ui/button';
import { Loader } from 'shared/ui/loader';

type SubmitButtonProps = {
  isLoading: boolean;
};
export const SubmitButton = ({ isLoading }: SubmitButtonProps) => {
  const { handleSubmit } = useFormikContext<FormikValues>();

  return (
    <>
      <Button
        disabled={isLoading}
        className={
          'mx-auto mb-8 flex justify-center bg-green px-10 duration-300 hover:saturate-150 disabled:bg-green/70 sm:w-full'
        }
        onClick={() => handleSubmit()}>
        Submit
      </Button>
      {isLoading && <Loader className={'mx-auto mb-6'} />}
    </>
  );
};
