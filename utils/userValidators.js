const nameValidator = (value, fieldName) => {
  if (!fieldName) return `The name of the field wasn't provided.`

  if (!value) return `${fieldName} is requred.`

  if (value.trim().length < 3)
    return `${fieldName} must be at least 3 characters.`

  const isValidString = /^[A-Za-zñÑáÁéÉíÍóÓúÚÜü]+$/.test(value)

  if (!isValidString) return
  ;`${fieldName} Name must only contain alphabetic characters.`

  return true
}
const emailValidator = (value) => {
  if (!value) return `Email is requred.`

  const isValidEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      value
    )

  if (!isValidEmail) return `${value} is an invalid email.`
  return true
}

const passwordValidator = (value) => {
  if (!value) return `Password is requred.`

  if (value.length < 5) return `Password must be at least 5 characters.`
  return true
}
const validators = { nameValidator, emailValidator, passwordValidator }

export default validators
