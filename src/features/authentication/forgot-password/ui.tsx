import { FC } from 'react';

import { BaseAuthForm, TypeInputItem } from 'shared/ui/form';

import { forgotPasswordSchema } from './model';

type TypeFormProps = {
  inputsData: TypeInputItem[];
};

export const ForgotPasswordForm: FC<TypeFormProps> = ({ inputsData }) => (
  <div className={'flex justify-center items-center h-full'}>
    <BaseAuthForm
      validationSchema={forgotPasswordSchema}
      initialValues={{ email: '' }}
      inputItems={inputsData}
      onSubmitHandler={() => 1}
      buttonValue={'Forgot'}
      formHeader={{
        title: 'Forgot Passwoard 🔒',
        subTitle:
          "Enter your email and we'll send you instructions to reset your password",
      }}
      formFooter={{
        footerLink: 'Back to login',
      }}
    />
  </div>
);
