const email = {
  required: 'Email is required.',
  pattern: {
    value:
      /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/,
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
  pattern: {
    value: /^[A-Za-zñÑáÁéÉíÍóÓúÚÜü]+$/,
    message: 'Name must only contain alphabetic characters without spaces.'
  }
}
const lastname = {
  required: 'Last name is required.',
  pattern: {
    value: /^[A-Za-zñÑáÁéÉíÍóÓúÚÜü]+$/,
    message: 'Last Name must only contain alphabetic characters without spaces.'
  }
}

export default { email, password, name, lastname }
