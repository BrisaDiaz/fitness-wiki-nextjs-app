import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { POST } from './../utils/http'

export default function useSessionHandler({ title, signIn }) {
  const [isFormLoading, setIsFormLoading] = useState(false)
  const [serverMessage, setServerMessage] = useState('')
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

      setTimeout(() => {
        setServerMessage('')
      }, 5000)
      return
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
        setServerMessage(response.error || 'Server side error')
      setTimeout(() => {
        setServerMessage('')
      }, 5000)
      return
    } else {
      try {
        const [json] = await POST(`/auth/signup`, data)
        if (json.error) return setServerMessage(json.error)
        setIsFormLoading(false)
        router.push('/auth/signin')
      } catch (error) {
        setIsFormLoading(false)
        console.log(error)
        setServerMessage('Server side error')
        setTimeout(() => {
          setServerMessage('')
        }, 5000)
        return
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
