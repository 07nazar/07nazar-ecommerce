import { SyntheticEvent, useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

import {
  categoriesTypes,
  categoriesLib,
  categoriesApi,
} from 'entities/categories';
import { Button } from 'shared/ui/button';
import { Modal } from 'shared/ui/modal';

type DeleteCategoryProps = {
  id: string;
  data: categoriesTypes.Category[];
};

export const DeleteCategory = ({ id, data }: DeleteCategoryProps) => {
  const [chosenCategory, setChosenCategory] =
    useState<categoriesTypes.Category | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [removeCategory] = categoriesApi.useDeleteCategoryMutation();

  const removeHandler = (categoryId: string) => {
    const categoryToDelete = categoriesLib.findObjectInArray(data, categoryId);
    setChosenCategory(categoryToDelete);
  };

  const confirmEditHandler = (e: SyntheticEvent) => {
    e.stopPropagation();

    if (chosenCategory) {
      removeCategory({ id: chosenCategory.id });
    }

    setChosenCategory(null);
    setShowModal(false);
  };

  const undoChangesHandler = (e: SyntheticEvent) => {
    e.stopPropagation();
    setChosenCategory(null);
    setShowModal(false);
  };

  return (
    <>
      <button
        type={'button'}
        onClick={e => {
          e.stopPropagation();
          removeHandler(id);
          setShowModal(true);
        }}>
        <AiOutlineDelete size={16} />
      </button>
      <Modal
        isOpen={showModal}
        setClose={() => {
          setChosenCategory(null);
          setShowModal(false);
        }}
        className={`top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
        position={'right'}>
        <div className={'p-2 flex flex-col gap-2'}>
          <h6 className={'font-medium text-lg'}>Are you sure ?</h6>
          <div className={'flex gap-1.5 mt-4 self-end'}>
            <Button onClick={undoChangesHandler} className={'bg-red'}>
              Undo delete
            </Button>
            <Button onClick={confirmEditHandler} className={'bg-green'}>
              Confirm delete
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
