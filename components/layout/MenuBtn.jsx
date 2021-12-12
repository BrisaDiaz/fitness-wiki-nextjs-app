export default function MenuBtn({ isNavOpen, setIsNavOpen }) {
  return (
    <div
      className={'w-10 h-10  rounded-full  cursor-pointer ml-1 mt-1 fixed z-40 flex flex-col  justify-center items-center shadow-md transform  scale-75 transition ease-in-out bg-green-700  top-16  duration-500  hover:scale-90 hover:bg-green-600'.concat(
        isNavOpen ? ' p-1.5 gap-0 ' : ' p-2 gap-1 '
      )}
      data-testid="menuBtn"
      onClick={() => setIsNavOpen(!isNavOpen)}
    >
      <span
        className={'border-b-2 rounded-full  w-full  transform  border-white'.concat(
          isNavOpen ? ' rotate-45 ' : ' -rotate-0 '
        )}
      />
      <span
        className={'border-b-2 rounded-full  border-white w-full'.concat(
          isNavOpen ? ' hidden' : ' block '
        )}
      />
      <span
        className={'border-b-2 rounded-full  w-full  transform  border-white'.concat(
          isNavOpen ? ' -rotate-45 ' : ' -rotate-0 '
        )}
      />
    </div>
  )
}
