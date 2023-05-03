import { FC, useEffect, useState } from 'react';
import { AiOutlineEdit, AiOutlineEye } from 'react-icons/ai';

import { normalizeStringToURL } from 'shared/lib';
import { AppLink } from 'shared/ui/links';
import { productApi, productTypes } from 'entities/product';
import { DeleteProduct } from 'features/product/delete-product';
import { SortActiveType, TableList } from 'widgets/table-list';

type SearchResultProps = {
  value: string;
};

type ProductAdmin = Pick<
  productTypes.Product,
  'id' | 'name' | 'mainPhoto' | 'price' | 'sellerId'
>;

type ProductResult = {
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
  cost: {
    name: string;
    sortable: boolean;
    className: string;
    width: string;
  };
  seller: {
    name: string;
    sortable: boolean;
    to: string;
    className: string;
    width: string;
  };
};

export const SearchResult: FC<SearchResultProps> = () => {
  const [results, setResults] = useState<ProductResult[]>([]);
  const [activeSort, setActiveSort] = useState<SortActiveType>({
    name: 'none',
    type: 'none',
  });

  useEffect(() => {
    // запрос по value, name и type

    const products: ProductAdmin[] = productApi.productsFromServer;
    const data: ProductResult[] = products.map(product => ({
      id: {
        id: product.id,
        name: `#${product.id.substring(0, 5)}`,
        sortable: false,
        to: `product/${normalizeStringToURL(product.name)}`,
        className: 'text-blue/70 mr-1',
        width: 'w-1/12',
      },
      name: {
        name: product.name,
        sortable: true,
        className: 'whitespace-nowrap overflow-x-scroll scrollbar pr-0.5',
        width: 'w-5/12',
      },
      cost: {
        name: `$${product.price.current}`,
        sortable: true,
        className: 'hover:text-gray-dark duration-200 leading-5 mx-3',
        width: 'w-1/12',
      },
      seller: {
        name: product.sellerId,
        sortable: true,
        to: `sellers/${normalizeStringToURL(product.sellerId)}`,
        className: 'hover:text-blue duration-200',
        width: 'w-4/12',
      },
    }));

    setResults(data);
  }, [productApi.productsFromServer]);

  const handleSortChange = (active: SortActiveType) => {
    setActiveSort(active);
  };

  const handleActions = (name: string, id: string) => (
    <div className={'w-1/12 flex'}>
      <AppLink
        to={`/products/${normalizeStringToURL(name)}`}
        className={'text-black p-1.5 hover:text-blue '}>
        <AiOutlineEye />
      </AppLink>
      <AppLink
        to={`/edit/${normalizeStringToURL(name)}`}
        className={'text-black p-1.5 hover:text-green '}>
        <AiOutlineEdit />
      </AppLink>
      <DeleteProduct productId={id} />
    </div>
  );

  return (
    <TableList
      items={results}
      activeSort={activeSort}
      onSortChange={handleSortChange}
      actions={handleActions}
    />
  );
};
