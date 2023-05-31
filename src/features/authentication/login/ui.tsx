/* eslint-disable import/order */
import { FC, useEffect } from 'react';

import { BaseAuthForm, TypeInputItem } from 'shared/ui/form';

import { login, loginSchema } from './model';
import { sessionApi } from 'entities/session';
import { useNavigate } from 'react-router-dom';
import { useAlert } from 'shared/lib/hooks/use-alert';

type TypeFormProps = {
  inputsData: TypeInputItem[];
};

export const LoginForm: FC<TypeFormProps> = ({ inputsData }) => {
  const [loginUser, result] = sessionApi.useLoginUserMutation();

  const navigate = useNavigate();
  const { showAlert } = useAlert();
  const { isSuccess, isError, isLoading, error } = result;

  useEffect(() => {
    if (isSuccess && showAlert) {
      navigate('/');

      showAlert({
        message: 'Login successed!',
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
        onSubmitHandler={values => login(values, loginUser, result)}
        buttonValue={'Login'}
        formHeader={{
          subTitle: 'Make your app management easy and fun!',
          title: 'Adventure starts here 🚀',
        }}
        formFooter={{
          footerText: 'New on our platform?',
          footerLink: {
            text: 'Create an account',
            to: 'register',
          },
        }}
      />
    </div>
  );
};
