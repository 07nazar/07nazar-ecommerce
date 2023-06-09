import { ResetPasswordForm } from 'features/authentication/reset-password';

const inputsData = [
  {
    name: 'newPassword',
    type: 'newPassword',
    placeholder: 'New Password',
    className:
      'w-full py-4 pl-3 rounded-md outline-none border-gray-deep border',
  },
  {
    name: 'confirmPassword',
    type: 'confirmPassword',
    placeholder: 'Confirm Password',
    className:
      'w-full py-4 pl-3 rounded-md outline-none border-gray-deep border',
  },
];
export const ResetPassword = () => (
  <ResetPasswordForm inputsData={inputsData} />
);
