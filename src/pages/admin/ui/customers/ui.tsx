import { useState } from 'react';
import { AiOutlineEdit, AiOutlineEye } from 'react-icons/ai';

import { TableList } from 'widgets/table-list';
import { DeleteProduct } from 'features/product/delete-product';
import { userApi } from 'entities/user';
import { generateStringURL } from 'shared/lib';
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
    <div className={'flex w-1/12'}>
      <AppLink
        to={`/user/${generateStringURL(id)}`}
        className={'p-1.5 text-black hover:text-blue '}>
        <AiOutlineEye />
      </AppLink>
      <AppLink
        to={`/edit/profile/${generateStringURL(id)}`}
        className={'p-1.5 text-black hover:text-green '}>
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
          'mb-2 h-10 w-full rounded-md border border-lightblue bg-white'
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
