'use client'

import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import styles from '../styles'
import { SessionProvider, useSession } from 'next-auth/react'
import UserLoggedInHeader from './UserLoggedInHeader'

const Header = () => {
  const [activeItem, setActiveItem] = useState('Dashboard')

  const handleClick = navItem => {
    setActiveItem(navItem)
  }

  return (
    <SessionProvider>
      <div className={styles.navbar}>
        <img src='../logo.png' alt='logo' className={styles.logo} />
        <div className={styles.navbarList}>
          <span className={activeItem === 'Dashboard' ? `${styles.navItem} text-secondary` : styles.navItem} onClick={() => handleClick('Dashboard')}>
            Dashboard
          </span>
          <span className={activeItem === 'News' ? `${styles.navItem} text-secondary` : styles.navItem} onClick={() => handleClick('News')}>
            News
          </span>
          <span className={activeItem === 'Charting' ? `${styles.navItem} text-secondary` : styles.navItem} onClick={() => handleClick('Charting')}>
            Charting
          </span>
          <Link href={'/stock-screener'}>
            <span
              className={activeItem === 'Stock Screener' ? `${styles.navItem} text-secondary` : styles.navItem}
              onClick={() => handleClick('Stock Screener')}
            >
              Stock Screener
            </span>
          </Link>

          <UserLoggedInHeader activeItem={activeItem} handleClick={handleClick} />
        </div>
      </div>
    </SessionProvider>
  )
}

export default Header
