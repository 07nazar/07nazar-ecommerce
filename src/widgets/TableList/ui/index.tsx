import { useState } from 'react';

import type { TableItemLinkType } from './Item';
import type { SortActiveType } from './SortButton';

import { PaginationBox } from '../../Pagination';

import { TableHeading } from './Heading';
import { TableItem } from './Item';

type TableItemData = {
  [key: string]: string | number | TableItemLinkType;
};

type TableListProps<T extends TableItemData> = {
  items: T[];
  activeSort: SortActiveType;
  onSortChange: (active: SortActiveType) => void;
};

export const TableList = <T extends TableItemData>({
  items,
  onSortChange,
  activeSort,
}: TableListProps<T>) => {
  const [productPerPage, setProductsPerPage] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = items.slice(indexOfFirstProduct, indexOfLastProduct);

  const headingKeys =
    items[0] &&
    Object.entries(items[0]).map(([key, value]) => {
      if (typeof value === 'object' && value.sortable) {
        return { name: key, width: value.width, sortable: value.sortable };
      }

      return { name: key, width: 'w-1/12', sortable: false };
    });

  return (
    <div className={'w-full bg-white rounded-md mb-4'}>
      <TableHeading
        headingKeys={headingKeys}
        activeSort={activeSort}
        handleSortChange={onSortChange}
      />

      {currentProducts.map((item, index) => (
        <TableItem<T> item={item} key={`table-item-${index}`} />
      ))}

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
    </div>
  );
};
