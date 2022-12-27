import React from 'react'

export const getData = async () => {
  let res = await fetch(
    `https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&sector=Technology&exchange=NASDAQ&dividendMoreThan=0&limit=20&apikey=${process.env.NEXT_PUBLIC_FINANCIAL_MODELING_PREP_API_KEY}`
  )
  let data = await res.json()
  console.log(data)
  return data
}

const StockScreener = async () => {
  let data = await getData()

  return <div>{data[0].symbol}</div>
}

export default StockScreener
