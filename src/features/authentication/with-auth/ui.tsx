import { useSliceSelector } from 'shared/lib';

import { Login } from '../login';

export const WithAuth = WrappedComponent => {
  const NewComp = () => {
    const { isAuth } = useSliceSelector('session', state => state);

    if (!isAuth) {
      return Login;
    }

    return WrappedComponent;
  };
  return NewComp;
};
