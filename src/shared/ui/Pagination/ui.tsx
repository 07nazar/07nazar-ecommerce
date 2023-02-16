import { FC, useState, useEffect } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

interface IPagination {
  count: number
  maxVisible: 3 | 5
}

export const Pagination: FC<IPagination> = ({ count, maxVisible }) => {
  const [activePage, setActivePage] = useState(1)
  const [pages, setPages] = useState<number[] | null>(null)

  const arr: number[] = []
  for (let i = 1; i <= count; i += 1) {
    arr.push(i)
  }
  const spaceRange = Math.floor(maxVisible / 2)

  const curLeft = activePage - maxVisible < 0 ? 0 : activePage - (spaceRange + 1)
  const curRight = activePage < maxVisible ? maxVisible : activePage + spaceRange

  useEffect(() => {
    setPages(() => arr.slice(0, maxVisible))
  }, [])

  useEffect(() => {
    if (activePage + spaceRange >= arr.length) {
      setPages(() => arr.slice(arr.length - maxVisible, arr.length))
    } else {
      setPages(() => arr.slice(curLeft, curRight))
    }
  }, [activePage])

  const onClickNext = () => {
    if (activePage === arr.length) return
    setActivePage((prev) => prev + 1)
  }

  const onClickPrev = () => {
    if (activePage === 1) return
    setActivePage((prev) => prev - 1)
  }

  return (
    <div className="inline-flex justify-center items-center mt-10 border-2 border-gray-medium rounded-md">
      <button
        onClick={onClickPrev}
        className="align-self stretch justify-center items-center text-blue">
        <IoIosArrowBack size={20} />
      </button>

      <div className="flex w-full overflow-hidden">
        <div className={`flex`}>
          {pages?.map((item) => (
            <button
              key={item}
              onClick={() => setActivePage(item)}
              className={`paginationItem transition-colors duration-300 ${
                activePage === item && 'bg-gray-medium'
              }`}>
              {item}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={onClickNext}
        className="align-self: stretch justify-center items-center text-blue">
        <IoIosArrowForward size={20} />
      </button>
    </div>
  )
}
