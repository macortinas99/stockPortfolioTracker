// Creates new user when registration form is submitted

import { createUser, getUserByEmail } from '../../../../lib/prisma/users'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const userRes = req.body
      const user = await createUser(userRes)
      console.log(user)
      return user
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }
}

export default handler
