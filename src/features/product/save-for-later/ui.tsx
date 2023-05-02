import {FC} from 'react';
import {MdOutlineFavoriteBorder} from 'react-icons/md';

import {Button} from 'shared/ui/button';

interface ISaveForLaterProps {
  className?: string;
}

export const SaveForLater: FC<ISaveForLaterProps> = ({ className = '' }) => (
  <Button className={`${className || ''} gap-1 duration-300`}>
    <MdOutlineFavoriteBorder size={18} /> Save for later
  </Button>
);
