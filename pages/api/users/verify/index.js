import { getUserByEmail } from '../../../../lib/prisma/users'

const handler = async (req, res) => {
  let email = req.body.email
  let password = req.body.password

  if (req.method === 'POST') {
    try {
      const data = await getUserByEmail(email)
      let user = data.user
      let testToken = 'test'
      if (email === user.email && password === user.password) {
        console.log('We have a match!!')
        res.setHeader(
          'Set-Cookie',
          cookie.serialize('authToken', testToken, {
            maxAge: 3600, // 1 hour life
            sameSite: 'strict',
            path: '/',
          })
        )
        return res.status(200).json('User Authorized')
      }

      // if (user) return res.status(200).json(user)
    } catch (error) {
      return res.status(500).json({ error: 'There is no user with that email or password' })
    }
  }
}

export default handler
