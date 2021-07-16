export default async function signup(req, res) {
  const user = {
    name: 'userName',
    lastName: 'userLastName',
    email: 'example@mail.com'
  }
  return res.status(201).json({ user })
}
