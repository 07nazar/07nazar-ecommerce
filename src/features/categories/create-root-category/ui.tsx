import { ChangeEventHandler, SyntheticEvent, useState } from 'react';
import { AiOutlineFileAdd } from 'react-icons/ai';

import { categoriesApi } from 'entities/categories';
import { Button } from 'shared/ui/button';
import { Input } from 'shared/ui/input';
import { Modal } from 'shared/ui/modal';

export const CreateRootCategory = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [categoryName, setCategoryName] = useState<string>('');
  const [addCategoryApi] = categoriesApi.useCreateCategoryMutation();

  const confirmHandler = async (e: SyntheticEvent) => {
    e.stopPropagation();
    await addCategoryApi({
      name: categoryName,
      parentId: null,
    });
    setCategoryName('');
    setShowModal(false);
  };

  const undoChangesHandler = (e: SyntheticEvent) => {
    e.stopPropagation();
    setShowModal(false);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    setCategoryName(e.target.value);
  };

  return (
    <>
      <button
        type={'button'}
        onClick={e => {
          e.stopPropagation();
          setShowModal(true);
        }}
        className={
          'flex items-center gap-1 mb-5 border-b border-[transparent] hover:border-gray-deep duration-300'
        }>
        Click to create new root category <AiOutlineFileAdd size={16} />
      </button>
      <Modal
        isOpen={showModal}
        setClose={() => {
          setShowModal(false);
        }}
        className={`top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
        position={'right'}>
        <div className={'p-2 flex flex-col gap-2'}>
          <h6 className={'font-medium text-lg'}>
            Enter name for root category:{' '}
          </h6>
          <Input
            value={categoryName}
            onChange={handleChange}
            onClick={e => e.stopPropagation()}
            className={'border p-1.5 border-blue rounded-md'}
          />
          <div className={'flex gap-1.5 mt-4 self-end'}>
            <Button onClick={undoChangesHandler} className={'bg-red'}>
              Undo
            </Button>
            <Button onClick={confirmHandler} className={'bg-green'}>
              Confirm add
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
