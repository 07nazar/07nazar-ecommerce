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
    <div className={'relative py-10 md:py-5 sm:px-4'}>
      <span
        className={'full-screen absolute inset-0 -z-10 w-screen bg-gray-pale'}
      />
      <div className={'flex flex-col items-center'}>
        <h3 className={'text-center text-xl font-semibold text-black'}>
          Subscribe on our newsletter
        </h3>
        <h5 className={'mb-5 text-center text-gray-hot sm:mb-2'}>
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
            className={'rounded-md border border-gray-medium pb-2.5 pt-2.5'}
          />
          <Button className={'bg-primary'} onClick={sendHandler}>
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};
