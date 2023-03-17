import { FC } from 'react';
import { FaUserCircle } from 'react-icons/fa';

import { Button } from 'shared/ui/Button';

interface IUserCard {
  userName: string;
  image?: string;
}

export const UserCard: FC<IUserCard> = ({ userName = 'user', image }) => (
  <div className={'flex flex-col bg-lightblue px-2.5 pt-3.5 pb-3 rounded-md'}>
    <div className={'flex gap-2 text-[16px] mb-3'}>
      {image ? (
        <img src={image} alt={'user'} />
      ) : (
        <FaUserCircle size={44} color={'#91B1E7'} />
      )}
      <p className={'whitespace-nowrap'}>
        Hi, {userName} <br /> lets get stated
      </p>
    </div>
    <Button className={'bg-primary mb-2 flex justify-center'} size={'sm'}>
      Join now
    </Button>
    <Button className={'bg-white text-blue flex justify-center'} size={'sm'}>
      Log in
    </Button>
  </div>
);
