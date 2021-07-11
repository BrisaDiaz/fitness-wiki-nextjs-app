import { useEffect, useState } from 'react';

export default function PaginationComponent({
  page,
  maxPage,
  setPage,
  setMaxPageNumber,
  setMinPageNumber,
  minPageNumber,
  maxPageNumber,
  setOffset,
  resultsPerPage,
}) {
  const handlePrevious = () => {

    if (page - 1 > 1) {
      setMinPageNumber(page -2);
      setMaxPageNumber(page);
    }

     setOffset((page - 2) * resultsPerPage);
    setPage(page - 1);
  };
  const handleNext = () => {

if(page + 1 < maxPage) {

setMinPageNumber(page);

(page + 2 <= maxPage ) ? setMaxPageNumber(page + 2) : setMaxPageNumber(page + 1);

    }

  setOffset(page * resultsPerPage);
    setPage(page + 1);
  };


  const handelSetPage = pageNumber => {


 (pageNumber === 1) ? setMinPageNumber(1) : (pageNumber === maxPage) ? setMinPageNumber(pageNumber-2) : setMinPageNumber(pageNumber-1);

   (pageNumber === maxPage) ? setMaxPageNumber(maxPage) :  (pageNumber === 1 ) ? setMaxPageNumber(3) : setMaxPageNumber(pageNumber + 1)


      setOffset((pageNumber - 1) *resultsPerPage);
    setPage(pageNumber);
  };

  const getVisualizedPageNumbers = () => {
    const numbers = [];
    for (let index = minPageNumber; index < maxPageNumber + 1; index + 1) {
      numbers.push(index);
index += 1;
    }
    return numbers;
  };

  const [pagesNumbers, setPageNumbers] = useState(getVisualizedPageNumbers());

  useEffect(() => {
    setPageNumbers(getVisualizedPageNumbers());
  }, [page]);

  return (
    <div className="flex flex-row justify-cente my-10  ">
      <div className="flex flex-row mx-auto w-auto  gap-2  font-semibold">
        {page !== 1 && (
          <button
            type="button"
            className="px-2  border-2 border-transparent hover:bg-green-300 shadow-md rounded bg-green-200 font-semibold text-gray-800"
            onClick={() => handlePrevious()}
          >
            Prev
          </button>
        )}

        {pagesNumbers.map(number => (
          <button
            key={number}
            type="button"
            className={
              page === number
                ? 'px-2 border-2 border-transparent   bg-green-400 shadow-md  rounded font-extrabold text-white transform scale-110 '
                : 'px-2  border-2 border-transparent shadow-md rounded hover:bg-gray-100'
            }
            onClick={() => handelSetPage(number)}
          >
            {number}
          </button>
        ))}
        {(page !==maxPage) && (
          <button
            type="button"
            className="px-2  border-2 border-transparent shadow-md rounded bg-green-200 hover:bg-green-300
 font-semibold text-gray-800"
            onClick={() => handleNext()}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
