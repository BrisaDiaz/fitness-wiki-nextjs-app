import { useForm } from 'react-hook-form'
export default function ListItems({ items, setItems }) {
  const { register, handleSubmit, reset } = useForm({
    mode: 'onBlur'
  })
  const onSubmit = (data, e) => {
    e.preventDefault()

    const newItem = data.newItem.trim().toLowerCase()
    if (newItem.length === 0) return null
    setItems([...items, newItem])

    reset(data.newItem)
  }
  const deleteItem = (selectedItem) => {
    const listWithOutItem = items.filter((item) => item !== selectedItem)
    setItems(listWithOutItem)
  }
  return { register, handleSubmit, onSubmit, deleteItem }
}
