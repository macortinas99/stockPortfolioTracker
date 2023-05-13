import { getServerSession } from 'next-auth'
import { stringify } from 'postcss'
import { createUser, getUsers, getUserByEmail } from '../../../lib/prisma/users'

const handler = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const userSession = await unstable_getServerSession(req, res)
      if (!userSession) {
        return res.status(200).json('the session doesnt exists')
      }
      if (userSession) {
        console.log('userSession:', userSession)
        const userEmail = userSession.user.email
        const user = await getUserByEmail(userEmail)
        const userStocks = user.user.stocks
        // console.log(userStocks)
        return res.status(200).json(userStocks)
      }
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  if (req.method === 'POST') {
    try {
      const data = req.body
      console.log(data)
      const { user, error } = await createUser(data)
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
