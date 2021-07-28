import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

export default function useSessionHandler({
  publicRuntimeConfig,
  title,
  signIn
}) {
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
    router.replace('/auth/signin')
    setIsFormLoading(true)

    if (title === 'Sign In') {
      const response = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false
      })
      setIsFormLoading(false)
      if (response.error)
        return setServerMessage(response.error || 'Server side error')
    } else {
      const response = await fetch(
        `${publicRuntimeConfig.HOST}/api/auth/signup`,
        {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
            Acept: 'application/json'
          }
        }
      )
      const json = await response.json()

      setIsFormLoading(false)
      if (!response.ok)
        return setServerMessage(json.message || 'Server side error')
      router.push('/auth/signin')
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
