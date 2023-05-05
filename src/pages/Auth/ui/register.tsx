import { RegisterForm } from 'features/authentication/register';

const inputsData = [
  {
    name: 'userName',
    type: 'userName',
    placeholder: 'Username',
    className:
      'w-full py-4 pl-3 rounded-md outline-none border-gray-deep border',
  },
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

export const Register = () => <RegisterForm inputsData={inputsData} />;
