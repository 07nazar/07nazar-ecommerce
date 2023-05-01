import {FC, useState} from 'react';
import {AiOutlineDelete} from 'react-icons/ai';

import {Button} from 'shared/ui/button';
import {Modal} from 'shared/ui/modal';

interface DeleteProductProps {
  productId: string;
}

export const DeleteProduct: FC<DeleteProductProps> = ({ productId }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    // dispatch delete item from db
    console.log('item deleted: ', productId);
    setModalOpen(false);
  };

  return (
    <>
      <Button
        onClick={() => setModalOpen(true)}
        className={'text-black p-1.5 hover:text-red duration-300'}>
        <AiOutlineDelete />
      </Button>
      <Modal
        isOpen={modalOpen}
        className={
          'top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-40 rounded-none p-0 '
        }
        position={'right'}
        setClose={() => setModalOpen(false)}>
        <div className={'flex flex-col justify-between w-96 h-full p-4'}>
          <p className={'mb-4 font-semibold text-black text-lg'}>
            Delete product
          </p>
          <p className={'mb-6 text-gray-dark'}>Really want to delete item?</p>
          <div className={'flex gap-4 self-end'}>
            <Button className={'bg-light text-blue'}>Cancel</Button>
            <Button onClick={handleClick} className={'bg-red'}>
              Yes, delete
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
