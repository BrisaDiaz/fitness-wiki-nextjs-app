import FormInput from './FormInput'
import FormButton from '../FormButton'
import validation from '../../utils/formInputValidations'

export default function SignupForm({
  handleSubmit,
  onSubmit,
  errors,
  register
}) {
  return (
    <form
      className="flex flex-col gap-2 mb-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex gap-2">
        <FormInput
          type="text"
          placeholder="First Name*"
          errors={errors.name}
          register={{ ...register('name', validation.name) }}
        />
        <FormInput
          type="text"
          placeholder="Last Name*"
          errors={errors.lastname}
          register={{ ...register('lastname', validation.lastname) }}
        />
      </div>
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
      <FormButton text="Sign up" />
    </form>
  )
}
