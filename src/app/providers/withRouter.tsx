import { ComponentType } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const withRouter = (WrappedComponent: ComponentType) => {
  const WithRouter: () => JSX.Element = () => (
    <BrowserRouter>
      <WrappedComponent />
    </BrowserRouter>
  );

  return WithRouter;
};
