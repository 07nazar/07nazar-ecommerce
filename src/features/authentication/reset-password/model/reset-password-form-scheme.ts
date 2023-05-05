import * as yup from 'yup';

export const resetPasswordSchema = yup.object().shape({
  newPassword: yup
    .string()
    .min(6, 'To Short!')
    .max(20, 'To Long!')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .min(6, 'To Short!')
    .max(20, 'To Long!')
    .required('Confirm password name is required'),
});
