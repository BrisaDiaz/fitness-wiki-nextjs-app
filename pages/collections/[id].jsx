import { useState, useEffect, useRef } from 'react'
import { getSession, useSession } from 'next-auth/client'
import Head from 'next/head'
import Image from 'next/image'
import DefaultErrorPage from 'next/error'
/// hooks
import useOnScreen from '@/hooks/useOnScreen'

import useStoreRecipeModal from '@/hooks/useStoreRecipeModal'
///utils
import { GET } from '@/utils/http'
/// components
import AddToCollectionModal from '@/components/recipe/AddToCollectionModal'
import StoreRecipeControlls from '@/components/recipe/StoreRecipeControlls'
import RecipeCard from '@/components/recipe/RecipeCard'
import SimpleInputModal from '@/components/SimpleInputModal'
const RESULTS_PER_PAGE = 5
export default function Collection({
  error,
  statusCode,
  initialRecipes,
  collectionsList,
  initialTotalResults,
  displayedCollection
}) {
  const [session] = useSession()
  const token = session?.accessToken
  const loadMoreSpierRef = useRef()

  const [page, setPage] = useState(1)
  const [offset, setOffset] = useState(0)
  const [totalResults, setTotalResults] = useState(initialTotalResults || 0)
  const [displayedResults, setDisplayedResults] = useState(RESULTS_PER_PAGE)
  const [recipes, setRecipes] = useState(initialRecipes || [])
  const [collections, setCollections] = useState(collectionsList || [])
  const [currentCollection, setCurrentCollection] =
    useState(displayedCollection)
  /// url fetch query
  const query = new URLSearchParams()
  query.append('offset', offset)
  query.append('number', RESULTS_PER_PAGE)

  const {
    isStoringModalOpen,
    storeModalRef,
    createModalRef,
    isCreateModalOpen,
    selectedRecipe,
    removedRecipes,
    handleRecipeStage,
    handleCollectionChange,
    handleRecipeDelete,
    handleCreateAndChange
  } = useStoreRecipeModal({
    token,

    currentCollection,
    collections,
    recipes,
    setRecipes,
    setCollections,
    setCurrentCollection
  })
  const isIntersepted = useOnScreen(loadMoreSpierRef)
  //// request more recipes
  useEffect(() => {
    if (displayedResults < totalResults && isIntersepted) {
      const fetchRecipesOnCollection = async (id, query, recipes, token) => {
        try {
          const [json] = await GET(`/collection/recipes/${id}?${query}`, token)
          setRecipes([...recipes, ...json.results])
          setTotalResults(json.totalResults)
        } catch (error) {
          console.log(error)
        }
      }
      setOffset(page * RESULTS_PER_PAGE)
      setPage(page + 1)
      setDisplayedResults(displayedResults + RESULTS_PER_PAGE)
      fetchRecipesOnCollection(currentCollection.id, query, recipes, token)
    }
    return
  }, [isIntersepted])

  if (error) return <DefaultErrorPage statusCode={statusCode} />
  return (
    <>
      <Head>
        <title>{currentCollection?.name}</title>

        <meta
          name="description"
          content="Divide and Store your favorites recipes inside your diffrent collections."
        />
        <meta
          name="keywords"
          content="healthy recipes,weight loss,special diets,meal plans,healthy eating,collection,folders,management,store,at hand,for latter"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="px-1 max-w-1000 mx-auto min-h-screen max-w-6xl">
        <div className="w-32 h-32 sm:w-40 sm:h-40  bg-gray-400 rounded-full mx-auto mt-6 -mb-6   sobject-cover overflow-hidden shadow-md ">
          <Image
            unoptimized={process.env.ENVIRONMENT !== 'PRODUCTION'}
            className="rounded-xl  mx-auto "
            width={200}
            height={200}
            alt={currentCollection?.name}
            src={currentCollection?.image || '/recipe-default-image.png'}
          />
        </div>
        <h1 className="page-title capitalize">{currentCollection?.name}</h1>

        <h5 className=" px-4 font-semibold text-gray-600 mb-4">
          {currentCollection?.length} Recipes
        </h5>
        {recipes?.length < 1 ? (
          <p className="text-center text-gray-600 text-xl mt-4">
            No recipe has been added yet.
          </p>
        ) : (
          <>
            <section className="sm:max-w-6xl mx-auto grid flex-col gap-3 flex-wrap md:grid-cols-2  justify-center mt-2 mb-6 sm:my-6  sm:px-5 lg:px-8 ">
              {recipes.map((recipe) =>
                //// dosen't display recipes remove from the database
                removedRecipes?.includes(recipe.id) ? null : (
                  <div className="relative" key={recipe?.id}>
                    {isStoringModalOpen && recipe?.id === selectedRecipe.id && (
                      <AddToCollectionModal
                        refernce={
                          removedRecipes?.includes(recipe.id)
                            ? null
                            : storeModalRef
                        }
                        setCollection={handleCollectionChange}
                        selectedRecipe={selectedRecipe}
                        collections={collectionsList}
                        editMode
                      />
                    )}
                    {isCreateModalOpen && recipe?.id === selectedRecipe?.id && (
                      <SimpleInputModal
                        callback={async (newCollection) =>
                          await handleCreateAndChange(newCollection)
                        }
                        title="Add a new collection"
                        reference={isCreateModalOpen && createModalRef}
                        inputOptions={{
                          name: 'newCollection',
                          type: 'text',
                          placeholder: 'Enter name...'
                        }}
                      >
                        <div className="w-28 h-28 bg-gray-400 rounded-full mx-auto my-6 sobject-cover overflow-hidden shadow-md">
                          <Image
                            unoptimized={
                              process.env.ENVIRONMENT !== 'PRODUCTION'
                            }
                            className="rounded-xl  mx-auto "
                            width={200}
                            height={200}
                            alt={selectedRecipe?.title || 'create collection'}
                            src={
                              selectedRecipe?.image ||
                              '/recipe-default-image.png'
                            }
                          />
                        </div>
                      </SimpleInputModal>
                    )}
                    <RecipeCard recipe={recipe}>
                      <StoreRecipeControlls
                        recipe={recipe}
                        handleDelete={handleRecipeDelete}
                        handleUpdate={handleRecipeStage}
                        updateOption={true}
                      />
                    </RecipeCard>
                  </div>
                )
              )}
            </section>

            <span ref={loadMoreSpierRef} />
          </>
        )}
      </section>
    </>
  )
}

export async function getServerSideProps({ req, query }) {
  const session = await getSession({ req })

  const [currentCollectionJson, response] = await GET(
    `/collection/${query.id}`,
    session.accessToken
  )

  if (response.status >= 400) {
    return {
      props: {
        error: true,
        statusCode: response.status
      }
    }
  }

  const [collectionRecipesJson] = await GET(
    `/collection/recipes/${query.id}?number=${RESULTS_PER_PAGE}`,
    session.accessToken
  )
  console.log(collectionRecipesJson.results)
  const [collectionsListJson] = await GET(`/collection`, session.accessToken)

  return {
    props: {
      initialRecipes: collectionRecipesJson.results || [],
      collectionsList: collectionsListJson.data || [],
      displayedCollection: currentCollectionJson.data,
      initialTotalResults: collectionRecipesJson.totalResults
    }
  }
}
