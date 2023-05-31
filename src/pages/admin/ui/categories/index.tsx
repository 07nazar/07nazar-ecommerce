import { useState } from 'react';

import { AddCategory } from 'features/categories/add-new';
import { ChangeName } from 'features/categories/change-name';
import { CreateRootCategory } from 'features/categories/create-root-category';
import { DeleteCategory } from 'features/categories/delete';
import { TransferCategory } from 'features/categories/transfer';
import { categoriesApi, categoriesTypes } from 'entities/categories';
import { Loader } from 'shared/ui/loader';

const CategoryTree = ({
  categories,
}: {
  categories: categoriesTypes.Category[];
}) => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (categoryId: string) => {
    if (expandedCategories.includes(categoryId)) {
      setExpandedCategories(expandedCategories.filter(id => id !== categoryId));
    } else {
      setExpandedCategories([...expandedCategories, categoryId]);
    }
  };

  const renderCategory = (category: categoriesTypes.Category) => {
    const isExpanded = expandedCategories.includes(category.id);

    return (
      <div key={category.id}>
        <div
          role={'button'}
          onKeyDown={e => {
            if (e.key === 'ArrowRight') {
              toggleCategory(category.id);
            }
          }}
          tabIndex={0}
          onClick={() => toggleCategory(category.id)}
          className={'inline-flex cursor-pointer ml-2 p-1'}>
          {category.children && (
            <div
              className={`${
                isExpanded ? '' : 'rotate-90'
              } transition-transform duration-300`}>
              ▸
            </div>
          )}

          <p className={`${!category.children ? 'ml-2' : ''}`}>
            {category.name}
          </p>
          <div className={'ml-2 mt-1 flex gap-1'}>
            <ChangeName id={category.id} data={categories} />
            <TransferCategory id={category.id} data={categories} />
            <AddCategory id={category.id} data={categories} />
            <DeleteCategory id={category.id} data={categories} />
          </div>
        </div>
        {isExpanded && category.children && (
          <div className={'ml-10'}>
            {category.children.map(child => renderCategory(child))}
          </div>
        )}
      </div>
    );
  };

  return <div>{categories.map(category => renderCategory(category))}</div>;
};

const Categories = () => {
  const { data, isLoading, isSuccess } = categoriesApi.useGetCategoriesQuery();

  return (
    <div className={'mb-10'}>
      {isLoading && <Loader className={'mx-auto my-20 w-full h-[450px]'} />}
      {isSuccess && <CreateRootCategory />}
      <p className={'font-medium text-lg font-sans'}>Categories list:</p>
      {data && <CategoryTree categories={data} />}
    </div>
  );
};

export default Categories;
