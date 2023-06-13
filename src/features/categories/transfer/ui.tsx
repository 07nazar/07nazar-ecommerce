import { SyntheticEvent, useState } from 'react';
import { BiTransfer } from 'react-icons/bi';

import {
  categoriesTypes,
  categoriesApi,
  categoriesLib,
} from 'entities/categories';
import { Button } from 'shared/ui/button';
import { Modal } from 'shared/ui/modal';
import { ISelectedValue, MenuItem, Select } from 'shared/ui/select';

type TransferCategoryProps = {
  id: string;
  data: categoriesTypes.Category[];
};

export const TransferCategory = ({ id, data }: TransferCategoryProps) => {
  const [chosenCategory, setChosenCategory] =
    useState<categoriesTypes.Category | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [updateCategory] = categoriesApi.useUpdateCategoryMutation();

  const [showSelect, setShowSelect] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<ISelectedValue[]>([]);

  const selectArray =
    chosenCategory && categoriesLib.flattenCategories(data, chosenCategory.id);

  const transferHandler = (categoryId: string) => {
    const categoryToTransfer = categoriesLib.findObjectInArray(
      data,
      categoryId
    );
    setChosenCategory(categoryToTransfer);
  };

  const confirmHandler = (e: SyntheticEvent) => {
    e.stopPropagation();

    if (chosenCategory) {
      const selectedText =
        typeof selectedValue[0].text === 'string'
          ? selectedValue[0].text
          : undefined;

      updateCategory({
        id: chosenCategory.id,
        parentName: selectedText,
      });
    }

    setChosenCategory(null);
    setShowModal(false);
  };

  const undoChangesHandler = (e: SyntheticEvent) => {
    e.stopPropagation();
    setChosenCategory(null);
    setShowModal(false);
  };

  // TODO сделать input-поиск для Select
  return (
    <>
      <button
        type={'button'}
        onClick={e => {
          e.stopPropagation();
          transferHandler(id);
          setShowModal(true);
        }}>
        <BiTransfer size={16} />
      </button>
      <Modal
        isOpen={showModal}
        setClose={() => {
          setChosenCategory(null);
          setShowModal(false);
        }}
        className={`left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
        position={'right'}>
        <div className={'flex flex-col gap-2 p-2'}>
          <h6 className={'text-lg font-medium'}>
            Select the name of the category where you want to record it.
          </h6>
          <Select
            selectedValue={selectedValue}
            isOpen={showSelect}
            setOpen={setShowSelect}
            menuClassName={
              'absolute top-[40px] left-0 max-h-56 border border-gray-medium overflow-y-scroll'
            }>
            {selectArray &&
              selectArray.map(category => (
                <MenuItem
                  key={category.id}
                  item={category}
                  setOpen={setShowSelect}
                  setSelectedItems={setSelectedValue}
                  active={selectedValue[0] === category}>
                  {category.text}
                </MenuItem>
              ))}
          </Select>

          <div className={'mt-4 flex gap-1.5 self-end'}>
            <Button onClick={undoChangesHandler} className={'bg-red'}>
              Undo
            </Button>
            <Button onClick={confirmHandler} className={'bg-green'}>
              Confirm transfer
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
