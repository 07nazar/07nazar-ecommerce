import { FC, useEffect, useState } from 'react';

import { TableList } from 'widgets/TableList';
import { Button } from 'shared/ui/Button';
import { Search } from 'shared/ui/Search';

import type { ProductAdminType } from 'entities/Product';
import type { SortActiveType, TableItemLinkType } from 'widgets/TableList';

import { productsFromServer } from './model';

type SearchResultProps = {
  value: string;
};

type ItemsProps = {
  name: TableItemLinkType;
  id: TableItemLinkType;
  cost: TableItemLinkType;
  seller: TableItemLinkType;
};

const SearchResult: FC<SearchResultProps> = () => {
  const [results, setResults] = useState<ItemsProps[]>([]);
  const [activeSort, setActiveSort] = useState<SortActiveType>({
    name: 'none',
    type: 'none',
  });

  useEffect(() => {
    // запрос по value, name и type

    const products: ProductAdminType[] = productsFromServer;
    const data: ItemsProps[] = products.map(product => ({
      id: {
        name: `#${product.id.substring(4)}`,
        sortable: false,
        to: `products/${product.id}`,
        className: 'text-blue/70',
        width: 'w-1/12',
      },
      name: {
        name: product.name,
        sortable: true,
        className: 'whitespace-nowrap overflow-x-scroll scrollbar',
        width: 'w-5/12',
      },
      cost: {
        name: product.price.current,
        sortable: true,
        className: 'hover:font-medium duration-200 leading-5 mx-3',
        width: 'w-1/12',
      },
      seller: {
        name: product.sellerId,
        sortable: true,
        to: `sellers/${product.sellerId}`,
        className: 'hover:text-blue duration-200',
        width: 'w-4/12',
      },
    }));

    setResults(data);
  }, [productsFromServer]);

  const handleSortChange = (active: SortActiveType) => {
    setActiveSort(active);
  };

  return (
    <div className={'flex flex-col'}>
      <TableList
        items={results}
        activeSort={activeSort}
        onSortChange={handleSortChange}
      />
    </div>
  );
};

const EditProduct: FC = () => <div>EditProduct</div>;

const AddProduct: FC = () => <div>AddProduct</div>;

const RemoveProduct: FC = () => <div>RemoveProduct</div>;

export const Products = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [searchValue, setSearchValue] = useState<string>('');
  const tabsProducts = [
    {
      content: <SearchResult value={searchValue} />,
    },
    {
      content: <EditProduct />,
    },
    {
      content: <AddProduct />,
    },
    {
      content: <RemoveProduct />,
    },
  ];

  return (
    <div className={'flex flex-col w-full'}>
      <div className={'bg-white rounded-md flex gap-2 h-[52px] items-center'}>
        <Search
          handleChange={value => {
            setActiveTab(0);
            setSearchValue(value);
          }}
          className={'border border-lightblue h-10 rounded-xl'}
        />
        <Button
          onClick={() => setActiveTab(1)}
          className={'bg-lightblue text-black'}>
          Edit
        </Button>
        <Button
          onClick={() => setActiveTab(2)}
          className={'bg-lightblue text-black'}>
          Add
        </Button>
        <Button
          onClick={() => setActiveTab(3)}
          className={'bg-lightblue text-black'}>
          Remove
        </Button>
      </div>
      <div className={'w-full mt-3'}>{tabsProducts[activeTab].content}</div>
    </div>
  );
};
