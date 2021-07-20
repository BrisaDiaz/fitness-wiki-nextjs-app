const email = {
  required: 'Email is required.',
  pattern: {
    value:
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    message: 'Invalid email.'
  }
}
const password = {
  required: 'Password is required.',
  minLength: {
    value: 5,
    message: 'Password must be at least 5 characters.'
  }
}
const name = {
  required: 'Name is required.',
  minLength: {
    value: 3,
    message: 'Name must be at least 3 characters.'
  },
  pattern: {
    value: /^[A-Za-zñÑáÁéÉíÍóÓúÚÜü]+$/,
    message: 'Name must only contain alphabetic characters without spaces.'
  }
}
const lastname = {
  required: 'Last name is required.',
  minLength: {
    value: 3,
    message: 'Last name must be at least 3 characters.'
  },
  pattern: {
    value: /^[A-Za-zñÑáÁéÉíÍóÓúÚÜü]+$/,
    message: 'Last Name must only contain alphabetic characters without spaces.'
  }
}
const validations = { email, password, name, lastname }

export default validations
