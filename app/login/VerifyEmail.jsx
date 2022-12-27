import React from 'react'
import { getUserByEmail } from '../../lib/prisma/users'
import LoginUi from './LoginUi'

async function VerifyEmail() {
  return (
    <>
      <LoginUi />
    </>
  )
}

export default VerifyEmail
