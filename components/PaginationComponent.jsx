import usePaginationComponent from '../hooks/usePaginationComponent'

export default function PaginationComponent({
  page,
  totalResults,
  setPage,
  setOffset,
  resultsPerPage
}) {
  const { handlePrevious, handleNext, handelSetPage, pagesNumbers, maxPage } =
    usePaginationComponent({
      page,
      totalResults,
      setPage,
      setOffset,
      resultsPerPage
    })
  return (
    <div className="flex flex-row justify-cente my-10  ">
      <div className="flex flex-row mx-auto w-auto  gap-2  font-semibold">
        {page > 1 && (
          <button
            type="button"
            className="px-2  border-2 border-transparent hover:bg-green-300 shadow-md rounded bg-green-200 font-semibold text-gray-800"
            onClick={() => handlePrevious()}
          >
            Prev
          </button>
        )}

        {pagesNumbers.map((number) => (
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
        {page < maxPage && (
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
  )
}
