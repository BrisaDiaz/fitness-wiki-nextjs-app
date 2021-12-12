import { useRouter } from 'next/router'
export default function SideBar({ setIsNavOpen, isNavOpen }) {
  const router = useRouter()
  const handleClick = (href) => {
    setIsNavOpen(false)
    router.push(href)
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
        className={'h-full w-60 bg-green-700 fixed z-40 pt-20 top-0 p-2 shadow-lg transition easy-in-out '.concat(
          isNavOpen ? '-left-0' : '-left-60'
        )}
        data-testid="sidebar"
      >
        <ul className="p-2">
          {menuLinks.map((link) => (
            <li
              key={link.name}
              onClick={() => handleClick(link.href)}
              className="text-center text-white text-xl font-semibold cursor-pointer capitalize transition easy-in-out px-2 hover:animate-pulse mb-2 whitespace-nowrap"
            >
              {link.name}
            </li>
          ))}
        </ul>
      </aside>
    </>
  )
}
