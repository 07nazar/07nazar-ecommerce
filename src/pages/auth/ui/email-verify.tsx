import { EmailVerifyForm } from 'features/authentication/email-verify';

const inputsData = [
  {
    name: 'code1',
    type: 'text',
    placeholder: '',
    className:
      'w-full py-4 pl-3 rounded-md outline-none border-gray-deep border',
  },
  {
    name: 'code2',
    type: 'text',
    placeholder: '',
    className:
      'w-full py-4 pl-3 rounded-md outline-none border-gray-deep border',
  },
  {
    name: 'code3',
    type: 'text',
    placeholder: '',
    className:
      'w-full py-4 pl-3 rounded-md outline-none border-gray-deep border',
  },
  {
    name: 'code4',
    type: 'text',
    placeholder: '',
    className:
      'w-full py-4 pl-3 rounded-md outline-none border-gray-deep border',
  },
  {
    name: 'code5',
    type: 'text',
    placeholder: '',
    className:
      'w-full py-4 pl-3 rounded-md outline-none border-gray-deep border',
  },
  {
    name: 'code6',
    type: 'text',
    placeholder: '',
    className:
      'w-full py-4 pl-3 rounded-md outline-none border-gray-deep border',
  },
];

export const EmailVerify = () => <EmailVerifyForm inputsData={inputsData} />;
