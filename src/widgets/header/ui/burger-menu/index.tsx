import { FC, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

import { Button } from 'shared/ui/button';
import { Modal } from 'shared/ui/modal';

import { MobileMenu } from './mobile-menu';

export const BurgerMenu: FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const clickHandler = () => {
    setShowModal(true);
  };

  return (
    <>
      <Button onClick={clickHandler} className={'text-black mr-1 -ml-3'}>
        <GiHamburgerMenu size={18} />
      </Button>
      <Modal
        position={'left'}
        className={'top-0 left-0 min-h-full rounded-none p-0'}
        isOpen={showModal}
        setClose={() => setShowModal(false)}
        backgroundColor={'rgba(99, 99, 99, 0.5)'}>
        <MobileMenu />
      </Modal>
    </>
  );
};
