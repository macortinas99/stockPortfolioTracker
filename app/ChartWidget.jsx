'use client'
import { Fragment, useEffect, useState } from 'react'
import { html } from 'next/head'

const ChartWidget = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const widget = new TradingView.widget({
      //   height: 800,
      //   width: 1000,
      autosize: true,
      symbol: 'SPY',
      interval: 'D',
      timezone: 'Etc/UTC',
      theme: theme,
      style: '1',
      locale: 'en',
      toolbar_bg: '#f1f3f6',
      enable_publishing: true,
      withdateranges: true,
      hide_side_toolbar: false,
      allow_symbol_change: true,
      details: true,
      calendar: true,
      studies: ['MASimple@tv-basicstudies', 'Volume@tv-basicstudies', 'VWAP@tv-basicstudies'],

      container_id: 'tradingview_2be89',
    })

    // Render the widget
    widget.render()
  }, [theme])

  return (
    <Fragment>
      <div id='tradingview_2be89' className='w-[100%] h-[800px]'></div>
      {theme === 'light' ? (
        <button
          onClick={() => setTheme('dark')}
          className='w-[100px] h-[50px] bg-secondary hover:bg-[#2cb8b5] rounded-md font-Sans-Narrow hover:scale-105'
        >
          Dark Mode
        </button>
      ) : (
        <button
          onClick={() => setTheme('light')}
          className='w-[100px] h-[50px] bg-secondary hover:bg-[#2cb8b5] rounded-md font-Sans-Narrow hover:scale-105'
        >
          Light Mode
        </button>
      )}

      <html>
        <script src='https://s3.tradingview.com/tv.js'></script>
      </html>
    </Fragment>
  )
}

export default ChartWidget
