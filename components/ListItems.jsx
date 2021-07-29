import FormButton from './FormButton'
import AddInput from './AddInput'
import useListItems from '../hooks/useListItems'

export default function ListItems({ items, setItems }) {
  const { register, handleSubmit, onSubmit, deleteItem } = useListItems({
    items,
    setItems
  })
  return (
    <article className="mt-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xs mx-auto w-72 "
      >
        <div className="flex items-end gap-2 justify-center ">
          <AddInput
            placeholder="Exclude ingredient..."
            type="text"
            name="newItem"
            register={{
              ...register('newItem', { required: false })
            }}
            lightStrock
          />

          <div className="w-2/12 ">
            <FormButton text="Add" small />
          </div>
        </div>
      </form>
      <section>
        {items.length > 0 && (
          <ul className="mx-auto max-w-xl flex gap-1 flex-wrap p-1 my-5 ">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-center border border-gray-200 p-1.5 pl-0.5 rounded shadow-sm hover:shadow-md"
              >
                <button
                  onClick={() => deleteItem(item)}
                  name="delete"
                  className="
                   bg-red-500 boder border-red-600 font-bold text-white leading-tigh px-2 py-1 transform scale-75  rounded-full text-xs cursor poiter "
                >
                  X
                </button>
                <p className="capitalize text-sm text-gray-600 font-semibold">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </article>
  )
}
