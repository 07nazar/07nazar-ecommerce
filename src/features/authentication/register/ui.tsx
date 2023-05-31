/* eslint-disable import/order */
import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAlert } from 'shared/lib/hooks/use-alert';
import { BaseAuthForm, TypeInputItem } from 'shared/ui/form';
import { Loader } from 'shared/ui/loader';
import { userApi } from 'entities/user';

import { register, registerSchema } from './model';

type TypeFormProps = {
  inputsData: TypeInputItem[];
};

export const RegisterForm: FC<TypeFormProps> = ({ inputsData }) => {
  const [registerUser, result] = userApi.useRegisterUserMutation();
  const navigate = useNavigate();
  const { showAlert } = useAlert();

  const { isSuccess, isError, isLoading, error } = result;

  useEffect(() => {
    if (isSuccess && showAlert) {
      navigate('/auth');

      showAlert({
        message: 'Registration successed!',
        type: 'success',
      });
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError && showAlert && 'data' in error) {
      const errorData = error as { data: { message: string } };

      showAlert({
        message: errorData.data.message || 'Some error',
        type: 'error',
      });
    }
  }, [isError]);

  return (
    <div className={'flex justify-center items-center h-full'}>
      <BaseAuthForm
        validationSchema={registerSchema}
        initialValues={{ name: '', email: '', password: '' }}
        inputItems={inputsData}
        onSubmitHandler={values => register(values, registerUser, result)}
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
          footerLink: {
            text: 'Sign in instead',
            to: '/auth',
          },
        }}
      />

      {isLoading && <Loader className={'absolute'} />}
    </div>
  );
};
