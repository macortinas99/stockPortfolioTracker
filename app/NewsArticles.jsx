import styles from '../styles/index'
import '../styles'
import Link from 'next/link'
import { getServerSession } from 'next-auth'

// always render component dynamically??
export const revalidate = 0

async function getNews(userEmail) {
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
  userStocks = userStocks.userStocks.map(stock => stock.ticker)

  let newsArticles = []
  for (let i = 0; i < userStocks.length; i++) {
    let res = await fetch(
      `https://api.darqube.com/data-api/fundamentals/media/news?token=${process.env.NEXT_PUBLIC_DARQUBE_API_KEY}&symbol=${userStocks[i]}&skip=0&limit=5&sort=desc`,
      { cache: 'no-store' }
    )
    let data = await res.json()

    newsArticles.push(data)
  }
  newsArticles = newsArticles.flat()
  const sortedNewsArticles = newsArticles.sort((a, b) => b.published_at - a.published_at)
  return sortedNewsArticles
}

async function NewsArticles() {
  // let userStocks = ['FSR', 'BA']
  let userSession = await getServerSession()

  if (userSession) {
    let userEmail = userSession.user.email
    const news = await getNews(userEmail)

    return (
      <div className={styles.articleListContainer}>
        <h1 className='flex justify-center font-Sans-Narrow'>NewsArticles</h1>
        <div className={styles.articles}>
          {news.map((article, index) => {
            let date = new Date(article.published_at * 1000) // multiply by 1000 to convert from seconds to milliseconds
            date = date.toDateString() // prints "Fri Dec 17 2021"
            return (
              <Link href={article.url} target='_blank' key={article.url}>
                <div className={styles.articleList}>
                  <h1 className={styles.articleTitle}>{article.title.slice(0, 100)}</h1>
                  <p className={styles.articleSource}>Source:{article.source}</p>
                  <p className={styles.articleDate}>{date}</p>
                  {/* <p className={styles.articleContent}>{article.content.slice(0, 100)}</p> */}
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    )
  }
  if (!userSession) {
    return (
      <div className={styles.articleListContainer}>
        <h1 className='flex justify-center font-Sans-Narrow'>NewsArticles</h1>
        <div className={styles.articles}>Login to see news articles related to your stocks.</div>
      </div>
    )
  }
}

export default NewsArticles
