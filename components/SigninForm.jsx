import FormInput from './FormInput'
import FormButton from './FormButton'
import validation from '../utils/formInputValidations'

export default function SigninForm({
  handleSubmit,
  onSubmit,
  errors,
  register
}) {
  return (
    <form className="flex flex-col gap-y-2" onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        type="email"
        placeholder="Email Address*"
        name="email"
        errors={errors.email}
        register={{ ...register('email', validation.email) }}
      />
      <FormInput
        type="password"
        placeholder="Password*"
        errors={errors.password}
        register={{ ...register('password', validation.password) }}
      />
      <FormButton text="Sign in" />
    </form>
  )
}
