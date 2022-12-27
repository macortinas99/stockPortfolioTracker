// 'use client'
import styles from '../styles'
import '../styles/globals.css'

async function getData() {
  let userStocks = ['AAPL', 'MSFT', 'TSLA', 'BA']
  const res = await fetch(`https://api.tiingo.com/iex/?tickers=${userStocks}&token=${process.env.NEXT_PUBLIC_TINGO_API_KEY}`, { cache: 'no-store' })
  const data = await res.json()
  return data
}

async function StockCardLong() {
  // const data = await getData()
  // console.log(data)
  let data = [
    {
      ticker: 'AAPL',
      timestamp: '2022-12-15T21:00:00+00:00',
      lastSaleTimestamp: '2022-12-15T21:00:00+00:00',
      quoteTimestamp: '2022-12-15T21:00:00+00:00',
      open: 141.11,
      high: 141.8,
      low: 136.025,
      mid: null,
      tngoLast: 136.5,
      last: 136.5,
      lastSize: null,
      bidSize: null,
      bidPrice: null,
      askPrice: null,
      askSize: null,
      volume: 98931907,
      prevClose: 143.21,
    },
    {
      ticker: 'TSLA',
      timestamp: '2022-12-15T21:00:00+00:00',
      lastSaleTimestamp: '2022-12-15T21:00:00+00:00',
      quoteTimestamp: '2022-12-15T21:00:00+00:00',
      open: 153.44,
      high: 160.9299,
      low: 153.28,
      mid: null,
      tngoLast: 157.67,
      last: 157.67,
      lastSize: null,
      bidSize: null,
      bidPrice: null,
      askPrice: null,
      askSize: null,
      volume: 122334459,
      prevClose: 156.8,
    },
    {
      ticker: 'BA',
      timestamp: '2022-12-15T21:00:00+00:00',
      lastSaleTimestamp: '2022-12-15T21:00:00+00:00',
      quoteTimestamp: '2022-12-15T21:00:00+00:00',
      open: 186.25,
      high: 187.975,
      low: 181.2801,
      mid: null,
      tngoLast: 183.72,
      last: 183.72,
      lastSize: null,
      bidSize: null,
      bidPrice: null,
      askPrice: null,
      askSize: null,
      volume: 5347787,
      prevClose: 188.25,
    },
    {
      ticker: 'MSFT',
      timestamp: '2022-12-15T21:00:00+00:00',
      lastSaleTimestamp: '2022-12-15T21:00:00+00:00',
      quoteTimestamp: '2022-12-15T21:00:00+00:00',
      open: 253.72,
      high: 254.2,
      low: 247.34,
      mid: null,
      tngoLast: 249.01,
      last: 249.01,
      lastSize: null,
      bidSize: null,
      bidPrice: null,
      askPrice: null,
      askSize: null,
      volume: 35568093,
      prevClose: 257.22,
    },
  ]
  let userStocks = ['AAPL']
  // const { ticker, avgPrice, change, changePercent, volume, avgVol, prevClose, Open } = tickerInfo
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

      {data.map(ticker => (
        <div className={`${styles.portfolioTickerInfo} portfolioInfoColumns`} key={ticker.ticker}>
          <p>{ticker.ticker}</p>
          <p>${ticker.last}</p>
          <p>{Math.abs(ticker.prevClose - ticker.open).toFixed(2)}</p>
          <p>{((Math.abs(ticker.prevClose - ticker.open) / ticker.prevClose) * 100).toFixed(2)}</p>
          <p>{(ticker.volume / 1000000).toLocaleString(undefined, { style: 'decimal', minimumFractionDigits: 1, maximumFractionDigits: 1 })}M</p>
          <p>${ticker.prevClose}</p>
          <p>${ticker.open}</p>
        </div>
      ))}
    </div>
  )
}

export default StockCardLong
