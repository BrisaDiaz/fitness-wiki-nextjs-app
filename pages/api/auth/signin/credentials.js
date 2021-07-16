export default async function signin(req, res) {
  const user = {
    name: 'userName',
    lastName: 'userLastName',
    email: 'example@mail.com'
  }
  return res.status(200).json({ user })
}
