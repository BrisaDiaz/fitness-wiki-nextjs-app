export default function MenuBtn({ isNavOpen, setIsNavOpen, tabIndex }) {
  return (
    <div
      className="w-10 h-10  rounded-full ml-2 cursor-pointer z-40 flex flex-col  justify-center items-center shadow-md transform  scale-75 transition ease-in-out bg-green-700   duration-500  hover:bg-green-600  focus-within:bg-green-600   relative   p-2 gap-1  p-2 gap-1  border border-white focus-within:border-transparent"
      data-testid="menuBtn"
    >
      <button
        tabIndex={tabIndex || 0}
        className="absolute w-full h-full z-10 top-0 left-0 bg-transparent rounded-full"
        onClick={() => setIsNavOpen(!isNavOpen)}
      />

      <span className="border-b-2 rounded-full  w-full  transform  border-white" />
      <span className="border-b-2 rounded-full  border-white w-full" />
      <span className="border-b-2 rounded-full  w-full  transform  border-white" />
    </div>
  )
}
