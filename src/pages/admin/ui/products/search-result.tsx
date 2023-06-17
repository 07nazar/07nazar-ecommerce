import { FC, useState } from 'react';
import { AiOutlineEdit, AiOutlineEye } from 'react-icons/ai';

import { TableList } from 'widgets/table-list';
import { DeleteProduct } from 'features/product/delete-product';
import { productApi } from 'entities/product';
import { generateStringURL } from 'shared/lib';
import { AppLink } from 'shared/ui/links';

type SearchResultProps = {
  search: string;
};

export const SearchResult: FC<SearchResultProps> = ({ search }) => {
  const [activeSort, setActiveSort] = useState('');

  // TODO Как будут данные приходить заменить products на data, добавить isSuccess, isLoading, isError
  const { data } = productApi.useGetProductsListQuery({
    search,
    count: 10,
    sortBy: activeSort,
  });

  const products = productApi.productsList;

  const handleActions = (name: string, id: string) => (
    <div className={'flex w-1/12'}>
      <AppLink
        to={`/products/${generateStringURL(name)}`}
        className={'p-1.5 text-black hover:text-blue '}>
        <AiOutlineEye />
      </AppLink>
      <AppLink
        to={`/edit/${generateStringURL(name)}`}
        className={'p-1.5 text-black hover:text-green '}>
        <AiOutlineEdit />
      </AppLink>
      <DeleteProduct productId={id} />
    </div>
  );

  return (
    <TableList
      items={products}
      activeSort={activeSort}
      setActiveSort={setActiveSort}
      actions={handleActions}
    />
  );
};
