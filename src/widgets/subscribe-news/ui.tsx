import { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';

import { colors } from 'shared/lib';
import { Button } from 'shared/ui/button';
import { Input } from 'shared/ui/input';

export const SubscribeNews = () => {
  const [email, setEmail] = useState<string>('');

  const sendHandler = () => {
    // check and send to server
  };

  return (
    <div className={'relative py-10 md:py-5'}>
      <span
        className={'-z-10 absolute inset-0 full-screen w-screen bg-gray-pale'}
      />
      <div className={'flex flex-col items-center'}>
        <h3 className={'text-black text-xl font-semibold text-center'}>
          Subscribe on our newsletter
        </h3>
        <h5 className={'mb-5 sm:mb-2 text-gray-hot text-center'}>
          Get daily news on upcoming offers from many suppliers all over the
          world
        </h5>
        <div className={'flex gap-2 md:flex-wrap md:justify-center'}>
          <Input
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder={`Email`}
            type={'email'}
            icon={<AiOutlineMail fill={`${colors.gray.hot}`} />}
            className={'pt-2.5 pb-2.5 border border-gray-medium rounded-md'}
          />
          <Button className={'bg-primary'} onClick={sendHandler}>
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};
