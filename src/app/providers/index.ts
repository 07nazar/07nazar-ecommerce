import { ReactNode } from 'react';

import { withRouter } from './withRouter';

export const withProviders = (component: () => ReactNode) =>
  withRouter(component);
