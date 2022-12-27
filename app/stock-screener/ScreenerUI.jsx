'use client'
import { useState, useEffect } from 'react'
import styles from '../../styles/index'
import finviz from 'finviz-screener'

async function getData(marketCap) {
  //   console.log(filters)
  let baseUrl = 'https://financialmodelingprep.com/api/v3/stock-screener?'
  let filterQueries = ''
  let tokenUrl = `&apikey=${process.env.NEXT_PUBLIC_FINANCIAL_MODELING_PREP_API_KEY}`
  let limitQuery = '&limit=20'

  const [moreThan, lowerThan] = marketCap.split('-').map(Number)
  if (moreThan && lowerThan) {
    filterQueries = filterQueries + `$marketCapMoreThan=${moreThan}&marketCapLowerThan=${lowerThan}`
    console.log(filterQueries)
  }
  if (moreThan && !lowerThan) {
    filterQueries = filterQueries + `$marketCapMoreThan=${moreThan}`
    console.log(filterQueries)
  }
  if (lowerThan && !moreThan) {
    filterQueries = filterQueries + `$marketCapLowerThan=${lowerThan}`
    console.log(filterQueries)
  }

  let finalURL = baseUrl + filterQueries + limitQuery + tokenUrl
  console.log(finalURL)
  let res = await fetch(finalURL, { cache: 'no-store' })
  let data = await res.json()

  return data
}

const ScreenerUI = () => {
  const [userFilters, setUserFilters] = useState({})
  const [marketCap, setMarketCap] = useState('')
  const [filterResults, setFilterResults] = useState()

  const handleClick = e => {
    setMarketCap(e.target.value)
    console.log(marketCap)
  }
  const handleApiCall = async filters => {
    let data = await getData(marketCap)
    console.log(data)
    setFilterResults(data)
    // console.log(userFilters)
  }
  //   let data = [
  //     {
  //       symbol: 'AAPL',
  //       companyName: 'Apple Inc.',
  //       marketCap: 2139798503424,
  //       sector: 'Technology',
  //       industry: 'Consumer Electronics',
  //       beta: 1.2195,
  //       price: 134.51,
  //       lastAnnualDividend: 0.91,
  //       volume: 87932929,
  //       exchange: 'NASDAQ Global Select',
  //       exchangeShortName: 'NASDAQ',
  //       country: 'US',
  //       isEtf: false,
  //       isActivelyTrading: true,
  //     },
  //   ]
  useEffect(() => {
    console.log('Market Cap:', marketCap)
  }, [marketCap])
  return (
    <div className={styles.screenerContainer}>
      <h1 className={styles.screenerTitle}>Stock Screener Filters</h1>
      <div className={styles.screenerDropDownContainer}>
        <div className={styles.screenerFilter}>
          <span className={styles.screenerFilterName}>Market Cap (M)</span>
          <select className={styles.screenerDropDown} onChange={e => setMarketCap(e.target.value)}>
            <option className={styles.screenerDropwDownList} value=''>
              Any
            </option>
            <option className={styles.screenerDropwDownList} value='200000000000'>
              Mega ($200B+)
            </option>
            <option className={styles.screenerDropwDownList} value='10000000000-200000000000'>
              Large ($10B-$200B)
            </option>
            <option className={styles.screenerDropwDownList} value='2000000000-10000000000'>
              Mid($2B-$10B)
            </option>
            <option className={styles.screenerDropwDownList} value='300000000-2000000000'>
              Small ($300M-$2B)
            </option>
            <option className={styles.screenerDropwDownList} value='50000000-300000000'>
              Micro ($50M-$300M)
            </option>
          </select>
        </div>
        <div className={styles.screenerFilter}>
          <span className={styles.screenerFilterName}>Price</span>
          <select className={styles.screenerDropDown}>
            <option className={styles.screenerDropwDownList} value=''>
              Any
            </option>
            <option className={styles.screenerDropwDownList} value='1'>
              Under $1
            </option>
            <option className={styles.screenerDropwDownList} value='2'>
              Under $2
            </option>
            <option className={styles.screenerDropwDownList} value='5'>
              Under $5
            </option>
            <option className={styles.screenerDropwDownList} value='10'>
              Under $10
            </option>
            <option className={styles.screenerDropwDownList} value='15'>
              Under $15
            </option>
            <option className={styles.screenerDropwDownList} value='20'>
              Under $20
            </option>
            <option className={styles.screenerDropwDownList} value='30'>
              Under $30
            </option>
            <option className={styles.screenerDropwDownList} value='40'>
              Under $40
            </option>
            <option className={styles.screenerDropwDownList} value='50'>
              Under $50
            </option>
            <option className={styles.screenerDropwDownList}>Over $1</option>
            <option className={styles.screenerDropwDownList}>Over $2</option>
            <option className={styles.screenerDropwDownList}>Over $5</option>
            <option className={styles.screenerDropwDownList}>Over $10</option>
            <option className={styles.screenerDropwDownList}>Over $15</option>
            <option className={styles.screenerDropwDownList}>Over $20</option>
            <option className={styles.screenerDropwDownList}>Over $30</option>
            <option className={styles.screenerDropwDownList}>Over $40</option>
            <option className={styles.screenerDropwDownList}>Over $50</option>
            <option className={styles.screenerDropwDownList}>Over $100</option>
          </select>
        </div>
        <div className={styles.screenerFilter}>
          <span className={styles.screenerFilterName}>Volume (M)</span>
          <select className={styles.screenerDropDown}>
            <option className={styles.screenerDropwDownList}>$1M+</option>
            <option className={styles.screenerDropwDownList}>$5M+</option>
            <option className={styles.screenerDropwDownList}>$10M+</option>
            <option className={styles.screenerDropwDownList}>$50M+</option>
          </select>
        </div>
        <div className={styles.screenerFilter}>
          <span className={styles.screenerFilterName}>Dividend</span>
          <select className={styles.screenerDropDown}>
            <option className={styles.screenerDropwDownList}>$1M+</option>
            <option className={styles.screenerDropwDownList}>$5M+</option>
            <option className={styles.screenerDropwDownList}>$10M+</option>
            <option className={styles.screenerDropwDownList}>$50M+</option>
          </select>
        </div>
        <div className={styles.screenerFilter}>
          <span className={styles.screenerFilterName}>ETF</span>
          <select className={styles.screenerDropDown}>
            <option className={styles.screenerDropwDownList}>$1M+</option>
            <option className={styles.screenerDropwDownList}>$5M+</option>
            <option className={styles.screenerDropwDownList}>$10M+</option>
            <option className={styles.screenerDropwDownList}>$50M+</option>
          </select>
        </div>
        <div className={styles.screenerFilter}>
          <span className={styles.screenerFilterName}>Sector</span>
          <select className={styles.screenerDropDown}>
            <option className={styles.screenerDropwDownList}>$1M+</option>
            <option className={styles.screenerDropwDownList}>$5M+</option>
            <option className={styles.screenerDropwDownList}>$10M+</option>
            <option className={styles.screenerDropwDownList}>$50M+</option>
          </select>
        </div>
        <div className={styles.screenerFilter}>
          <span className={styles.screenerFilterName}>Industry</span>
          <select className={styles.screenerDropDown}>
            <option className={styles.screenerDropwDownList}>$1M+</option>
            <option className={styles.screenerDropwDownList}>$5M+</option>
            <option className={styles.screenerDropwDownList}>$10M+</option>
            <option className={styles.screenerDropwDownList}>$50M+</option>
          </select>
        </div>
        <div className={styles.screenerFilter}>
          <span className={styles.screenerFilterName}>Country</span>
          <select className={styles.screenerDropDown}>
            <option className={styles.screenerDropwDownList}>$1M+</option>
            <option className={styles.screenerDropwDownList}>$5M+</option>
            <option className={styles.screenerDropwDownList}>$10M+</option>
            <option className={styles.screenerDropwDownList}>$50M+</option>
          </select>
        </div>
        <div className={styles.screenerFilter}>
          <span className={styles.screenerFilterName}>Exchange</span>
          <select className={styles.screenerDropDown}>
            <option className={styles.screenerDropwDownList}>$1M+</option>
            <option className={styles.screenerDropwDownList}>$5M+</option>
            <option className={styles.screenerDropwDownList}>$10M+</option>
            <option className={styles.screenerDropwDownList}>$50M+</option>
          </select>
        </div>
      </div>
      <div className='w-[100%] flex justify-center'>
        <button onClick={() => handleApiCall(marketCap)} className='bg-secondary border-2 rounded-md p-[1px] m-2 w-[75px]'>
          Search
        </button>
      </div>
      <h1>RESULTS</h1>

      {filterResults ? (
        <table className={styles.filterResultsContainer}>
          <tbody>
            <tr className={styles.filterResultsHeader} align='center' valign='middle'>
              <td className='border-2 border-[#aeaeb0]'>Ticker</td>
              <td className='border-2 border-[#aeaeb0]'>Company</td>
              <td className='border-2 border-[#aeaeb0]'>Sector</td>
              <td className='border-2 border-[#aeaeb0]'>Industry</td>
              <td className='border-2 border-[#aeaeb0]'>Country</td>
              <td className='border-2 border-[#aeaeb0]'>Price</td>
              <td className='border-2 border-[#aeaeb0]'>Volume</td>
            </tr>

            {filterResults.map((ticker, index) => {
              //   console.log(ticker)
              return (
                <tr key={index} className={styles.filterResultsInfoContainer}>
                  <td height='10' align='left' className='border-2 border-[#aeaeb0]'>
                    {ticker.symbol}
                  </td>
                  <td height='10' align='left' className='border-2 border-[#aeaeb0]'>
                    {ticker.companyName}
                  </td>
                  <td height='10' align='left' className='border-2 border-[#aeaeb0]'>
                    {ticker.sector}
                  </td>
                  <td height='10' align='left' className='border-2 border-[#aeaeb0]'>
                    {ticker.industry}
                  </td>
                  <td height='10' align='left' className='border-2 border-[#aeaeb0]'>
                    {ticker.country}
                  </td>
                  <td height='10' align='left' className='border-2 border-[#aeaeb0]'>
                    {ticker.price}
                  </td>
                  <td height='10' align='left' className='border-2 border-[#aeaeb0]'>
                    {ticker.volume}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      ) : null}
    </div>
  )
}

export default ScreenerUI
