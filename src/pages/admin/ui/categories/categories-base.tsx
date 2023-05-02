/* eslint-disable radix */
/* eslint-disable no-restricted-syntax */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable import/no-extraneous-dependencies */

import { FC, useState } from 'react';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';

interface IMenuItem {
  id: number;
  text: string;
  to: string;
  children?: IMenuItem[];
}

type CategoriesRenderProps = {
  categoriesList: IMenuItem[];
};

type ICategoryItemProps = {
  category: IMenuItem;
  index: number;
  bgColor?: string;
};

const routes: IMenuItem[] = [{ id: 1, text: 'text', to: '/', children: [] }];

export const CategoriesBase = () => {
  const [categories, setCategories] = useState<IMenuItem[]>(routes);
  const [openCategories, setOpenCategories] = useState<number[]>([]);

  const handleOpen = (categoryId: number) => {
    if (openCategories.includes(categoryId)) {
      setOpenCategories(openCategories.filter(id => id !== categoryId));
    } else {
      setOpenCategories([...openCategories, categoryId]);
    }
  };

  const handleDragEnd = (result: DropResult) => {
    console.log(result);
  };

  const HaveChildren: FC<{ id: number }> = ({ id }) => (
    <span style={{ color: 'red' }}>
      {openCategories.includes(id) ? <span>-</span> : <span>+</span>}
    </span>
  );

  //   categories.map((category: IMenuItem) => (
  //     <div key={category.id}>{category.text}</div>
  //   ));

  const CategoryItem: FC<ICategoryItemProps> = ({
    category,
    index,
    bgColor,
  }) => (
    <Draggable draggableId={category.id.toString()} index={index}>
      {provided => (
        <div
          className={`flex flex-col `}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}>
          <div
            className={`flex items-center ${bgColor}`}
            onClick={() => handleOpen(category.id)}>
            <div>{category.text}</div>
            {category.children && <HaveChildren id={category.id} />}
          </div>
          {category.children && openCategories.includes(category.id) && (
            <Droppable
              droppableId={`category-${category.id}`}
              type={'CATEGORY'}>
              {provided => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {category.children?.map(
                    (childCategory: IMenuItem, childIndex: number) => (
                      <CategoryItem
                        bgColor={`bg-green ml-5`}
                        key={childCategory.id}
                        category={childCategory}
                        index={childIndex}
                      />
                    )
                  )}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          )}
        </div>
      )}
    </Draggable>
  );

  const CategoriesRender: FC<CategoriesRenderProps> = ({ categoriesList }) => (
    <>
      {categoriesList.map((category: IMenuItem, index: number) => (
        <CategoryItem
          key={category.id}
          category={category}
          index={index}
          bgColor={'bg-red'}
        />
      ))}
    </>
  );

  //
  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId={'categories'}>
          {provided => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <CategoriesRender categoriesList={categories} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
