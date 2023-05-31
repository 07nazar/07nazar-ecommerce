import { FC } from 'react';

import { BaseAuthForm, TypeInputItem } from 'shared/ui/form';

import { resetPasswordSchema } from './model';

type TypeFormProps = {
  inputsData: TypeInputItem[];
};

export const ResetPasswordForm: FC<TypeFormProps> = ({ inputsData }) => (
  <div className={'flex justify-center items-center h-full'}>
    <BaseAuthForm
      validationSchema={resetPasswordSchema}
      initialValues={{ newPasswoard: '', confirmPasswoard: '' }}
      inputItems={inputsData}
      buttonValue={'Reset'}
      formHeader={{
        title: 'Reset Passwoard 🔒',
        subTitle:
          'Your new password must be different from previously used passwords',
      }}
      formFooter={{
        footerLink: {
          text: 'Back to login',
          to: '/',
        },
      }}
    />
  </div>
);
