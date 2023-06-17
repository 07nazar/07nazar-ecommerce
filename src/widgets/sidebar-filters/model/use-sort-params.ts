import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { generateStringURL } from 'shared/lib';

type QueryParams = {
  [key: string]: string;
};

export const useSortParams = (sortName: string, sortValues: string[]) => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  useEffect(() => {
    const queryParams: QueryParams = {};
    const url = generateStringURL(sortValues);

    if (sortValues) {
      queryParams[sortName] = url;
    } else {
      delete queryParams[sortName];
    }

    Object.entries(queryParams).forEach(([key, value]) => {
      if (value) {
        searchParams.set(key, value.toString().replace(/\+/g, ' '));
      } else {
        searchParams.delete(key);
      }
    });

    navigate(`?${searchParams.toString()}`, {
      replace: true,
    });
  }, [location.search, sortName, sortValues]);
};
