import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '../../../lib/prisma'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // CredentialsProvider({
    //   name: 'Credentials',
    //   credentials: {
    //     username: {
    //       label: 'Username',
    //       type: 'text',
    //       placeholder: 'username',
    //     },
    //     password: { label: 'Password', type: 'password' },
    //   },
    //   async authorize(credentials, req) {
    //     const { email, password } = credentials
    //     const user = await fetch(process.env.NEXT_PUBLIC_API_URL + 'api/users/verify', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(email, password),
    //     })
    //     if (user) {
    //       return user
    //     } else {
    //       return null
    //     }
    //   },
    // }),
  ],
  //   adapter: PrismaAdapter(prisma),
  // Must set to jwt token strategy when using credentials provider, if an adapter is used the default
  // is the 'database' strategy which doesn't work with the credentials provider
  session: {
    strategy: 'jwt',
  },
  theme: {
    colorScheme: 'light',
    brandColor: '#252422',
    logo: '/logo.png',
  },
})
