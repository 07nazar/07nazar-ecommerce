import { ReactNode } from 'react';
import { redirect } from 'react-router-dom';

import { useSliceSelector } from '../hooks';

export const withAuth = (WrappedComponent: ReactNode) => {
  const NewComp = () => {
    const { isAuth } = useSliceSelector('session', state => state);

    if (!isAuth) {
      redirect('auth');
    }

    return WrappedComponent;
  };
  return NewComp;
};
