import { createUser, getUsers, getUserByEmail } from '../../../lib/prisma/users'

const handler = async (req, res) => {
  if (req.method === 'GET') {
  }

  if (req.method === 'POST') {
    try {
      const email = req.body
      console.log(data)
      const { user, error } = await getUserByEmail(data)
      if (error) throw new Error(error)
      return res.status(200).json({ user })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  res.setHeader('Allow', ['GET', 'POST'])
  res.status(425).end(`Method ${req.method} is not allowed.`)
}

export default handler
