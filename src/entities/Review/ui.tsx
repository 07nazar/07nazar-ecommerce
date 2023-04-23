import { FC } from 'react';
import { AiFillDislike, AiFillLike } from 'react-icons/ai';
import { GoStar } from 'react-icons/go';

import { Button } from 'shared/ui/Button';

import type { ProductReviewType } from './types';

export const Review: FC<ProductReviewType> = ({
  author,
  text,
  rating,
  likes,
  dislikes,
}) => (
  <div className={'mb-4 p-3 border border-gray-pale rounded-md lg:mb-1 '}>
    <p className={'flex items-center text-black'}>
      <span>{author.name}</span>
      <GoStar className={'ml-2 text-orange inline-block'} />
      <span>{rating}</span>
    </p>
    <div>
      <h6 className={'text-lg font-medium mb-1 mt-3'}>Advantages</h6>
      <p>{text.advantages || '-'}</p>
      <h6 className={'text-lg font-medium mb-1 mt-3'}>Disadvantages</h6>
      <p>{text.disadvantages || '-'}</p>
      <h6 className={'text-lg font-medium mb-1 mt-3'}>Comment</h6>
      <p>{text.comment}</p>
    </div>
    <div className={'flex'}>
      <Button className={'flex text-gray-hot px-0 py-1 items-center mr-3'}>
        <AiFillLike /> {likes}
      </Button>
      <Button className={'flex text-gray-hot pl-0 items-center'}>
        <AiFillDislike /> {dislikes}
      </Button>
    </div>
  </div>
);
