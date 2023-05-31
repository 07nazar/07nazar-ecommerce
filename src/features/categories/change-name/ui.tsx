import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';

import {
  categoriesTypes,
  categoriesLib,
  categoriesApi,
} from 'entities/categories';
import { Button } from 'shared/ui/button';
import { Input } from 'shared/ui/input';
import { Modal } from 'shared/ui/modal';

export const ChangeName = ({
  id,
  data,
}: {
  id: string;
  data: categoriesTypes.Category[];
}) => {
  const [editingCategory, setEditingCategory] =
    useState<categoriesTypes.Category | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [editingText, setEditingText] = useState<string>('');
  const [updateCategory] = categoriesApi.useUpdateCategoryMutation();

  const editHandler = (categoryId: string) => {
    const categoryToEdit = categoriesLib.findObjectInArray(data, categoryId);

    setEditingCategory(categoryToEdit);
    if (categoryToEdit) {
      setEditingText(categoryToEdit.name);
    }
  };

  const onEditingTextChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setEditingText(e.target.value);
  };

  const confirmHandler = async (e: SyntheticEvent) => {
    e.stopPropagation();

    if (editingCategory !== null) {
      await updateCategory({
        id: editingCategory.id,
        name: editingText,
      });
    }

    setEditingCategory(null);
    setEditingText('');
    setShowModal(false);
  };

  const undoChangesHandler = (e: SyntheticEvent) => {
    e.stopPropagation();
    setEditingCategory(null);
    setShowModal(false);
  };

  return (
    <>
      <button
        type={'button'}
        onClick={e => {
          e.stopPropagation();
          editHandler(id);
          setShowModal(true);
        }}>
        <AiOutlineEdit size={16} />
      </button>
      <Modal
        isOpen={showModal}
        setClose={() => {
          setEditingCategory(null);
          setShowModal(false);
        }}
        className={`top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
        position={'right'}>
        <div className={'p-2 flex flex-col gap-2'}>
          <h6 className={'font-medium text-lg'}>
            Please enter new name for that category
          </h6>
          <Input
            className={'border border-blue rounded-md p-1.5'}
            value={editingText}
            onChange={onEditingTextChanged}
            onClick={e => e.stopPropagation()}
          />
          <div className={'flex gap-1.5 mt-4 self-end'}>
            <Button onClick={undoChangesHandler} className={'bg-red'}>
              Undo changes
            </Button>
            <Button onClick={confirmHandler} className={'bg-green'}>
              Confirm changes
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
