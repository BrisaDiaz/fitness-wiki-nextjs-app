import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import getDaysSinceUpdate from '@/utils/getDaysSinceUpdate'
import { EditButton, DeleteButton } from '@/components/RoundedButtons'
export default function CollectionsCard({
  handleEditMode,
  handleDelete,
  collection
}) {
  const router = useRouter()
  const handleRedirect = (id) => {
    router.push(`/collections/${id}`)
  }
  const [isHovered, setIsHovered] = useState(false)
  const daysSinceUpdate = getDaysSinceUpdate(collection?.updatedAt)
  return (
    <article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-60 h-60 mx-auto cursor-pointer"
      data-testid="collectionCard"
    >
      <div
        className="rounded-2xl bg-gray-300 w-full h-40 overflow-hidden object-center flex items-center "
        onClick={() => handleRedirect(collection.id)}
      >
        {collection.image && (
          <Image
            unoptimized={process.env.ENVIRONMENT !== 'PRODUCTION'}
            className="rounded-xl  mx-auto "
            width={300}
            height={230}
            alt={collection.name}
            src={collection?.image}
          />
        )}
      </div>
      <div className="flex flex-col px-1 py-1.5  w-28 overflow-x-hidden  overflow-ellipsis  ">
        <h3 className="font-semibold text-lg capitalize text-gray-800 whitespace-nowrap ">
          {collection.name}
        </h3>
        <div className="flex justify-self-start gap-2 -mt-1">
          <p className="text-sm   ">{collection.length} recipes</p>
          <p className="text-sm   text-gray-600">{daysSinceUpdate} d</p>
        </div>
      </div>
      {isHovered && (
        <div className="flex gap-1 -mt-12 float-right">
          <EditButton
            testId="editBtn"
            onClick={() => handleEditMode(collection)}
          />
          <DeleteButton
            testId="deleteBtn"
            onClick={() => handleDelete(collection)}
          />
        </div>
      )}
    </article>
  )
}
