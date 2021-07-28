import Head from 'next/head'
import getConfig from 'next/config'
import { useState, useEffect } from 'react'
import { getSession } from 'next-auth/client'
import RecipeCard from '@/components/RecipeCard'
import LoadingHeart from '@/components/LoadingHeart'
import SearchBar from '@/components/SearchBar'
import SortComponent from '@/components/SortComponent'
import SelectComponent from '@/components/SelectComponent'
import FilterTable from '@/components/FilterTable'
import PaginationComponent from '@/components/PaginationComponent'
import * as constants from '@/consts/defaultQueryParams'

export default function SearchPage() {
  const { publicRuntimeConfig } = getConfig()
  const query = new URLSearchParams()
  const [serverError, setServerError] = useState(false)
  const [search, setSearch] = useState('')
  const [cuisine, setCuisine] = useState('all')
  const [diet, setDiet] = useState('all')
  const [type, setType] = useState('all')
  const [offset, setOffset] = useState(0)
  const [totalResults, setTotalResults] = useState(0)
  const [sort, setSort] = useState('popularity')
  const [sortDirection, setSortDirection] = useState('desc')
  const [recipes, setRecipes] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)
  query.append('apiKey', publicRuntimeConfig.API_KEY)
  query.append('sortDirection', sortDirection)
  query.append('sort', sort)
  query.append('offset', offset)
  query.append('addRecipeNutrition', 'true')
  query.append('number', constants.RESULTS_PER_PAGE)

  useEffect(() => {
    if (search !== '') {
      query.append('query', search)
    }
    if (diet !== 'all') {
      query.append('diet', diet)
    }
    if (cuisine !== 'all') {
      query.append('cuisine', cuisine)
    }
    if (type !== 'all') {
      query.append('type', type)
    }
  }, [search, diet, cuisine, type, sortDirection, sort])

  useEffect(() => {
    setIsLoading(true)

    const url = `https://api.spoonacular.com/recipes/complexSearch?${query}`

    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTotalResults(data.totalResults)

        setRecipes(data.results)

        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setIsLoading(false)
        return setServerError(true)
      })
  }, [cuisine, diet, type, sort, sortDirection, page, search])

  return (
    <div>
      <Head>
        <title>Search</title>

        <meata
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
        <h2 className="text-center pb-16 pt-10  text-2xl md:text-3xl lg:text-4xl px-2 l font-bold text-green-700 mb-10 ">
          Let us help you find the perfect meal for today!!
        </h2>
        <FilterTable>
          <>
            <SelectComponent
              onChange={(event) => setCuisine(event.target.value)}
              label="Cousine Type:"
              name="cousinType"
              options={constants.COUSINE_OPTIONS}
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
              directions={constants.SORT_DIRECIONS}
              sortDirection={sortDirection}
            />
          </>
        </FilterTable>
        <SearchBar onChange={(event) => setSearch(event.target.value)} />
        {isLoading && <LoadingHeart />}
        {recipes && recipes !== [] && !isLoading && (
          <>
            <section className="max-w-6xl mx-auto grid flex-col gap-3 flex-wrap md:grid-cols-2  justify-center  my-6  sm:px-5 lg:px-8 ">
              {recipes.map((recipe) => (
                <RecipeCard key={recipe?.id} recipe={recipe} />
              ))}
            </section>
          </>
        )}

        {serverError && (
          <h2 className="mt-2 text-green-400 text-2xl font-bold">
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
  return {
    props: {}
  }
}
