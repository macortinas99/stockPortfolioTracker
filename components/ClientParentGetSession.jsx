'use client'
import React from 'react'

import { SessionProvider } from 'next-auth/react'
import GetSession from './GetSession'

const ClientParentGetSession = () => {
  return (
    <SessionProvider>
      <GetSession />
    </SessionProvider>
  )
}

export default ClientParentGetSession
