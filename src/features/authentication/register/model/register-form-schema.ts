import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'To Short!')
    .max(20, 'To Long!')
    .required('User name is required'),
  email: yup
    .string()
    .email()
    .min(1, 'To Short!')
    .max(20, 'To Long!')
    .required('Email name is required'),
  password: yup
    .string()
    .min(6, 'To Short!')
    .max(20, 'To Long!')
    .required('Password name is required'),
});
