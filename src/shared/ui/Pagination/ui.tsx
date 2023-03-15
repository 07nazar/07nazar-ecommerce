import { FC, useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface IPagination {
  className?: string;
  count: number;
  maxVisible: 3 | 5;
}

export const Pagination: FC<IPagination> = ({
  className = '',
  count,
  maxVisible,
}) => {
  const [activePage, setActivePage] = useState(1);
  const [pages, setPages] = useState<number[] | null>(null);

  const arr: number[] = [];
  for (let i = 1; i <= count; i += 1) {
    arr.push(i);
  }
  const spaceRange = Math.floor(maxVisible / 2);

  const curLeft =
    activePage - maxVisible < 0 ? 0 : activePage - (spaceRange + 1);
  const curRight =
    activePage < maxVisible ? maxVisible : activePage + spaceRange;

  useEffect(() => {
    setPages(() => arr.slice(0, maxVisible));
  }, []);

  useEffect(() => {
    if (activePage + spaceRange >= arr.length) {
      setPages(() => arr.slice(arr.length - maxVisible, arr.length));
    } else {
      setPages(() => arr.slice(curLeft, curRight));
    }
  }, [activePage]);

  const onClickNext = () => {
    if (activePage === arr.length) return;
    setActivePage(prev => prev + 1);
  };

  const onClickPrev = () => {
    if (activePage === 1) return;
    setActivePage(prev => prev - 1);
  };

  return (
    <div
      className={`${className} flex items-center border border-gray-medium rounded-md `}>
      <button
        onClick={onClickPrev}
        disabled={activePage === 1}
        className='paginationItem'>
        <IoIosArrowBack size={20} />
      </button>

      <div className='flex overflow-hidden'>
        <div className={`flex last:border-r border-gray-medium`}>
          {pages?.map(item => (
            <button
              key={`pagination-${item}`}
              onClick={() => setActivePage(item)}
              className={`paginationItem transition-colors duration-300 border-l ${
                activePage === item && 'bg-gray-medium'
              }`}>
              {item}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={onClickNext}
        disabled={activePage === count}
        className='paginationItem'>
        <IoIosArrowForward size={20} />
      </button>
    </div>
  );
};
