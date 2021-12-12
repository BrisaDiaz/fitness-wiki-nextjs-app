import Image from 'next/image'
import { AddButton } from '../RoundedButtons'
export default function AddToCollectionModal({
  refernce,
  setCollection,
  selectedRecipe,
  collections,
  toggleNewCollectionModal,
  editMode
}) {
  return (
    <div
      ref={refernce}
      className="w-72 pt-4 modal absolute z-50"
      data-testid="storeRecipeModal"
    >
      <h4 className="text-center text-2xl text-gray-600 font-semibold mb-4">
        Store in collection{' '}
      </h4>
      <ul className="py-4 flex flex-col gap-1 max-h-60 overflow-y-auto border border-gray-100">
        {collections.map((collection) => (
          <li
            key={collection?.name}
            className={'p-2 pl-0  flex items-center justify-between gap-2 group hover:bg-gray-100 transition-all ease-in-out '.concat(
              selectedRecipe?.collection?.id === collection?.id && 'bg-gray-100'
            )}
          >
            <div className="flex items-center w-60">
              <div className="w-14 h-10 bg-gray-400 rounded-md ml-2  ">
                {collection?.image && (
                  <Image
                    unoptimized={process.env.ENVIRONMENT !== 'PRODUCTION'}
                    className="rounded-md shadow mx-auto sm:self-center "
                    width={100}
                    height={100}
                    src={collection?.image}
                    alt={collection?.name}
                  />
                )}
              </div>
              <p className="ml-2 capitalize overflow-x-hidden w-full overflow-ellipsis    ">
                {collection?.name}
              </p>
            </div>
            {selectedRecipe?.collection?.id !== collection?.id && (
              <button
                data-testid={`store-in-${collection?.name
                  ?.split(' ')
                  ?.join('-')}`}
                onClick={() => setCollection(collection)}
                className="opacity-0 group-hover:opacity-100 font-bold px-4 py-1.5 rounded-md bg-red-500 text-white hover:bg-red-600 transition-all ease-in-out shadow transform scale-95"
              >
                Store
              </button>
            )}
          </li>
        ))}
      </ul>
      {!editMode && (
        <div className="px-4 justify-center   py-2  flex items-center gap-2 ">
          <h4 className="text-md font-semibold text-gray-500 capitalize">
            add a new collection
          </h4>
          <AddButton
            testId="addANewCollectionBtn"
            darck
            onClick={() => toggleNewCollectionModal()}
          />
        </div>
      )}
    </div>
  )
}
