import { ChangeEventHandler, SyntheticEvent, useState } from 'react';
import { AiOutlineFileAdd } from 'react-icons/ai';

import {
  categoriesLib,
  categoriesTypes,
  categoriesApi,
} from 'entities/categories';
import { Button } from 'shared/ui/button';
import { Input } from 'shared/ui/input';
import { Modal } from 'shared/ui/modal';

type AddCategoryProps = {
  id: string;
  data: categoriesTypes.Category[];
};

export const AddCategory = ({ id, data }: AddCategoryProps) => {
  const [chosenCategory, setChosenCategory] =
    useState<categoriesTypes.Category | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [categoryName, setCategoryName] = useState<string>('');
  const [addCategoryApi] = categoriesApi.useCreateCategoryMutation();
  // TODO добавить алёрты о статусе

  const addHandler = (categoryId: string) => {
    const parentCategory = categoriesLib.findObjectInArray(data, categoryId);
    setChosenCategory(parentCategory);
  };

  const confirmHandler = async (e: SyntheticEvent) => {
    e.stopPropagation();

    if (chosenCategory) {
      await addCategoryApi({
        parentId: chosenCategory.id,
        name: categoryName,
      });
    }

    setCategoryName('');
    setChosenCategory(null);
    setShowModal(false);
  };

  const undoChangesHandler = (e: SyntheticEvent) => {
    e.stopPropagation();
    setChosenCategory(null);
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
          addHandler(id);
          setShowModal(true);
        }}>
        <AiOutlineFileAdd size={16} />
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
          <h6 className={'font-medium text-lg'}>Enter name for category: </h6>
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
