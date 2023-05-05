import { useState } from 'react';

import { Search } from 'shared/ui/search';

import { SearchResult } from './search-result';

const Products = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <div className={'flex flex-col w-full'}>
      <Search
        handleChange={value => {
          setSearchValue(value);
        }}
        className={
          'mb-2 w-full bg-white border border-lightblue h-10 rounded-md'
        }
      />
      <SearchResult search={searchValue} />
    </div>
  );
};

export default Products;
