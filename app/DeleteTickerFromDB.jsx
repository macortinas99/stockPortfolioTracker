'use client'
import styles from '../styles'
import '../styles/globals.css'

const DeleteTickerFromDB = () => {
  const handleTickerDelete = async () => {
    let request = { userEmail, ticker }
    // Put request to API to update MongoDB and delete old ticker
    const userRes = await fetch(process.env.NEXT_PUBLIC_API_URL + 'api/users/stocks', {
      cache: 'no-store',
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    })
  }

  return (
    <div onClick={() => handleTickerDelete()} className='bg-danger rounded-full flex justify-center items-center w-6 h-6 text-sm text-primary'>
      X
    </div>
  )
}

export default DeleteTickerFromDB
