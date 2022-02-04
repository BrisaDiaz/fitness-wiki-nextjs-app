import Image from 'next/image'
import React, { useState } from 'react'
import getDaysSinceUpdate from '@/utils/getDaysSinceUpdate'
import { EditButton, DeleteButton } from '@/components/RoundedButtons'
import Link from 'next/link'

export default function CollectionsCard({
  handleEditMode,
  handleDelete,
  collection
}) {
  const [isHovered, setIsHovered] = useState(false)

  const daysSinceUpdate = getDaysSinceUpdate(collection?.updatedAt)
  return (
    <Link href={`/collections/${collection?.id}`} passHref>
      <a
        href="!#"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchMove={() => setIsHovered(true)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        tabIndex={0}
        className="group outline-green-700 outline-offset-8"
      >
        <article
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsHovered(true)}
          onBlur={() => setIsHovered(false)}
          className="w-60 h-60 mx-auto cursor-pointer "
          data-testid="collectionCard"
        >
          <div className="rounded-2xl bg-gray-300 w-full h-40 overflow-hidden object-center flex items-center border border-gray-200">
            {collection.image && (
              <Image
                unoptimized={process.env.NODE_ENV !== 'PRODUCTION'}
                className="rounded-xl  mx-auto  border border-gray-200 shadow group-hover:brightness-50"
                width={300}
                height={230}
                alt={collection.name}
                src={collection?.image}
              />
            )}
          </div>
          <div className="flex flex-col px-1 py-1.5  w-36 overflow-x-hidden overflow-ellipsis  ">
            <h3 className="font-semibold text-lg capitalize text-gray-800 whitespace-nowrap  overflow-x-hidden w-full overflow-ellipsis   ">
              {collection.name}
            </h3>
            <div className="flex justify-self-start gap-2 -mt-1">
              <p className="text-sm   ">{collection.length} recipes</p>
              <p className="text-sm   text-gray-600">{daysSinceUpdate} d</p>
            </div>
          </div>
          <div
            className={'flex gap-1 -mt-12 float-right transition-all  duration-200 transform '.concat(
              isHovered ? 'opacity-1  scale-100 ' : 'opacity-0 scale-0 '
            )}
          >
            <EditButton
              testId="editBtn"
              onClick={() => handleEditMode(collection)}
            />
            <DeleteButton
              testId="deleteBtn"
              onClick={() => handleDelete(collection)}
            />
          </div>
        </article>
      </a>
    </Link>
  )
}
