import {FC} from 'react';

import {Button} from 'shared/ui/button';

type SendInquiryProps = {
  className?: string;
};

export const SendInquiry: FC<SendInquiryProps> = ({ className }) => (
  <Button className={`${className || ''} justify-center bg-primary`}>
    Send inquiry
  </Button>
);
