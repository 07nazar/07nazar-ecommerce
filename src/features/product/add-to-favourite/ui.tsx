import {FC} from 'react';
import {AiOutlineHeart} from 'react-icons/ai';
import {redirect} from 'react-router-dom';

import {Button} from 'shared/ui/button';

interface AddFavouriteProps {
  classNames?: string;
  isAuth: boolean;
  id: number;
}

export const AddFavourite: FC<AddFavouriteProps> = ({
  isAuth,
  id,
  classNames = '',
}) => {
  if (!isAuth) {
    redirect('/login');
  }

  const clickHandler = () => {
    // logic for add to favourite
  };

  return (
    <Button
      onClick={clickHandler}
      className={`${classNames} bg-light p-2.5 text-blue`}>
      <AiOutlineHeart size={20} />
    </Button>
  );
};
