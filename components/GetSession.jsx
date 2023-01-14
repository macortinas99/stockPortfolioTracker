// 'use client'
import React, { useState } from 'react'
import { useSession } from 'next-auth/react'

const GetSession = () => {
  const [userEmail, setUserEmail] = useState()
  const { data: session, status } = useSession()
  //   console.log('session', session)
  //   console.log('status', status)
  if (session) {
    setUserEmail(session.user.email)
  }

  return session
}

export default GetSession

async function getData() {
  const userRes = await fetch(process.env.NEXT_PUBLIC_API_URL + 'api/users/stocks', {
    cache: 'no-store',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userEmail),
  })
  const userStocks = await userRes.json()
  console.log(userStocks)
  // console.log('STOCKS:', userStocks)
  // let userStocks = ['AAPL', 'MSFT', 'TSLA', 'BA']
  const res = await fetch(`https://api.tiingo.com/iex/?tickers=${userStocks}&token=${process.env.NEXT_PUBLIC_TINGO_API_KEY}`, { cache: 'no-store' })
  const data = await res.json()
  return data
}
