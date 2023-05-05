import { ReactNode, Suspense } from 'react';

import { Loader } from '../../ui/loader';

export const withLazy = (component: ReactNode) => (
  <Suspense fallback={<Loader className={'mx-auto my-5'} />}>
    {component}
  </Suspense>
);
