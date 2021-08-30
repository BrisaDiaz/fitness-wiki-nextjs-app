import { useForm } from 'react-hook-form'
export default function ListItems({ items, setItems }) {
  const { register, handleSubmit, reset } = useForm({
    mode: 'onBlur'
  })
  const onSubmit = (data, e) => {
    e.preventDefault()

    const item = data['newItem'].trim().toLowerCase()
    if (item.length === 0 || items.includes(item)) return null
    setItems([...items, item])

    reset()
  }
  const deleteItem = (selectedItem) => {
    const listWithOutItem = items.filter((item) => item !== selectedItem)
    setItems(listWithOutItem)
  }
  return { register, handleSubmit, onSubmit, deleteItem }
}
