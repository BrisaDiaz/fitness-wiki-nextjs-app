import { useState, useRef } from 'react'
import useOnClickOutside from '@/hooks/useOnClickOutside'
import { POST, DELETE, PUT } from '@/utils/http'

export default function useStoreRecipeModal({
  token,
  setCollections,
  currentCollection,
  setCurrentCollection,
  collections,
  recipes,
  setRecipes,
  userRecipes,
  setUserRecipes
}) {
  const [isStoringModalOpen, setIsStoringModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [selectedRecipe, setSelectedRecipe] = useState({})

  const [removedRecipes, setRemovedRecipes] = useState([])

  /// toggle modal
  const storeModalRef = useRef()
  const createModalRef = useRef()
  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false)
  }
  const openDeleteModal = () => {
    setIsDeleteModalOpen(true)
  }

  const closeStoreModal = () => {
    setIsStoringModalOpen(false)
  }
  const openStoreModal = () => {
    setIsStoringModalOpen(true)
  }
  const closeCreateModal = () => {
    setIsCreateModalOpen(false)
  }
  const openCreateModal = () => {
    setIsCreateModalOpen(true)
  }
  useOnClickOutside(storeModalRef, () => closeStoreModal())
  useOnClickOutside(createModalRef, () => closeCreateModal())
  /// stage recipe selected
  const handleRecipeStage = (recipe, action) => {
    setSelectedRecipe(recipe)
    if (action === 'update' || action === 'store') {
      openStoreModal()
    }
    if (action === 'delete') {
      openDeleteModal()
    }
  }
  /// store recipe inside a collection
  const handleStoreInCollection = async (collectionSelected) => {
    const storeRecipeOnCollection = async (id, data, token) => {
      try {
        await POST(`/collection/${id}`, data, token)
      } catch (error) {
        console.log(error)
      }
    }
    /// actualize ui
    closeStoreModal()
    const actualizeRecipes = recipes.reduce((array, recipe) => {
      if (recipe.id === selectedRecipe.id) {
        recipe.stored = true
        recipe.collection = {
          name: collectionSelected.name,
          id: collectionSelected.id
        }
      }
      array.push(recipe)
      return array
    }, [])
    if (userRecipes) {
      const actualizeUserRecipes = {
        ...userRecipes,
        [selectedRecipe.id]: {
          collections: {
            name: collectionSelected.name,
            id: collectionSelected.id
          }
        }
      }
      setUserRecipes(actualizeUserRecipes)
    }
    setRecipes([...actualizeRecipes])
    closeCreateModal()
    //// set the id as external id reference

    const data = {
      ...selectedRecipe,
      recipeId: selectedRecipe.id
    }
    ////store recipe

    await storeRecipeOnCollection(collectionSelected.id, data, token)
  }

  ///creates a collection and store the selected recipe
  const handleCreateAndStore = (collectionName) => {
    closeStoreModal()

    const postCollection = async (data, token) => {
      try {
        const [json] = await POST('/collection', data, token)
        /// set the recipe image as default collection image
        json.data.image = selectedRecipe.image

        setCollections([...collections, json.data])
        handleStoreInCollection(json.data)
      } catch (error) {
        console.log(error)
      }
    }

    postCollection({ name: collectionName }, token)
  }

  /// remove recipe from the collection
  const handleRecipeDelete = async () => {
    const deteleRecipe = async (id, collectionId, token) => {
      try {
        await DELETE(`/recipe/${id}?fromCollection=${collectionId}`, token)
      } catch (error) {
        console.log(error)
      }
    }
    setRemovedRecipes([...removedRecipes, selectedRecipe.id])
    currentCollection.length = currentCollection.length - 1
    setCurrentCollection(currentCollection)
    await deteleRecipe(selectedRecipe.id, currentCollection.id, token)
  }

  /// move a recipe to other collection
  const handleCollectionChange = (collectionSelected) => {
    const updateRecipeCollection = async (id, data, token) => {
      try {
        await PUT(`/recipe/${id}`, data, token)
      } catch (error) {
        console.log(error)
      }
    }
    const data = {
      sourceCollectionId: currentCollection.id,
      targetCollectionId: collectionSelected.id
    }
    closeStoreModal()
    setRemovedRecipes([...removedRecipes, selectedRecipe.id])
    currentCollection.length = currentCollection.length - 1
    setCurrentCollection(currentCollection)
    updateRecipeCollection(selectedRecipe.id, data, token)
  }
  //creates a collection and  move a recipe into it
  const handleCreateAndChange = (collectionName) => {
    closeStoreModal()

    const postCollection = async (data, token) => {
      try {
        const [json] = await POST('/collection', data, token)
        /// set the recipe image as default collection image
        json.data.image = selectedRecipe.image

        setCollections([...collections, json.data])
        handleCollectionChange(json.data)
      } catch (error) {
        console.log(error)
      }
    }

    postCollection({ name: collectionName }, token)
  }
  return {
    isStoringModalOpen,
    storeModalRef,
    createModalRef,
    isCreateModalOpen,
    selectedRecipe,
    removedRecipes,
    isDeleteModalOpen,
    closeDeleteModal,
    handleStoreInCollection,
    openCreateModal,
    handleRecipeStage,
    handleCreateAndStore,
    handleRecipeDelete,
    handleCreateAndChange,
    handleCollectionChange
  }
}
