import { Suspense } from 'react';

import { Loader } from '../../ui/loader';

export const withLazy = (component: JSX.Element) => (
  <Suspense fallback={<Loader />}>{component}</Suspense>
);
