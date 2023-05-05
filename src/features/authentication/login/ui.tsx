import { FC } from 'react';

import { BaseAuthForm, TypeInputItem } from 'shared/ui/form';

import { loginSchema } from './model/login-form-schema';

type TypeFormProps = {
  inputsData: TypeInputItem[];
};

export const LoginForm: FC<TypeFormProps> = ({ inputsData }) => (
  <div className={'flex justify-center items-center h-full'}>
    <BaseAuthForm
      validationSchema={loginSchema}
      checkBoxAndLink={{
        classNames: 'flex justify-between mb-5',
        checkBox: {
          label: 'Remember Me',
        },
        link: {
          text: 'Forgot Password?',
          to: 'forgot-password',
        },
      }}
      initialValues={{ email: '', password: '' }}
      inputItems={inputsData}
      onSubmitHandler={() => 1}
      buttonValue={'Login'}
      formHeader={{
        subTitle: 'Make your app management easy and fun!',
        title: 'Adventure starts here 🚀',
      }}
      formFooter={{
        footerText: 'New on our platform?',
        footerLink: 'Create an account',
      }}
    />
  </div>
);
