import { createUser, getUsers, getUserByEmail } from '../../../../lib/prisma/users'

const handler = async (req, res) => {
  // if (req.method === 'GET') {
  // }

  // Query to DB to get stocks owned by signed in user
  if (req.method === 'POST') {
    try {
      const email = req.body
      const { user, error } = await getUserByEmail(email)
      let userStocks = user.stocks
      // console.log('user:', user.stocks)
      if (error) throw new Error(error)
      return res.status(200).json({ userStocks })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  res.setHeader('Allow', ['GET', 'POST'])
  res.status(425).end(`Method ${req.method} is not allowed.`)
}

export default handler
