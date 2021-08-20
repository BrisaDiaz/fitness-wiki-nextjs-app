import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { POST } from './../utils/http'

export default function useSessionHandler({ title, signIn }) {
  const [isFormLoading, setIsFormLoading] = useState(false)
  const [serverMessage, setServerMessage] = useState(null)
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onBlur'
  })
  useEffect(() => {
    if (router.query.error) {
      setServerMessage(router.query.error)
    }
  }, [router])

  const onSubmit = async (data, e) => {
    e.stopPropagation()
    e.preventDefault()
    setServerMessage(null)

    setIsFormLoading(true)

    if (title === 'Sign In') {
      router.replace('/auth/signin')
      const response = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false
      })
      setIsFormLoading(false)
      if (response.error)
        return setServerMessage(response.error || 'Server side error')
    } else {
      try {
        console.log(data)

        await POST(`/auth/signup`, data)

        setIsFormLoading(false)
        router.push('/auth/signin')
      } catch (error) {
        setIsFormLoading(false)
        console.log(error)
        return setServerMessage('Server side error')
      }
    }
  }
  return {
    onSubmit,
    register,
    handleSubmit,
    setServerMessage,
    errors,
    isFormLoading,
    serverMessage
  }
}
