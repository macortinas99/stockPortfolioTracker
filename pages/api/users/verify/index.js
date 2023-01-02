import { getUserByEmail } from '../../../../lib/prisma/users'

const handler = async (req, res) => {
  let email = req.body.email
  let password = req.body.password

  if (req.method === 'POST') {
    try {
      const data = await getUserByEmail(email)
      let user = data.user
      if (email === user.email && password === user.password) {
        return res.status(200).json(user)
      }
    } catch (error) {
      return res.status(500).json({ error: 'There is no user with that email or password' })
    }
  }
}

export default handler
