import { ComponentType } from 'react';

import { withAlert } from './with-alert';
import { withRouter } from './with-router';
import { withStore } from './with-store';

export const withProviders = (Component: ComponentType) =>
  withAlert(withRouter(withStore(Component)));
