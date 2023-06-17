import { FC, useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router-dom';

import { capitalize, generateStringURL, useMatchMedia } from 'shared/lib';
import { Button } from 'shared/ui/button';
import { Slider } from 'shared/ui/slider';

export const ActiveFilters: FC = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const { isMobile } = useMatchMedia();
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  useEffect(() => {
    const searchParams = new URLSearchParams(search);
    const filters: string[] = [];

    searchParams.forEach(val => {
      val.split('_').forEach(filter => {
        const str = capitalize(filter).replaceAll('-', ' ');
        filters.push(str);
      });
    });

    setActiveFilters(filters);
  }, [search]);

  const handleDelete = (active: string) => {
    const searchParams = new URLSearchParams(search);

    searchParams.forEach((value, key) => {
      const values = value.split('_');
      const updatedValues = values.filter(
        val => val !== generateStringURL(active)
      );

      if (values.length !== updatedValues.length) {
        if (updatedValues.length === 0) {
          return searchParams.delete(key);
        }

        searchParams.delete(key);
        searchParams.set(key, updatedValues.join('_'));
      }

      return null;
    });

    navigate(`?${searchParams.toString()}`);
  };

  const handleClearAll = () => {
    const searchParams = new URLSearchParams(search);
    const keysToDelete = Array.from(searchParams.keys());

    keysToDelete.forEach(key => {
      searchParams.delete(key);
    });

    navigate(`?${searchParams.toString()}`);
  };

  return (
    <div className={'mb-5'}>
      <Slider
        className={'flex flex-wrap items-center gap-2'}
        activateOn={'isMobile'}
        spaceBetween={7}>
        {activeFilters.map(item => (
          <Button
            onClick={() => handleDelete(item)}
            className={
              'flex items-center gap-2 border border-blue bg-white py-[6.5px] pl-2.5 pr-[6px] text-gray-dark'
            }
            key={item}>
            {item}
            <IoMdClose size={18} className={'text-gray-hot'} />
          </Button>
        ))}
        {!isMobile && activeFilters.length !== 0 && (
          <Button onClick={handleClearAll} className={'rounded-none text-blue'}>
            Clear all filter
          </Button>
        )}
      </Slider>
    </div>
  );
};
