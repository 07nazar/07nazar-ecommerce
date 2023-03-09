import { FC } from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { GoStar } from "react-icons/go";

import { Button } from "../../shared/ui/Button";

export type ReviewProps = {
  author: string;
  text: {
    pluses: string;
    minus: string;
    commentary: string;
  };
  rating: number;
  likes: number;
  dislikes: number;
};

export const Review: FC<ReviewProps> = ({
  author,
  text,
  rating,
  likes,
  dislikes,
}) => (
  <div className={"mb-4 p-3 border border-gray-pale rounded-md"}>
    <p className={"flex items-center text-black"}>
      <span>{author}</span> <GoStar className="ml-2 text-orange inline-block" />
      <span>{rating}</span>
    </p>
    <div>
      <h6 className={"text-lg font-medium mb-1 mt-3"}>Pluses</h6>
      <p>{text.pluses}</p>
      <h6 className={"text-lg font-medium mb-1 mt-3"}>Minuses</h6>
      <p>{text.minus}</p>
      <h6 className={"text-lg font-medium mb-1 mt-3"}>Commentary</h6>
      <p>{text.commentary}</p>
    </div>
    <div className={"flex"}>
      <Button className={"flex text-gray-hot px-0 py-1 items-center mr-3"}>
        <AiFillLike /> {likes}
      </Button>
      <Button className={"flex text-gray-hot pl-0 items-center"}>
        <AiFillDislike /> {dislikes}
      </Button>
    </div>
  </div>
);
