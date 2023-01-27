import Head from 'next/head'
import Image from 'next/image'
import Header from './Header'
import NewsArticles from './NewsArticles'
import StockCardLong from './StockCardLong'
import ChartWidget from './ChartWidget'

export default function Home() {
  return (
    <div>
      <Header />
      <div className='flex w-[90%] mx-auto gap-x-4'>
        <NewsArticles />
        <div className='relative w-[80%] flex flex-col gap-y-4'>
          <StockCardLong />
          <ChartWidget />
        </div>
      </div>
    </div>
  )
}
