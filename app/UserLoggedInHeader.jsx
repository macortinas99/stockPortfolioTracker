'use client'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import styles from '../styles'

const UserLoggedInHeader = ({ activeItem, handleClick }) => {
  const { data: session, status } = useSession()
  // console.log('session', session)
  // console.log('status', status)

  if (status === 'unauthenticated')
    return (
      <>
        <Link href={'/api/auth/signin'}>
          <span
            className={activeItem === 'Account Settings' ? `${styles.navItem} text-secondary` : styles.navItem}
            onClick={() => handleClick('Account Settings')}
          >
            Sign In
          </span>
        </Link>
      </>
    )

  if (status === 'authenticated') {
    return (
      <>
        <span
          className={activeItem === 'Account Settings' ? `${styles.navItem} text-secondary` : styles.navItem}
          onClick={() => handleClick('Account Settings')}
        >
          Account Settings
        </span>
        <span onClick={() => signOut()}>Sign Out</span>
      </>
    )
  }
}

export default UserLoggedInHeader
