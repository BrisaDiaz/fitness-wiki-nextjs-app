import {
  nameValidator,
  emailValidator,
  passwordValidator
} from '@/utils/userValidators'

export default function getErrors(data) {
  const { name, lastname, email, password } = data

  const results = [
    nameValidator('Name', name),
    nameValidator('Last name', lastname),
    emailValidator(email),
    passwordValidator(password)
  ]
  let errors = []

  results.forEach((result) => result !== true && errors.push(result))

  return errors
}
