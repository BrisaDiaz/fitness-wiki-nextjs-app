import Link from 'next/link'

import { EditButton, DeleteButton } from '@/components/RoundedButtons'
export default function StoreRecipeControls({
  handleSelection,
  handleDelete,
  handleUpdate,
  updateOption,
  recipe,
  tabIndex
}) {
  const handleClick = (e, onClick) => {
    if (onClick) onClick()
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <div
      className={'flex  absolute top-0 transform scale-75 z-10 justify-start items-center  gap-2 max-w-max sm:mt-1 mt-1.5 '.concat(
        updateOption ? ' mt-auto ' : ' sm:-ml-1.5 '
      )}
    >
      {!updateOption && recipe?.stored && (
        <Link href={`/collections/${recipe?.collection?.id}`} passHref>
          <h6
            data-testid={`${recipe?.collection?.name
              .split(' ')
              .join('-')}-link`}
            href="!#"
            className="font-semibold pointer px-4 py-2 bg-gray-100 rounded-lg capitalize"
          >
            {recipe?.collection?.name}
          </h6>
        </Link>
      )}
      {!recipe.stored && !updateOption && (
        <button
          data-testid="storeRecipeBtn"
          onClick={(e) => handleClick(e, handleSelection(recipe, 'store'))}
          className="ml-1.5 font-bold px-4 py-2  rounded-md bg-red-500 text-white hover:bg-red-600 transition-all ease-in-out shadow transform"
        >
          Store
        </button>
      )}
      {updateOption && (
        <div className="flex gap-1 ">
          <EditButton
            tabIndex={tabIndex}
            testId="editBtn"
            onClick={() => handleUpdate(recipe, 'update')}
          />
          <DeleteButton
            tabIndex={tabIndex}
            testId="deleteBtn"
            onClick={() => handleDelete(recipe, 'delete')}
          />
        </div>
      )}
    </div>
  )
}
