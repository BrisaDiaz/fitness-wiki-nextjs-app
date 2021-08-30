import Link from 'next/link'
import { EditButton, DeleteButton } from '@/components/RoundedButtons'
export default function StoreRecipeControlls({
  handleSelection,
  handleDelete,
  handleUpdate,
  updateOption,
  recipe
}) {
  return (
    <div
      className={'flex  absolute top-0 transform scale-75 z-10 justify-start items-center  gap-2 max-w-max sm:-mt-1 mt-1.5 sm:'.concat(
        updateOption ? 'sm:-ml-7 mt-auto ' : ' sm:-ml-2.5 '
      )}
    >
      {!updateOption && recipe?.stored && (
        <Link href={`/collections/${recipe?.collection?.id}`} passHref>
          <a
            data-testid={`${recipe?.collection?.name
              .split(' ')
              .join('-')}-link`}
            href="!#"
            className="font-semibold pointer px-4 py-2 bg-gray-100 rounded-lg capitalize"
          >
            {recipe?.collection?.name}
          </a>
        </Link>
      )}
      {!recipe.stored && !updateOption && (
        <button
          data-testid="storeRecipeBtn"
          onClick={() => handleSelection(recipe)}
          className="ml-1.5 font-bold px-4 py-2  rounded-md bg-red-500 text-white hover:bg-red-600 transition-all ease-in-out shadow"
        >
          Store
        </button>
      )}
      {updateOption && (
        <div className="flex gap-1 ">
          <EditButton testId="editBtn" onClick={() => handleUpdate(recipe)} />
          <DeleteButton
            testId="deleteBtn"
            onClick={() => handleDelete(recipe)}
          />
        </div>
      )}
    </div>
  )
}
