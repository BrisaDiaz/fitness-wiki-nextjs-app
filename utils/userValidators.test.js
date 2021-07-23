import * as validators from './userValidators'
describe('name validator', () => {
  it('returns error message when no field name is pass', () => {
    expect(validators.nameValidator()).toBe(
      "The name of the field wasn't provided."
    )
  })
  it('returns error message when no name is pass', () => {
    expect(validators.nameValidator('First name')).toBe(
      'First name is requred.'
    )
  })

  it('returns error when name is shorter than 3 characters', () => {
    expect(validators.nameValidator('First name', 'sa')).toBe(
      'First name must be at least 3 characters.'
    )
  })
  it('returns error when name is longer than 15 characters', () => {
    expect(
      validators.nameValidator('First name', 'veryyyyyyyyyloooooongenaaaaaaame')
    ).toBe('First name must be 15 characters maximum.')
  })
  it('returns error when name contain any not alphabetic characters.', () => {
    expect(validators.nameValidator('First name', 'usern@me45')).toBe(
      'First name must only contain alphabetic characters.'
    )
  })
  it('returns true if is a valid name', () => {
    expect(validators.nameValidator('First name', 'uesrname')).toBe(true)
  })
})
describe('email validator', () => {
  it('returns error message when no email is pass', () => {
    expect(validators.emailValidator()).toBe('Email is requred.')
  })
  it('returns error message when email is not valid', () => {
    expect(validators.emailValidator('abc.def@mail')).toBe(
      'abc.def@mail is an invalid email.'
    )
    expect(validators.emailValidator('abc.def@mail..com')).toBe(
      'abc.def@mail..com is an invalid email.'
    )
    expect(validators.emailValidator('abc.def@mail#archive.com')).toBe(
      'abc.def@mail#archive.com is an invalid email.'
    )
    expect(validators.emailValidator('abc.def@mail.c')).toBe(
      'abc.def@mail.c is an invalid email.'
    )
  })
  it('returns true if is a valid email', () => {
    expect(validators.emailValidator('abcdef@mail.com')).toBe(true)
  })
})
describe('password validator', () => {
  it('returns error message when no password is pass', () => {
    expect(validators.passwordValidator()).toBe('Password is requred.')
  })
  it('returns error when password is shorter than 5 characters', () => {
    expect(validators.passwordValidator('shor')).toBe(
      'Password must be at least 5 characters.'
    )
  })
  it('returns true if is a valid password', () => {
    expect(validators.passwordValidator('secertePaswword123')).toBe(true)
  })
})
