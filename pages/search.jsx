import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { getSession, useSession } from 'next-auth/client'
import attachStoredDataToRecipe from '@/utils/attachStoredDataToRecipe'

/// utils
import { GET } from '@/utils/http'
import getFormattedRecipe from '@/utils/getFormattedRecipe'

/// hooks

import useStoreRecipeModal from '@/hooks/useStoreRecipeModal'
///constants
import * as constants from '@/constants/defaultQueryParams'
///components
import RecipeCard from '@/components/recipe/RecipeCard'
import LoadingHeart from '@/components/LoadingHeart'
import SearchBar from '@/components/SearchBar'
import SortComponent from '@/components/SortComponent'
import SelectComponent from '@/components/SelectComponent'
import FilterTable from '@/components/FilterTable'
import ListItems from '@/components/ListItems'
import PaginationComponent from '@/components/PaginationComponent'
import AddToCollectionModal from '@/components/recipe/AddToCollectionModal'
import StoreRecipeControls from '@/components/recipe/StoreRecipeControls'
import SimpleInputModal from '@/components/LocatedInputModal'
export default function SearchPage({
  initialRecipes,
  initialTotalResults,
  collectionsList
}) {
  const [session] = useSession()
  const token = session?.accessToken
  /// prevent fetch on mount
  const [renderCount, setRenderCount] = useState(0)
  const [serverError, setServerError] = useState(false)
  const [search, setSearch] = useState('')
  const [cuisine, setCuisine] = useState('all')
  const [diet, setDiet] = useState('all')
  const [type, setType] = useState('all')
  const [page, setPage] = useState(1)
  const [offset, setOffset] = useState(0)
  const [excludeIngredients, setExcludeIngredients] = useState([])
  const [collections, setCollections] = useState(collectionsList || [])
  const [totalResults, setTotalResults] = useState(initialTotalResults || 0)
  const [sort, setSort] = useState('healthiness')
  const [sortDirection, setSortDirection] = useState('desc')
  const [recipes, setRecipes] = useState(initialRecipes || [])
  const [userRecipes, setUserRecipes] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  /// url query
  const query = new URLSearchParams()
  query.append('sortDirection', sortDirection)
  query.append('sort', sort)
  query.append('offset', offset)
  query.append('addRecipeNutrition', 'true')
  query.append('number', constants.RESULTS_PER_PAGE)

  useEffect(() => {
    if (search) {
      query.append('query', search)
    }
    if (diet != 'all') {
      query.append('diet', diet)
    }
    if (cuisine != 'all') {
      query.append('cuisine', cuisine)
    }
    if (type != 'all') {
      query.append('type', type)
    }
    if (excludeIngredients.length > 0) {
      query.append('excludeIngredients', excludeIngredients.join(','))
    }
  }, [
    search,
    diet,
    cuisine,
    type,
    sortDirection,
    sort,
    excludeIngredients,
    page
  ])

  ///get all stored user recipes
  useEffect(() => {
    const fetchUserRecipes = async (token) => {
      try {
        const [data] = await GET(`/recipe/user`, token)

        if (data.results) {
          setUserRecipes(data.results)
          //// attach Info Related Width The Collection
          const withCollectionReferenceRecipes = attachStoredDataToRecipe(
            data.results,
            recipes
          )

          setRecipes(withCollectionReferenceRecipes)
        }
      } catch (error) {
        console.error(error)
      }
    }
    if (token) {
      fetchUserRecipes(token)
    }
  }, [token])

  useEffect(() => {
    if (renderCount === 0) return setRenderCount(1)

    const fetchMoreRecipes = async (query) => {
      try {
        const [data] = await GET(`/recipe?${query}`, token)
        setTotalResults(
          data.totalResults <= constants.MAX_ALLOWED_RESULTS
            ? data.totalResults
            : constants.MAX_ALLOWED_RESULTS
        )

        /// if user recipes are available set info related to the collection
        if (userRecipes) {
          const withCollectionReferenceRecipes = attachStoredDataToRecipe(
            userRecipes,
            data.results
          )

          setRecipes(withCollectionReferenceRecipes)

          return setIsLoading(false)
        }

        setRecipes(data.results)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
        setIsLoading(false)
        return setServerError(true)
      }
    }
    setIsLoading(true)
    fetchMoreRecipes(query, token)
  }, [
    cuisine,
    diet,
    type,
    sort,
    sortDirection,
    page,
    search,
    excludeIngredients
  ])

  const {
    isStoringModalOpen,

    isCreateModalOpen,
    selectedRecipe,

    closeStoreModal,
    closeCreateModal,
    handleStoreInCollection,
    openCreateModal,
    handleRecipeStage,
    handleCreateAndStore
  } = useStoreRecipeModal({
    token,
    setCollections,
    collections,
    recipes,
    setRecipes,
    userRecipes,
    setUserRecipes
  })

  return (
    <div>
      <Head>
        <title>Search</title>

        <meta
          name="description"
          content="Discover our best healthy recipes, including breakfasts, lunches, dinners and snacks. Find dishes to fit with special diets and nutritional needs."
        />
        <meta
          name="keywords"
          content="healthy recipes,weight loss,special diets,meal plans,healthy eating"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="px-1 max-w-1000 mx-auto  mb-10">
        <h2 className="page-title ">
          Let us help you find the perfect meal for today!!
        </h2>
        <div className="mx-4">
          <SearchBar onChange={(event) => setSearch(event.target.value)} />
          <FilterTable>
            <>
              <SelectComponent
                onChange={(event) => setCuisine(event.target.value)}
                label="Cousine Type:"
                name="cousinType"
                options={constants.COUSINS_OPTIONS}
                globalOption="all"
              />

              <SelectComponent
                onChange={(event) => setType(event.target.value)}
                label="Meal Type:"
                name="mealType"
                options={constants.TYPE_OPTIONS}
                globalOption="all"
              />

              <SelectComponent
                onChange={(event) => setDiet(event.target.value)}
                label="Diet Type:"
                name="dietType"
                options={constants.DIET_OPTIONS}
                globalOption="all"
              />

              <SortComponent
                onSortChange={(event) => setSort(event.target.value)}
                onDirectionChange={(event) =>
                  setSortDirection(event.target.value)
                }
                label="Sort By:"
                name="sortType"
                options={constants.SORT_OPTIONS}
                directions={constants.SORT_DIRECTIONS}
                sortDirection={sortDirection}
              />
            </>
          </FilterTable>
          <ListItems
            items={excludeIngredients}
            setItems={setExcludeIngredients}
          />
        </div>
        {isLoading && <LoadingHeart />}
        {recipes && recipes !== [] && !isLoading && (
          <section className="sm:max-w-6xl mx-auto grid flex-col gap-3 flex-wrap md:grid-cols-2  justify-center   mb-6 mt-10  sm:px-5 lg:px-8 px-6">
            {recipes.map(getFormattedRecipe).map((recipe) => (
              <div className="relative" key={recipe?.id}>
                <AddToCollectionModal
                  id={recipe.id}
                  isModalOpen={
                    isStoringModalOpen && recipe?.id === selectedRecipe?.id
                  }
                  setCollection={handleStoreInCollection}
                  handleNewCollection={openCreateModal}
                  selectedRecipe={selectedRecipe}
                  collections={collections}
                  closeModal={closeStoreModal}
                />

                <SimpleInputModal
                  callback={async (newCollection) =>
                    await handleCreateAndStore(newCollection)
                  }
                  isModalOpen={
                    isCreateModalOpen && recipe?.id === selectedRecipe?.id
                  }
                  title="Add a new collection"
                  closeModal={closeCreateModal}
                  inputOptions={{
                    name: 'newCollection',
                    type: 'text',
                    placeholder: 'Enter name...'
                  }}
                >
                  <div className="w-28 h-28 bg-gray-400 rounded-full mx-auto my-6 subject-cover overflow-hidden shadow-md">
                    <Image
                      unoptimized={process.env.ENVIRONMENT !== 'PRODUCTION'}
                      className="rounded-xl  mx-auto "
                      width={200}
                      height={200}
                      alt={selectedRecipe?.title || 'create collection'}
                      src={selectedRecipe?.image || '/recipe-default-image.png'}
                    />
                  </div>
                </SimpleInputModal>

                <RecipeCard recipe={recipe}>
                  <StoreRecipeControls
                    recipe={recipe}
                    handleSelection={handleRecipeStage}
                  />
                </RecipeCard>
              </div>
            ))}
          </section>
        )}
        {!isLoading && recipes && recipes?.length === 0 && (
          <h2 className="mt-2 text-green-500 text-2xl font-bold text-center">
            There is not coincidence for the search
          </h2>
        )}
        {serverError && (
          <h2 className="mt-2 text-green-500 text-2xl font-bold text-center">
            Something went wrong
          </h2>
        )}
        {totalResults > constants.RESULTS_PER_PAGE && (
          <PaginationComponent
            page={page}
            setPage={setPage}
            totalResults={totalResults}
            setOffset={setOffset}
            resultsPerPage={constants.RESULTS_PER_PAGE}
          />
        )}
      </section>
    </div>
  )
}
export async function getServerSideProps({ req }) {
  const session = await getSession({ req })
  if (!session) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false
      }
    }
  }
  const query = new URLSearchParams()
  query.append('sortDirection', 'desc')
  query.append('sort', 'healthiness')
  query.append('offset', 0)
  query.append('addRecipeNutrition', 'true')
  query.append('number', constants.RESULTS_PER_PAGE)
  const [recipes] = await GET(`/recipe?${query}`, session.accessToken)
  const [collectionsJson] = await GET('/collection', session.accessToken)

  return {
    props: {
      initialRecipes: recipes.results || [],
      initialTotalResults:
        recipes.totalResults < constants.MAX_ALLOWED_RESULTS
          ? recipes.totalResults
          : constants.MAX_ALLOWED_RESULTS,
      collectionsList: collectionsJson?.data || []
    }
  }
}
