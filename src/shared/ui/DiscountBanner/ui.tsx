import { FC } from 'react';

import { AppLink } from '../AppLink';

export const DiscountBanner: FC = () => (
  <div
    className={
      'w-full pt-7 pr-11 pb-9 pl-7 flex justify-between items-center rounded-md'
    }
    style={{
      background:
        'linear-gradient(60deg, #237CFF 0%, #237CFF 54%, #005ADE 54%, #005ADE 100%)',
    }}>
    <div className={'text-white'}>
      <h4 className={'mb-1 text-2xl'}>Super discount on more than 100 USD</h4>
      <p className={'opacity-70'}>
        Have you ever finally just write dummy info
      </p>
    </div>
    <AppLink
      to={'/shop'}
      className={
        'text-white bg-orange px-4 py-2.5 rounded-md hover:opacity-95 duration-300'
      }>
      Shop now
    </AppLink>
  </div>
);
