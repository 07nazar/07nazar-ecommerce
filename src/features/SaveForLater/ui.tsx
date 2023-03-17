import { FC } from 'react';
import { MdOutlineFavoriteBorder } from 'react-icons/md';

import { Button } from 'shared/ui/Button';

interface ISaveForLaterProps {
  classNames?: string;
}

export const SaveForLater: FC<ISaveForLaterProps> = ({ classNames = '' }) => (
  <Button className={`${classNames}`}>
    <MdOutlineFavoriteBorder size={18} /> Save for later
  </Button>
);
