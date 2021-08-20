import { useForm } from 'react-hook-form'
export default function useSimpleInputModal({ callback, inputName }) {
  const { register, handleSubmit } = useForm({
    mode: 'onBlur'
  })
  const onSubmit = (data, e) => {
    e.preventDefault()
    e.stopPropagation()
    callback(data[inputName])
  }

  return { register, handleSubmit, onSubmit }
}
