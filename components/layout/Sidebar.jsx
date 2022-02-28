import Link from 'next/link'
export default function SideBar({ setIsNavOpen, isNavOpen, tabIndex }) {
  const handleClick = () => {
    setIsNavOpen(false)
  }

  const menuLinks = [
    { name: 'Search Recipes', href: '/search' },
    { name: 'Calories Calculator', href: '/calories-calculator' },
    { name: 'Macros Calculator', href: '/macros-calculator' },
    { name: 'Meals Size Calculator', href: '/meals-size-calculator' },
    { name: 'My Collections', href: '/collections' }
  ]
  return (
    <>
      <aside
        className={`h-full w-60 bg-green-700 fixed z-30 pt-20 top-0 p-2 shadow-lg transition easy-in-out  duration-500 ${
          isNavOpen ? '-translate-x-0' : '-translate-x-60 '
        }`}
        data-testid="sidebar"
        aria-label="navigation bar"
      >
        <ul className="py-4 px-2 w-full">
          {menuLinks.map((link) => (
            <li
              key={link.name}
              className="hover:animate-pulse  focus-within:animate-pulse mb-2 w-full text-center "
              onClick={handleClick}
            >
              <Link href={link.href} passHref>
                <a
                  tabIndex={tabIndex}
                  href="#"
                  className="text-white text-xl font-semibold cursor-pointer capitalize transition easy-in-out w-full   whitespace-nowrap  "
                >
                  {link.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  )
}
