import { Route, Routes } from 'react-router-dom';

import { EmailVerify } from './email-verify';
import { ForgotPassword } from './forgot-password';
import { Login } from './login';
import { Register } from './register';
import { ResetPassword } from './reset-password';

export const Auth = () => (
  <Routes>
    <Route index element={<Login />} />
    <Route path={'register'} element={<Register />} />
    <Route path={'reset-password'} element={<ResetPassword />} />
    <Route path={'forgot-password'} element={<ForgotPassword />} />
    <Route path={'email-verify'} element={<EmailVerify />} />
  </Routes>
);
