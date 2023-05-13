// API call to get list of user owned stocks

import { createUser, getUsers, getUserByEmail, updateUser } from '../../../../lib/prisma/users'

const handler = async (req, res) => {
  // if (req.method === 'GET') {
  // }

  // Query to DB to get stocks owned by signed in user
  if (req.method === 'POST') {
    try {
      const email = req.body
      const { user, error } = await getUserByEmail(email)
      let userStocks = user.stocks
      if (error) throw new Error(error)
      return res.status(200).json({ userStocks })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }
  if (req.method === 'PUT') {
    try {
      let userEmail = req.body['userEmail']
      let newTicker = req.body['ticker']
      const { user } = await getUserByEmail(userEmail)
      let userStocks = user.stocks
      let newUserStocksList = [...userStocks, newTicker]
      let updatedUserObject = [{ ...user, stocks: newUserStocksList }]
      const updateTheUser = await updateUser(updatedUserObject)
      return res.status(200).json({ updatedUserObject })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }
  if (req.method === 'DELETE') {
    try {
      let userEmail = req.body['userEmail']
      let newTicker = req.body['ticker']
      const { user } = await getUserByEmail(userEmail)
      let userStocks = user.stocks
      let newUserStocksList = [...userStocks, newTicker]
      let updatedUserObject = [{ ...user, stocks: newUserStocksList }]
      const updateTheUser = await updateUser(updatedUserObject)
      return res.status(200).json({ updatedUserObject })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  res.setHeader('Allow', ['GET', 'POST', 'PUT'])
  res.status(425).end(`Method ${req.method} is not allowed.`)
}

export default handler
