import { createUser, getUserByEmail } from '../../../../lib/prisma/users'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const userRes = req.body
      console.log(userRes)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }
}

export default handler
