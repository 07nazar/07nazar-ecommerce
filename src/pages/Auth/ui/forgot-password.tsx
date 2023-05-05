import { ForgotPasswordForm } from 'features/authentication/forgot-password';

const inputsData = [
  {
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    className:
      'w-full py-4 pl-3 rounded-md outline-none border-gray-deep border',
  },
];

export const ForgotPassword = () => (
  <ForgotPasswordForm inputsData={inputsData} />
);
