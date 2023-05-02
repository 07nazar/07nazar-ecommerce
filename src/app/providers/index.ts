import {ComponentType} from 'react';

import {withRouter} from './with-router';
import {withStore} from './with-store';

export const withProviders = (Component: ComponentType) =>
  withRouter(withStore(Component));
