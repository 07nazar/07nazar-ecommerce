import { Dispatch, SetStateAction, useState } from 'react';

import { PaginationBox } from 'shared/ui/pagination';

import { TableHeading } from './table-heading';
import { TableItem, TableItemLinkType } from './table-item';

type TableListProps<T> = {
  items: T[];
  activeSort: string;
  setActiveSort: Dispatch<SetStateAction<string>>;
  actions: (name: string, id: string) => JSX.Element;
};

export const TableList = <T extends Record<string, TableItemLinkType>>({
  items,
  setActiveSort,
  activeSort,
  actions,
}: TableListProps<T>) => {
  const [productPerPage, setProductsPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = items.slice(indexOfFirstProduct, indexOfLastProduct);

  const headingKeys =
    items[0] &&
    Object.entries(items[0]).map(([key, value]) => ({
      name: key,
      width: value.width,
      sortable: value.sortable,
    }));

  return (
    <>
      <div className={'w-full bg-white rounded-md mb-4'}>
        <TableHeading
          headingKeys={headingKeys}
          activeSort={activeSort}
          setActiveSort={setActiveSort}
        />

        {currentProducts.map(item => (
          <TableItem
            item={item}
            key={`table-item-${item.toString().length}-${item.id.id || ''}`}
            actions={actions(item.name.name, item.id.id || '')}
          />
        ))}
      </div>
      {items.length > productPerPage && (
        <PaginationBox
          changePageHandler={page => setCurrentPage(page)}
          count={Math.ceil(items.length / productPerPage)}
          setSelectedOption={val => {
            if (typeof val[0]?.text === 'string') {
              const selectedNumber = val[0].text.match(/\d+/);

              setProductsPerPage(Number(selectedNumber));
            }
          }}
        />
      )}
    </>
  );
};
