import { FC } from 'react';

import { BaseAuthForm, TypeInputItem } from 'shared/ui/form';

import { resetPasswordSchema } from './model/reset-password-form-scheme';

type TypeFormProps = {
  inputsData: TypeInputItem[];
};

export const ResetPasswordForm: FC<TypeFormProps> = ({ inputsData }) => (
  <div className={'flex justify-center items-center h-full'}>
    <BaseAuthForm
      validationSchema={resetPasswordSchema}
      initialValues={{ newPasswoard: '', confirmPasswoard: '' }}
      inputItems={inputsData}
      onSubmitHandler={() => 1}
      buttonValue={'Reset'}
      formHeader={{
        title: 'Reset Passwoard 🔒',
        subTitle:
          'Your new password must be different from previously used passwords',
      }}
      formFooter={{
        footerLink: 'Back to login',
      }}
    />
  </div>
);
