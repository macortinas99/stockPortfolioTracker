'use client'

import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import styles from '../styles'

const Header = () => {
  const [activeItem, setActiveItem] = useState('Dashboard')

  const handleClick = navItem => {
    setActiveItem(navItem)
  }

  return (
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
        <span
          className={activeItem === 'Account Settings' ? `${styles.navItem} text-secondary` : styles.navItem}
          onClick={() => handleClick('Account Settings')}
        >
          Account Settings
        </span>
      </div>
    </div>
  )
}

export default Header
