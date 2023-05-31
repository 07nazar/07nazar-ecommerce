import { useState } from 'react';
import { AiOutlineEdit, AiOutlineEye } from 'react-icons/ai';

import { TableList } from 'widgets/table-list';
import { DeleteProduct } from 'features/product/delete-product';
import { userApi } from 'entities/user';
import { normalizeStringToURL } from 'shared/lib';
import { AppLink } from 'shared/ui/links';
import { Search } from 'shared/ui/search';

export const Customers = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [activeSort, setActiveSort] = useState('name-asc');

  const { data } = userApi.useGetUsersQuery({
    search: searchValue,
    sortBy: activeSort,
    count: 10,
  });

  const handleActions = (name: string, id: string) => (
    <div className={'w-1/12 flex'}>
      <AppLink
        to={`/user/${normalizeStringToURL(id)}`}
        className={'text-black p-1.5 hover:text-blue '}>
        <AiOutlineEye />
      </AppLink>
      <AppLink
        to={`/edit/profile/${normalizeStringToURL(id)}`}
        className={'text-black p-1.5 hover:text-green '}>
        <AiOutlineEdit />
      </AppLink>
      <DeleteProduct productId={id} />
    </div>
  );

  return (
    <div className={'w-full'}>
      <Search
        handleChange={value => {
          setSearchValue(value);
        }}
        className={
          'mb-2 w-full bg-white border border-lightblue h-10 rounded-md'
        }
      />
      {data && (
        <TableList
          items={data}
          activeSort={activeSort}
          setActiveSort={setActiveSort}
          actions={handleActions}
        />
      )}
    </div>
  );
};
