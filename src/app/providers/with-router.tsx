import {ComponentType} from 'react';
import {BrowserRouter} from 'react-router-dom';

export const withRouter = (WrappedComponent: ComponentType) => () =>
  (
    <BrowserRouter>
      <WrappedComponent />
    </BrowserRouter>
  );
