import { useState, useRef, useEffect } from 'react'
import Head from 'next/head'

import { getSession, useSession } from 'next-auth/client'
/// hooks

import useOnScreen from '@/hooks/useOnScreen'
/// utils
import { GET, POST, DELETE, PUT } from '@/utils/http'
/// components

import LocatedInputModal from '@/components/LocatedInputModal'
import FullPageInputModal from '@/components/FullPageInputModal'
import LoadingHeart from '@/components/LoadingHeart'
import CollectionsCard from '@/components/recipe/CollectionsCard'
import { AddButton } from '@/components/RoundedButtons'
import Dialog from '@/components/Dialog'
const RESULTS_PER_PAGE = 8

export default function Collections({
  initialCollections,
  initialTotalResults
}) {
  const query = new URLSearchParams()
  const [session] = useSession()
  const token = session?.accessToken
  const [isCreateCollectionModal, setIsCreateCollectionModal] = useState(false)
  const [collections, setCollections] = useState(initialCollections || [])
  const [isEditingModalOpen, setIsEditingModalOpen] = useState(false)
  const [selectedCollection, setSelectedCollection] = useState({})
  const [page, setPage] = useState(1)
  const [offset, setOffset] = useState(0)
  const [totalResults, setTotalResults] = useState(initialTotalResults || 0)
  const [displayedResults, setDisplayedResults] = useState(RESULTS_PER_PAGE)
  const [removedCollections, setRemovedCollections] = useState([])
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const closeCreateModal = () => {
    setIsCreateCollectionModal(false)
  }
  const openCreateModal = () => {
    setIsCreateCollectionModal(true)
  }
  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false)
  }
  const openDeleteModal = () => {
    setIsDeleteModalOpen(true)
  }
  const closeEditModal = () => {
    setIsEditingModalOpen(false)
  }
  const openEditModal = () => {
    setIsEditingModalOpen(true)
  }
  query.append('offset', offset)
  query.append('number', RESULTS_PER_PAGE)

  const loadMoreSpierRef = useRef()
  const handleEditMode = (collection) => {
    openEditModal()
    setSelectedCollection(collection)
  }
  ////  delete the collection from state and database
  const handleDeleteMode = (collectionToDelete) => {
    setSelectedCollection(collectionToDelete)
    openDeleteModal()
  }
  const handleDelete = () => {
    const deleteCollection = async (id, token) => {
      try {
        await DELETE(`/collections/${id}`, token)
      } catch (error) {
        console.log(error)
      }
    }
    openDeleteModal()
    deleteCollection(selectedCollection.id, token)
    setRemovedCollections([...removedCollections, selectedCollection.id])
  }
  /// rename the collection
  const handleRenameCollection = (CollectionNewName) => {
    closeEditModal()
    const renameCollection = async (id, data, token) => {
      try {
        await PUT(`/collections/${id}`, data, token)
      } catch (error) {
        console.log(error)
      }
    }
    renameCollection(
      selectedCollection.id,
      { newName: CollectionNewName },
      token
    )
    const actualizedCollections = collections.map((collection) => {
      if (collection.id === selectedCollection.id) {
        collection.name = CollectionNewName
      }
      return collection
    })
    setCollections(actualizedCollections)
  }
  /// post a new collection and add it to the state
  const handleNewCollection = (newCollectionName) => {
    const postCollection = async (data, token) => {
      try {
        const [json] = await POST('/collections/user', data, token)

        setCollections([json.data, ...collections])
        setIsLoading(false)
      } catch (error) {
        console.log(error)
        setIsLoading(false)
      }
    }
    setIsLoading(true)
    postCollection({ name: newCollectionName }, token)
  }
  /// show and hide modals

  const isIntersected = useOnScreen(loadMoreSpierRef)
  //// request more collections
  useEffect(() => {
    const fetchCollection = async (query, collections) => {
      try {
        const [json] = await GET(`/collections/user?${query}`, token)
        setCollections([...collections, json.data])
        setTotalResults(json.totalResults)
      } catch (error) {
        console.log(error)
      }
    }
    if (isIntersected && displayedResults < totalResults) {
      setOffset(page * RESULTS_PER_PAGE)
      setPage(page + 1)
      setDisplayedResults(displayedResults + RESULTS_PER_PAGE)
      fetchCollection(query, collections)
    }
  }, [isIntersected])
  return (
    <>
      <Head>
        <title>My collections</title>

        <meta
          name="description"
          content="Divide and Store your favorites recipes inside your different collections."
        />
        <meta
          name="keywords"
          content="healthy recipes,weight loss,special diets,meal plans,healthy eating,collection,folders,management,store,at hand,for latter"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FullPageInputModal
        testId="newCollectionModal"
        isOpen={isCreateCollectionModal}
        onClose={closeCreateModal}
        callback={(newCollection) => handleNewCollection(newCollection)}
        title="Add a new collection"
        inputOptions={{
          name: 'newCollection',
          type: 'text',
          placeholder: 'Enter name...'
        }}
      />
      <section className="page mb-10 ">
        <h1 className="page-title">Collections</h1>
        <div className="flex justify-end -mt-5 mb-10 ">
          <AddButton
            testId="createAnewCollectionBtn"
            onClick={openCreateModal}
          />
        </div>

        {collections.length > 0 ? (
          <section className="mt-2 grid  gap-2 sm:grid-cols-2 md:grid-cols-3   lg:grid-cols-4 justify-center  place-content-center place-items-center  px-4 lg:px-2">
            {collections.map((collection) =>
              //// doesn't display remove collections from database
              removedCollections.includes(collection?.id) ? null : (
                <div className="relative" key={collection?.id}>
                  <CollectionsCard
                    collection={collection}
                    handleEditMode={handleEditMode}
                    handleDelete={handleDeleteMode}
                  />

                  <LocatedInputModal
                    isModalOpen={
                      isEditingModalOpen &&
                      collection?.id === selectedCollection?.id
                    }
                    id={collection.id}
                    callback={handleRenameCollection}
                    title="Rename collection"
                    closeModal={closeEditModal}
                    inputOptions={{
                      name: 'newName',
                      defaultValue: selectedCollection.name,
                      type: 'text',
                      placeholder: 'New name...'
                    }}
                  />
                </div>
              )
            )}

            <span ref={loadMoreSpierRef} />
          </section>
        ) : (
          <h2 className="text-center text-xl mx-2 sm:-mt-5 text-gray-600 ">
            Your collections inbox in empty.
          </h2>
        )}
        {isLoading && <LoadingHeart />}
        {isDeleteModalOpen && (
          <Dialog
            onAccept={handleDelete}
            closeModal={closeDeleteModal}
            isModalOpen={isDeleteModalOpen}
            title="Confirmation"
            message={
              'All the recipes store in the collection will be lost. Are you sure you want to proceed?'
            }
          />
        )}
      </section>
    </>
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
  const [json] = await GET(
    `/collections/user?&number=${RESULTS_PER_PAGE}`,
    session.accessToken
  )

  return {
    props: {
      initialCollections: json?.data || [],
      initialTotalResults: json?.totalResults || []
    }
  }
}
