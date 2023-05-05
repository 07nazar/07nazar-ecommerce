import { FC } from 'react';

import { BaseAuthForm, TypeInputItem } from 'shared/ui/form';

import { registerSchema } from './model';

type TypeFormProps = {
  inputsData: TypeInputItem[];
};

export const RegisterForm: FC<TypeFormProps> = ({ inputsData }) => (
  <div className={'flex justify-center items-center h-full'}>
    <BaseAuthForm
      validationSchema={registerSchema}
      initialValues={{ userName: '', email: '', password: '' }}
      inputItems={inputsData}
      onSubmitHandler={() => 1}
      buttonValue={'Register'}
      formHeader={{
        subTitle: 'Make your app management easy and fun!',
        title: 'Adventure starts here 🚀',
      }}
      checkBoxAndLink={{
        classNames: 'flex items-center gap-1 mb-4',
        checkBox: {
          label: 'I agree to ',
        },
        link: {
          text: 'privacy policy & terms',
          to: 'privacy policy & terms',
        },
      }}
      formFooter={{
        footerText: 'Already have an account?',
        footerLink: '  Sign in instead',
      }}
    />
  </div>
);
