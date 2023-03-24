import { FC, useState } from 'react';

import { RequestsForm } from 'widgets/RequestsForm';
import { SendInquiry } from 'features/SendInquiry';
import { useMatchMedia } from 'shared/lib';
import { Button } from 'shared/ui/Button';
import { Modal } from 'shared/ui/Modal';

import formBg from '../../assets/formBg.jpg';

export const SendSuppliers: FC = () => {
  const { isMobile, isDesktop } = useMatchMedia();
  const [showFormModal, setShowFormModal] = useState<boolean>(false);
  return (
    <div
      style={{
        backgroundImage: `url("${formBg}")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className={
        'w-full sm:-pl-5 sm:-pr-5 gap-1 flex md:flex-col md:items-start justify-between p-10 lg:p-5 my-5 rounded-md sm:rounded-none'
      }>
      <div className={'w-3/4 sm:w-full flex flex-col gap-3 sm:mb-5'}>
        <h2
          className={
            'text-4xl lg:text-3xl md:text-2xl sm:text-[18px] sm:leading-[22px] text-white font-medium'
          }>
          An easy way to send <br /> requests to all suppliers
        </h2>
        {!isMobile && (
          <p className={'text-base text-white md:mb-2.5'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit, sed
            do eiusmod tempor incididunt.
          </p>
        )}
      </div>
      {isDesktop ? (
        <RequestsForm button={<SendInquiry className={'max-w-[128px]'} />} />
      ) : (
        <>
          <Button
            onClick={() => setShowFormModal(true)}
            className={'bg-primary'}>
            Send inquiry
          </Button>
          <Modal
            className={
              'w-[90%] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'
            }
            isOpen={showFormModal}
            setClose={() => setShowFormModal(false)}>
            <RequestsForm
              button={<SendInquiry className={'max-w-[128px]'} />}
            />
          </Modal>
        </>
      )}
    </div>
  );
};
