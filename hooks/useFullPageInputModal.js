import React from 'react'
import { useForm } from 'react-hook-form'
export default function useSimpleInputModal({ callback, inputName }) {
  const [showModal, setShowModal] = React.useState(false)
  const handleOpen = () => {
    setShowModal(true)
  }
  const handleClose = () => {
    setShowModal(false)
  }

  const { register, handleSubmit } = useForm({
    mode: 'onBlur'
  })
  const onSubmit = (data, e) => {
    e.preventDefault()
    e.stopPropagation()
    callback(data[inputName])
    handleClose()
  }

  return {
    register,
    handleSubmit,
    onSubmit,
    showModal,
    handleOpen,
    handleClose
  }
}
