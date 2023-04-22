import { ComponentType } from 'react';
import { Provider } from 'react-redux';

import { store } from '../store';

export const withStore = (WrappedComponent: ComponentType) => {
  const WithStore: () => JSX.Element = () => (
    <Provider store={store}>
      <WrappedComponent />
    </Provider>
  );

  return WithStore;
};
