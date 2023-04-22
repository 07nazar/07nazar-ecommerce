import { ComponentType } from 'react';

import { withRouter } from './withRouter';
import { withStore } from './withStore';

export const withProviders = (Component: ComponentType) =>
  withRouter(withStore(Component));
