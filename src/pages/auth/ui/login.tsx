import { LoginForm } from 'features/authentication/login';

const inputsData = [
  {
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    className:
      'w-full py-4 pl-3 rounded-md outline-none border-gray-deep border',
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    className:
      'w-full py-4 pl-3 rounded-md outline-none border-gray-deep border',
  },
];

export const Login = () => <LoginForm inputsData={inputsData} />;
