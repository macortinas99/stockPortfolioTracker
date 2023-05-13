'use client'
import { useState } from 'react'
import styles from '../styles'
import '../styles/globals.css'

const AddNewTickerToDB = ({ userEmail }) => {
  const [addNewStockPopup, setAddNewStockPopup] = useState(false)
  const [formData, setFormData] = useState({
    ticker: '',
    avgPrice: '',
    numShares: '',
  })
  // console.log(formData)

  const handleNewTickerUpdate = async ticker => {
    let request = { userEmail, ticker }
    // Put request to API to update MongoDB with newly added ticker
    const userRes = await fetch(process.env.NEXT_PUBLIC_API_URL + 'api/users/stocks', {
      cache: 'no-store',
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    })

    return userRes.json()
  }

  return (
    <div className={styles.portfolioAddNewTicker}>
      {!addNewStockPopup ? (
        <button className={styles.portfolioAddNewTickerButton} onClick={() => setAddNewStockPopup(true)}>
          + Add new stocks to your portfolio
        </button>
      ) : null}
      {addNewStockPopup ? (
        <div className='bg-secondary z-50 w-[100%] h-[50px] flex items-center pl-4'>
          <h2>Add new ticker:</h2>
          <form>
            <div className='flex gap-4 ml-4 items-center'>
              <div>
                <input
                  type='text'
                  name='Stock'
                  id='Stock'
                  placeholder='Add New Ticker'
                  required
                  className='border-2 rounded-md'
                  onChange={e => setFormData({ ...formData, ticker: e.target.value })}
                />
              </div>
              <div>
                $
                <input
                  type='number'
                  step='0.01'
                  name='avgPrice'
                  id='avgPrice'
                  placeholder='Average Price per Share'
                  required
                  className='ml-2'
                  onChange={e => setFormData({ ...formData, avgPrice: e.target.value })}
                />
              </div>
              <div>
                <input
                  type='text'
                  name='numShares'
                  id='numShares'
                  placeholder='# of Shares Owned'
                  required
                  onChange={e => setFormData({ ...formData, numShares: e.target.value })}
                />
              </div>
              <button className='border-2 rounded-md bg-background2 p-[5px]' onClick={() => handleNewTickerUpdate(formData)}>
                Submit
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </div>
  )
}

export default AddNewTickerToDB
