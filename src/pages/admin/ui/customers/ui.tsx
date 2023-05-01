import {useEffect, useState} from 'react';
import {AiOutlineEdit, AiOutlineEye} from 'react-icons/ai';

import {normalizeStringToURL} from 'shared/lib';
import {AppLink} from 'shared/ui/appLink';
import {Search} from 'shared/ui/search';
import {DeleteProduct} from 'features/product/delete-product';
import {SortActiveType, TableList} from 'widgets/table-list';

import {AdminUser, usersFromServer} from './model';

type UserResult = {
  id: {
    id: string;
    name: string;
    sortable: boolean;
    to: string;
    className: string;
    width: string;
  };
  name: {
    name: string;
    sortable: boolean;
    className: string;
    width: string;
  };
  date: {
    name: string;
    sortable: boolean;
    className: string;
    width: string;
  };
  company?: {
    name: string;
    sortable: boolean;
    className: string;
    width: string;
  };
};

export const Customers = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [resultData, setResultData] = useState<UserResult[]>([]);
  const [activeSort, setActiveSort] = useState<SortActiveType>({
    name: 'none',
    type: 'none',
  });

  const handleSortChange = (active: SortActiveType) => {
    setActiveSort(active);
  };

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

  useEffect(() => {
    const users: AdminUser[] = usersFromServer;
    const result: UserResult[] = users.map(user => ({
      id: {
        className: 'text-blue/70 mr-1',
        id: user.id,
        name: `#${user.id.substring(0, 5)}`,
        sortable: false,
        to: '',
        width: 'w-1/12',
      },
      name: {
        className: 'whitespace-nowrap overflow-x-scroll scrollbar pr-0.5',
        name: user.name,
        sortable: true,
        width: 'w-5/12',
      },
      date: {
        className: 'hover:text-gray-dark duration-200 leading-6 ml-2  ',
        name: '01.01.2023',
        sortable: true,
        width: 'w-2/12',
      },
      company: {
        className: `whitespace-nowrap overflow-x-scroll scrollbar pr-0.5 ${
          !user.supplierCompany ? 'pl-9' : ''
        }`,
        name: user.supplierCompany || '-',
        sortable: true,
        width: 'w-3/12',
      },
    }));

    setResultData(result);
  }, []);

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
      <TableList
        items={resultData}
        activeSort={activeSort}
        onSortChange={handleSortChange}
        actions={handleActions}
      />
    </div>
  );
};
