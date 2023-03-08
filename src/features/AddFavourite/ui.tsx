import { FC } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { redirect } from "react-router-dom";

import { Button } from "shared/ui/Button";

interface AddFavouriteProps {
  isAuth: boolean;
  id: number;
}

export const AddFavourite: FC<AddFavouriteProps> = ({ isAuth, id }) => {
  if (!isAuth) {
    redirect("/login");
  }

  const clickHandler = () => {
    // logic for add to favourite
  };

  return (
    <Button onClick={clickHandler} className={"bg-light p-2.5 text-blue"}>
      <AiOutlineHeart size={20} />
    </Button>
  );
};
