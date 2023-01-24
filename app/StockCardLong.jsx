import styles from '../styles'
import '../styles/globals.css'
import { unstable_getServerSession } from 'next-auth'

async function getUserInfo(userEmail) {
  // Post request to API to query MongoDB with email address
  const userRes = await fetch(process.env.NEXT_PUBLIC_API_URL + 'api/users/stocks', {
    cache: 'no-store',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userEmail),
  })
  let userStocks = await userRes.json()

  return userStocks
}

async function getTickerData(userTickers) {
  // API call to get stock data for each ticker user owns
  const res = await fetch(`https://api.tiingo.com/iex/?tickers=${userTickers}&token=${process.env.NEXT_PUBLIC_TINGO_API_KEY}`, { cache: 'no-store' })
  const data = await res.json()

  return data
}

async function StockCardLong() {
  // Get  user email from nextAuth.js session
  let userSession = await unstable_getServerSession()
  if (userSession) {
    let userEmail = userSession.user.email
    const userStocks = await getUserInfo(userEmail)
    let userTickers = userStocks.userStocks.map(stock => stock.ticker)
    userTickers = await getTickerData(userTickers)

    return (
      <div className={styles.portfolioContainer}>
        <div className={`${styles.portfolioHeaderColumns} portfolioInfoColumns`}>
          <p>Symbol</p>
          <p>P/L</p>
          <p>P/L %</p>
          <p>Price (USD)</p>
          <p>Change</p>
          <p>Change %</p>
          <p>Volume (M)</p>
          <p>Prev Close</p>
          <p>Open</p>
        </div>
        {userSession ? (
          userTickers.map((ticker, index) => {
            let initialValue = userStocks.userStocks[index].numShares * userStocks.userStocks[index].avgPrice
            let currentValue = userStocks.userStocks[index].numShares * ticker.last
            console.log(initialValue)
            console.log(currentValue)
            let profitLoss = Math.abs(initialValue - currentValue).toFixed(2)
            let profitLossPercent = ((Math.abs(initialValue - currentValue) / initialValue) * 100).toFixed(2)

            return (
              <div className={`${styles.portfolioTickerInfo} portfolioInfoColumns`} key={ticker.ticker}>
                <p>{ticker.ticker}</p>
                <p>${profitLoss.toLocaleString()}</p>
                <p>{profitLossPercent}%</p>
                <p>${ticker.last}</p>
                <p>{Math.abs(ticker.prevClose - ticker.open).toFixed(2)}</p>
                <p>{((Math.abs(ticker.prevClose - ticker.open) / ticker.prevClose) * 100).toFixed(2)}</p>
                <p>
                  {(ticker.volume / 1000000).toLocaleString(undefined, { style: 'decimal', minimumFractionDigits: 1, maximumFractionDigits: 1 })}M
                </p>
                <p>${ticker.prevClose}</p>
                <p>${ticker.open}</p>
              </div>
            )
          })
        ) : (
          <div>Log in to see your stocks.</div>
        )}
      </div>
    )
  }
  if (!userSession) {
    return (
      <div className={styles.portfolioContainer}>
        <div className={`${styles.portfolioHeaderColumns} portfolioInfoColumns`}>
          <p>Symbol</p>
          <p>Price (USD)</p>
          <p>Change</p>
          <p>Change %</p>
          <p>Volume (M)</p>
          <p>Prev Close</p>
          <p>Open</p>
        </div>
        <div>Log in to see your stocks.</div>
      </div>
    )
  }
}

export default StockCardLong
