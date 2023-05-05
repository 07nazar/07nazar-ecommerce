import * as yup from 'yup';

export const forgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .min(1, 'To Short!')
    .max(20, 'To Long!')
    .required('Email name is required'),
});
