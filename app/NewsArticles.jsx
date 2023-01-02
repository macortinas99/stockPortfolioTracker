// 'use client'
import styles from '../styles/index'
import '../styles'
import Link from 'next/link'

// always render component dynamically
export const revalidate = 0

async function getNews(userStocks) {
  let NewsArticles = []
  for (let i = 0; i < userStocks.length; i++) {
    let res = await fetch(
      `https://api.darqube.com/data-api/fundamentals/media/news?token=${process.env.NEXT_PUBLIC_DARQUBE_API_KEY}&symbol=${userStocks[i]}&skip=0&limit=1&sort=desc`,
      { cache: 'no-store' }
    )
    let data = await res.json()
    // console.log(data)
    NewsArticles.push(data[0])
  }
  const sortedNewsArticles = NewsArticles.sort((a, b) => b.published_at - a.published_at)
  // console.log('news articles combined')
  // console.log(NewsArticles)
  return NewsArticles
}

async function NewsArticles() {
  let userStocks = ['FSR', 'BA']
  const news = await getNews(userStocks)
  // let news = [
  //   {
  //     date: '2022-12-13T23:16:57+00:00',
  //     title: 'Why Investors Cranked Spotify Stock Higher Today',
  //     content:
  //       'A report indicated that the companies behind popular mobile apps helped push Spotify (NYSE: SPOT) stock higher on Tuesday. The share price of the music service operator, whose app is enduringly popular on mobile platforms, rose by 1.5% on the day, more than double the percentage rate gain of the S&P 500 index. In an article published this mid-afternoon and updated shortly before market close, Bloomberg wrote that Apple (NASDAQ: AAPL) is gearing up to allow third-party app stores on its devices.\n\nContinue reading',
  //     link: 'https://finance.yahoo.com/m/11f3b4db-63eb-307f-b718-d2189697bf48/why-investors-cranked-spotify.html',
  //     symbols: ['639.F', '639.XETRA', 'AAPL.US', 'SPOT.US'],
  //     tags: ['APPLE', 'SPOTIFY'],
  //     sentiment: { polarity: 0.902, neg: 0, neu: 0.856, pos: 0.144 },
  //   },
  //   {
  //     date: '2022-12-13T22:23:12+00:00',
  //     title: 'Fed Rate Hike Looms After Market Rally Fizzles; Tesla Stock Hits New Lows As Elon Musk Admits This',
  //     content:
  //       'A Fed rate hike looms after Tuesday\'s rally on tame inflation data fizzled. Tesla stock hit new lows as Elon Musk sees "macroeconomic tides."\n\nContinue reading',
  //     link: 'https://finance.yahoo.com/m/c0cc381f-ec6c-30e2-a8b2-847f78d55dfc/fed-rate-hike-looms-after.html',
  //     symbols: ['AAPL.US', 'BTU.US', 'COMP.US', 'DJI.INDX', 'GE.US', 'GSPC.INDX', 'IXIC.INDX', 'MSFT.US', 'RUT.INDX', 'TSLA.US'],
  //     tags: [
  //       'BASIS POINTS',
  //       'CPI INFLATION',
  //       'DOW JONES',
  //       'ELON MUSK',
  //       'FEDERAL RESERVE',
  //       'JEROME POWELL',
  //       'MARKET RALLY',
  //       'NASDAQ FUTURES',
  //       'PEABODY ENERGY',
  //       'STOCK MARKET',
  //       'TESLA STOCK',
  //     ],
  //     sentiment: { polarity: -0.34, neg: 0.129, neu: 0.871, pos: 0 },
  //   },
  //   {
  //     date: '2022-12-13T20:02:45+00:00',
  //     title: '12 Best Multibagger Stocks to Buy Now',
  //     content:
  //       'In this article, we discuss 12 best multibagger stocks to buy now. If you want to see more stocks in this selection, check out 5 Best Multibagger Stocks to Buy Now.\n\nIn this uncertain market backdrop, investors are focused on macroeconomic and geopolitical constraints and their potential effects on investment portfolios. Goldman Sachs believes the U.S. will avoid a recession in 2023, and even if a recession were to occur, it would be comparatively moderate given the strong underlying U.S. fundamentals. Although inflation and rampant interest rates remain the most significant short-term challenges, global factors like the war in Ukraine and China\u2019s regional power and internal conditions are also impacting investor sentiment.\n\nDespite the volatile economic conditions, history indicates that during turbulent market spreads, investors should stay long and remain invested. To cope with the market turbulence, many investors have shifted their portfolios towards defensive and value equities to combat the taxing headwinds which they presently face. As per Goldman Sachs, investors should focus on quality stocks that are US-listed, benefit from a strong dollar, and display fortress balance sheets.\n\nIn the first half of 2023, the S&P 500 is expected to mimic the declines of 2022, but a pivot from the Fed could support an asset recovery in the later half of the year, taking the S&P 500 to 4,200 by the end of 2023. Keeping this in mind, investors often pick up large-cap stocks like Amazon.com, Inc. (NASDAQ:AMZN), Apple Inc. (NASDAQ:AAPL), and NVIDIA Corporation (NASDAQ:NVDA). However, we discuss some of the best multibagger stocks in this article.\n\nOur Methodology\n\nWe selected the following stocks based on share price gains of more than 200% over the last year as of December 13. These stocks are ranked according to their share price gains. We have assessed the hedge fund sentiment from Insider Monkey\u2019s database of 920 elite hedge funds tracked as of the end of the third quarter of 2022.\n\nStory continues 12 Best Multibagger Stocks to Buy Now\n\nImage by Steve Buissinne from Pixabay\n\nBest Multibagger Stocks to Buy Now\n\n12. CTI BioPharma Corp. (NASDAQ:CTIC)\n\n1-Year Share Price Gain as of December 13: 192.00%\n\nNumber of Hedge Fund Holders: 23\n\nCTI BioPharma Corp. (NASDAQ:CTIC) is a Washington-based biopharmaceutical company focused on the acquisition, development, and commercialization of novel targeted therapies for blood-related cancers in the United States. On November 7, CTI BioPharma Corp. (NASDAQ:CTIC) reported a Q3 GAAP loss per share of $0.13 and a revenue of $18.2 million, outperforming Wall Street estimates by $0.03 and $1.03 million, respectively. The stock traded 17.5% higher on November 8 after the company posted better-than-expected Q3 results.\n\nOn October 17, investment advisory SVB Securities initiated coverage of CTI BioPharma Corp. (NASDAQ:CTIC) with an Outperform rating and a $13 price target. Analyst Andrew Berens issued the ratings update.\n\nAccording to the third quarter database of Insider Monkey, 23 hedge funds held stakes worth nearly $194 million in CTI BioPharma Corp. (NASDAQ:CTIC), compared to 17 funds in the earlier quarter worth $158 million. Mark Lampert\u2019s Biotechnology Value Fund / BVF Inc is the leading position holder in the company, with 8.81 million shares worth $51.3 million.\n\nLike Amazon.com, Inc. (NASDAQ:AMZN), Apple Inc. (NASDAQ:AAPL), and NVIDIA Corporation (NASDAQ:NVDA), CTI BioPharma Corp. (NASDAQ:CTIC) is one of the best stocks to invest in for a winning portfolio.\n\n11. Alpha Metallurgical Resources, Inc. (NYSE:AMR)\n\n1-Year Share Price Gain as of December 13: 206.58%\n\nNumber of Hedge Fund Holders: 27\n\nAlpha Metallurgical Resources, Inc. (NYSE:AMR) was incorporated in 2016 and is headquartered in Bristol, Tennessee. It is a mining company that produces, processes, and sells met and thermal coal in Virginia and West Virginia. On November 28, Alpha Metallurgical Resources, Inc. (NYSE:AMR) provided operational guidance for 2023, including a raise in full-year total shipments to 16.7 million-18.4 million tons, with 15 million-16 million metallurgical tons expected to account for the majority of the total.\n\nOn November 8, Cowen analyst Lance Vitanza maintained an Outperform rating on Alpha Metallurgical Resources, Inc. (NYSE:AMR) but lowered the price target on the shares to $215 from $225. The analyst said in addition to strong Q3 results, the company reported a significant increase in its return of capital to shareholders with a $400 million addition to its repurchase program, an $80 million one-time special dividend, and a $0.03 increase to its regular dividend, all of which conveys confidence in the outlook.\n\nAccording to Insider Monkey\u2019s data, 27 hedge funds were long Alpha Metallurgical Resources, Inc. (NYSE:AMR) at the end of the third quarter of 2022, compared to 25 in the prior quarter. Jim Simons\u2019 Renaissance Technologies is the largest stakeholder of the company, with 819,915 shares worth $112 million. It is one of the best multibagger stocks favored by elite hedge funds.\n\n10. Prometheus Biosciences, Inc. (NASDAQ:RXDX)\n\n1-Year Share Price Gain as of December 13: 222.70%\n\nNumber of Hedge Fund Holders: 25\n\nPrometheus Biosciences, Inc. (NASDAQ:RXDX) is a California-based biopharmaceutical company that engages in the discovery, development, and commercialization of novel therapeutics and companion diagnostics products for the treatment of inflammatory bowel diseases. On December 7, Prometheus Biosciences, Inc. (NASDAQ:RXDX) announced that its medicine PRA023 indicated robust efficacy and favorable safety in two mid stage trials in patients with ulcerative colitis and Crohn\'s disease. Prometheus Biosciences, Inc. (NASDAQ:RXDX) plans to advance PRA023 into phase 3 studies for these trials in 2023.\n\nOn December 8, Credit Suisse analyst Tiago Fauth raised the price target on Prometheus Biosciences, Inc. (NASDAQ:RXDX) to $142 from $59 and maintained an Outperform rating on the shares following ulcerative colitis and Crohn\'s disease data. The debate is now shifting to the potential size of the class. The analyst believes present market dynamics in inflammatory bowel disease remain favorable for a likely best-in-class asset such as PRA023.\n\nAccording to Insider Monkey\u2019s Q3 data, Prometheus Biosciences, Inc. (NASDAQ:RXDX) was part of 25 hedge fund portfolios, compared to 20 in the prior quarter. Bihua Chen\u2019s Cormorant Asset Management is the largest stakeholder of the company, with approximately 2 million shares worth $116.8 million.\n\n9. Hallador Energy Company (NASDAQ:HNRG)\n\n1-Year Share Price Gain as of December 13: 227.17%\n\nNumber of Hedge Fund Holders: 8\n\nHallador Energy Company (NASDAQ:HNRG) is one of the best multibagger stocks to monitor. The company is based in Indiana, and it engages in the production of steam coal in the State of Indiana for the electric power generation industry. On November 3, Hallador Energy Company (NASDAQ:HNRG) reported Q3 GAAP EPS of $0.05 and a revenue of $85.08 million, up 6.60% on a year-over-year basis. The company\u2019s fundamentals continue to improve as coal prices remain resilient. With shares up over 227% over the last year as of December 13, Hallador Energy Company (NASDAQ:HNRG) is one of the best performing stocks this year.\n\nAccording to Insider Monkey\'s Q3 data, 8 hedge funds were bullish on Hallador Energy Company (NASDAQ:HNRG), compared to 5 funds in the prior quarter. Aaron Weitman\'s CastleKnight Management is the largest stakeholder of the company, with 1.18 million shares worth $6.64 million.\n\nHere is what Cove Street Capital specifically said about Hallador Energy Company (NASDAQ:HNRG) in its Q2 2022 investor letter:\n\n\u201cHallador Energy Company (NASDAQ:HNRG) is a\u2026 (get ready for it) \u2026 coal company. They have an unusual asset position \u2013 a very low cost basis in the Illinois Basis \u2013 almost all of which is thermal coal used in electricity generation. You might have noticed that the United States is theoretically attempting to transition our power needs in a ten-year plan when the reality is that 50 is probably the realistic number. The drive to this unrealistic goal is producing a severe shortage of \u201cbaseline\u201d power production, which is simply not a good thing. Our bet is that Hallador\u2019s assets are worth a lot more and will generate cash for a lot longer than is being priced in by the market. There is an interesting and financially savvy board guiding the CEO. In a new and interesting twist, the company essentially is being \u201cgiven\u201d a coal fired power plant in their backyard due to political issues. This could represent an enormous piece of upside subject to the vagaries of regulation and weather. Although we have followed the company for many years, this was a new buy in the quarter.\u201d\n\n8. CONSOL Energy Inc. (NYSE:CEIX)\n\n1-Year Share Price Gain as of December 13: 243.93%\n\nNumber of Hedge Fund Holders: 31\n\nCONSOL Energy Inc. (NYSE:CEIX) was founded in 1860 and is headquartered in Canonsburg, Pennsylvania. The company produces and exports bituminous coal in the United States, operating through PAMC, CONSOL Marine Terminal, and Other segments. CONSOL Energy Inc. (NYSE:CEIX) engages in the mining, preparation, and marketing of bituminous coal, serving power generators, industrial, and metallurgical end-users. The company reported a Q3 net income of $152.1 million and a quarterly free cash flow of $107.1 million. 2023 and 2024 contracted positions improved to 21.8 million tons and 8.8 million tons, respectively.\n\nOn November 2, Benchmark analyst Nathan Martin raised the price target on CONSOL Energy Inc. (NYSE:CEIX) to $80 from $72 and maintained a Buy rating on the shares. Though CONSOL Energy Inc. (NYSE:CEIX) posted Q3 adjusted EBITDA that "slightly" fell short of consensus, lower shipments were likely the driver and management believes it is done with those issues, the analyst said. He believes CONSOL Energy Inc. (NYSE:CEIX) should reach its targeted debt level of $300 million in the coming quarters and "at that point we think cash returns will accelerate," the analyst added.\n\nAccording to Insider Monkey\u2019s data, 31 hedge funds were long CONSOL Energy Inc. (NYSE:CEIX) at the end of Q3 2022, with collective stakes worth $360.65 million, compared to 23 funds in the prior quarter worth $272.5 million. David Einhorn\u2019s Greenlight Capital is the largest stakeholder of the company, with 1.71 million shares valued at $110 million.\n\nGreenlight Capital made the following comment about CONSOL Energy Inc. (NYSE:CEIX) in its Q3 2022 investor letter:\n\n\u201cCONSOL Energy Inc. (NYSE:CEIX) shares rose from $49.38 to $64.32. As we wrote last quarter, we expect the company to generate approximately $50 per share in after-tax free cash flow by the end of 2023. The company paid its first dividend of $1 per share in August and also announced a policy of distributing at least 35% of its free cash flow to its shareholders. We would emphasize the \u201cat least\u201d part and see room for the percentage to expand as the cash flows materialize. Coal markets have remained quite strong and visibility is improving, such that 2024 looks to us like another strong year.\u201d\n\n7. Sigma Lithium Corporation (NASDAQ:SGML)\n\n1-Year Share Price Gain as of December 13: 245.15%\n\nNumber of Hedge Fund Holders: 8\n\nSigma Lithium Corporation (NASDAQ:SGML) is a Canadian firm that engages in the exploration and development of lithium deposits in Brazil. Sigma Lithium Corporation (NASDAQ:SGML) stock gained 7.9% pre-market on December 5 after revealing plans to nearly triple its planned production of battery grade lithium concentrate to approximately 100,000 metric tons per year of lithium carbonate equivalent by 2024 after positive results from a study at its Grota do Cirilo project in Brazil. The Canadian miner plans to begin commissioning Grota do Cirilo this month, with production starting by April 2023. With shares up over 245% in the last year as of December 13, Sigma Lithium Corporation (NASDAQ:SGML) is one of the best multibagger stocks to invest in.\n\nOn December 5, Canaccord analyst Katie Lachapelle raised the firm\'s price target on Sigma Lithium Corporation (NASDAQ:SGML) to C$64 from C$45 and kept a Speculative Buy rating on the shares.\n\nAccording to Insider Monkey\u2019s Q3 data, Sigma Lithium Corporation (NASDAQ:SGML) was part of 8 hedge fund portfolios, with collective stakes worth $45.5 million, compared to 3 funds in the prior quarter worth $23.7 million. Jack Ripsteen\u2019s Potrero Capital Research is the leading position holder in the company, with 596,930 shares valued at $16.2 million.\n\n6. TORM plc (NASDAQ:TRMD)\n\n1-Year Share Price Gain as of December 13: 289.59%\n\nNumber of Hedge Fund Holders: 15\n\nTORM plc (NASDAQ:TRMD) is a Denmark-based product tanker company that engages in the transportation of gasoline, jet fuel, naphtha, and crude oil worldwide. On November 10, TORM plc (NASDAQ:TRMD) reported Q3 GAAP earnings per share of $2.63 and a revenue of $448.1 million, up 188.2% year-over-year and beating Wall Street estimates by $106.85 million. The company paid a per share quarterly dividend of $1.46 to shareholders on December 8.\n\nOn May 25, Pareto analyst Eirik Haavaldsen initiated coverage of TORM plc (NASDAQ:TRMD) with a Buy rating and a DKK 140 price target. The company could pay out dividends equal to 40% of its market value over the next three years, and tanker spot rates "are going ballistic", the analyst told investors in a research note.\n\nAccording to Insider Monkey\u2019s Q3 data, 15 hedge funds were long TORM plc (NASDAQ:TRMD), compared to 12 funds in the prior quarter. The collective stakes held by elite funds in Q3 2022 increased to $1.16 billion from $760 million in Q2 2022. Howard Marks\u2019 Oaktree Capital Management is the largest position holder in the company, with 53.8 million shares valued at $1.10 billion.\n\nIn addition to Amazon.com, Inc. (NASDAQ:AMZN), Apple Inc. (NASDAQ:AAPL), and NVIDIA Corporation (NASDAQ:NVDA), TORM plc (NASDAQ:TRMD) is one of the stocks on the radar of smart investors as they head into 2023.\n\nClick to continue reading and see 5 Best Multibagger Stocks to Buy Now.\n\nSuggested articles:\n\n10 Best Medical Stocks Under $20 15 Countries That Produce the Most Solar Energy 20 Countries That Produce the Most Electric Power\n\nDisclosure: None.\u00a012 Best Multibagger Stocks to Buy Now is originally published on Insider Monkey.',
  //     link: 'https://finance.yahoo.com/news/12-best-multibagger-stocks-buy-200245140.html',
  //     symbols: ['AAPL.US', 'AMR.US', 'AMZN.US', 'C9X.F', 'CEIX.US', 'CEPS.F', 'CTIC.US', 'HNRG.US', 'NVDA.US', 'RXDX.US', 'SGML.US', 'TRMD.US'],
  //     tags: [
  //       'ALPHA METALLURGICAL RESOURCES',
  //       'CONSOL ENERGY INC',
  //       'GOLDMAN SACHS',
  //       'HALLADOR ENERGY COMPANY',
  //       'HEDGE FUND',
  //       'HEDGE FUNDS',
  //       'INC',
  //       'INSIDER MONKEY',
  //       'PROMETHEUS BIOSCIENCES',
  //       'SHARE PRICE',
  //     ],
  //     sentiment: { polarity: 1, neg: 0.018, neu: 0.79, pos: 0.191 },
  //   },
  //   {
  //     date: '2022-12-13T16:44:39+00:00',
  //     title: 'Why Apple, Amazon, Alphabet, and Other FAANG Stocks Rallied on Tuesday',
  //     content:
  //       'Wall Street kicked the day with a broad-based rally on Tuesday. Technology stocks have been mauled by the bear market over the past year, but investors got a glimmer of hope today that the economy may finally be on the mend. The latest read on inflation gave investors a much-needed boost of confidence, which helped fuel the rally.\n\nContinue reading',
  //     link: 'https://finance.yahoo.com/m/49ac35b7-7839-3ab7-bf13-5cd24435ded1/why-apple%2C-amazon%2C-alphabet%2C.html',
  //     symbols: [
  //       'AAPL.MX',
  //       'AAPL.US',
  //       'AAPL34.SA',
  //       'ABEA.F',
  //       'ABEA.XETRA',
  //       'ABEC.F',
  //       'ABEC.XETRA',
  //       'AMZ.F',
  //       'AMZ.XETRA',
  //       'AMZN.MX',
  //       'AMZN.US',
  //       'AMZO34.SA',
  //       'APC.F',
  //       'APC.XETRA',
  //       'GOGL34.SA',
  //       'GOGL35.SA',
  //       'GOOG.MI',
  //       'GOOG.MX',
  //     ],
  //     tags: ['ALPHABET', 'AMAZON', 'APPLE', 'FAANG STOCKS', 'FEDERAL RESERVE BANK', 'INVESTORS', 'NASDAQ', 'NETFLIX', 'TECHNOLOGY STOCKS'],
  //     sentiment: { polarity: 0.916, neg: 0, neu: 0.82, pos: 0.18 },
  //   },
  //   {
  //     date: '2022-12-13T16:10:30+00:00',
  //     title: 'Stock market today: Dow cuts gains but ends higher as Fed comes into focus',
  //     content:
  //       'By Yasin Ebrahim\n\nInvesting.com -- The Dow cut the bulk of its gains Tuesday as investors weighed up data showing easing inflation pressures for the second-straight month just a day ahead of the Federal Reserve\'s interest rate decision.\n\nThe Dow Jones Industrial Average gained 0.30%, or 103 points, though had been up more than 700 points at the highs of the day. The Nasdaq Composite rose 1%, and the S&P 500 rose 0.7%.\n\nThe Labor Department said Tuesday its consumer price index rose 0.1% last month after edging up 0.3% in October. For the year through November, the CPI increased 7.1%, marking the smallest increase since December 2021.\n\nThe lower inflation print isn\u2019t likely to alter the Fed\u2019s monetary policy decision expected on Wednesday, though it will likely spark debate among members on how much further to increase rates until reaching a peak.\n\n\u201cOverall, a smaller 50 bp hike is expected for the Fed\u2019s meeting tomorrow, to be followed by another 50 bp over the first quarter next year before the Fed feels comfortable to pause the current cycle and reassess,\u201d RBC said.\n\nExpectations that the Fed could pause sooner rather than later pushed Treasury yields sharply lower, sparking a Meta-led surge in big tech.\n\nMeta Platforms Inc (NASDAQ:META) gained more than 4% after Goldman Sachs flagged the social media giant as a "top pick", saying most of the bad news about the firm\u2019s core social media business and concerns about its hefty investments in the metaverse is increasingly priced into the shares.\n\nAlphabet Inc (NASDAQ:GOOGL) rose 2%, while Apple (NASDAQ:AAPL) and Microsoft Corporation (NASDAQ:MSFT) ended in the green, with the latter up more than 1%.\n\nEnergy added to gains from a day earlier as oil prices were driven higher by ongoing supply constraints amid the closure of the Keystone pipeline supplying Canadian heavy crude to the U.S. Gulf Coast of Mexico.\n\nHalliburton Company (NYSE:HAL) rallied more than 7%, while APA Corporation (NASDAQ:APA) and Schlumberger NV (NYSE:SLB) were up about 4% each.\n\nStory continues\n\nIn health care, meanwhile, Moderna (NASDAQ:MRNA) jumped 20% after the drugmaker announced positive results from its experimental skin cancer treatment.\n\nPfizer (NYSE:PFE), meanwhile, closed up nearly 2% as Goldman Sachs upgraded its rating on the stock to buy from neutral on expectations the firm\'s RSV, migraine, and sickle-cell disease drugs will drive growth in 2023.\n\nThe move higher in the broader market comes as some continue to warn of a downturn next year, driven by a deterioration in corporate earnings as margins come under pressure from a weaker consumer amid the impact of higher interest rates.\n\n\u201cAs earnings projections deteriorate and the lagged effects of Fed\u2019s actions begin to set in a more concrete way, I think markets will turn down,\u201d Phillip Toews, CEO&portfolio manager of Toews Asset Management, told Investing.com\u2019s Yasin Ebrahim in an interview on Monday.\n\nRelated Articles\n\nStock market today: Dow cuts gains but ends higher as Fed comes into focus\n\nDanske Bank pleads guilty to resolve long-running Estonia money-laundering probe\n\nAfter-hours movers: ABM, Braze fall following earnings',
  //     link: 'https://finance.yahoo.com/news/stock-market-today-dow-cuts-161030738.html',
  //     symbols: ['AAPL.US', 'APA.US', 'COMP.US', 'DJI.INDX', 'GOOGL.US', 'HAL.US', 'IXIC.INDX', 'META.US', 'MRNA.US', 'MSFT.US', 'PFE.US', 'SLB.US'],
  //     tags: [
  //       'CONSUMER PRICE INDEX',
  //       'DOW',
  //       'FEDERAL RESERVE',
  //       'GOLDMAN SACHS',
  //       'INFLATION PRESSURES',
  //       'INTEREST RATE DECISION',
  //       'LABOR DEPARTMENT',
  //       'NASDAQ COMPOSITE',
  //     ],
  //     sentiment: { polarity: 0.84, neg: 0.049, neu: 0.872, pos: 0.079 },
  //   },
  //   {
  //     date: '2022-12-13T23:16:57+00:00',
  //     title: 'Why Investors Cranked Spotify Stock Higher Today',
  //     content:
  //       'A report indicated that the companies behind popular mobile apps helped push Spotify (NYSE: SPOT) stock higher on Tuesday. The share price of the music service operator, whose app is enduringly popular on mobile platforms, rose by 1.5% on the day, more than double the percentage rate gain of the S&P 500 index. In an article published this mid-afternoon and updated shortly before market close, Bloomberg wrote that Apple (NASDAQ: AAPL) is gearing up to allow third-party app stores on its devices.\n\nContinue reading',
  //     link: 'https://finance.yahoo.com/m/11f3b4db-63eb-307f-b718-d2189697bf48/why-investors-cranked-spotify.html',
  //     symbols: ['639.F', '639.XETRA', 'AAPL.US', 'SPOT.US'],
  //     tags: ['APPLE', 'SPOTIFY'],
  //     sentiment: { polarity: 0.902, neg: 0, neu: 0.856, pos: 0.144 },
  //   },
  //   {
  //     date: '2022-12-13T22:23:12+00:00',
  //     title: 'Fed Rate Hike Looms After Market Rally Fizzles; Tesla Stock Hits New Lows As Elon Musk Admits This',
  //     content:
  //       'A Fed rate hike looms after Tuesday\'s rally on tame inflation data fizzled. Tesla stock hit new lows as Elon Musk sees "macroeconomic tides."\n\nContinue reading',
  //     link: 'https://finance.yahoo.com/m/c0cc381f-ec6c-30e2-a8b2-847f78d55dfc/fed-rate-hike-looms-after.html',
  //     symbols: ['AAPL.US', 'BTU.US', 'COMP.US', 'DJI.INDX', 'GE.US', 'GSPC.INDX', 'IXIC.INDX', 'MSFT.US', 'RUT.INDX', 'TSLA.US'],
  //     tags: [
  //       'BASIS POINTS',
  //       'CPI INFLATION',
  //       'DOW JONES',
  //       'ELON MUSK',
  //       'FEDERAL RESERVE',
  //       'JEROME POWELL',
  //       'MARKET RALLY',
  //       'NASDAQ FUTURES',
  //       'PEABODY ENERGY',
  //       'STOCK MARKET',
  //       'TESLA STOCK',
  //     ],
  //     sentiment: { polarity: -0.34, neg: 0.129, neu: 0.871, pos: 0 },
  //   },
  //   {
  //     date: '2022-12-13T20:02:45+00:00',
  //     title: '12 Best Multibagger Stocks to Buy Now',
  //     content:
  //       'In this article, we discuss 12 best multibagger stocks to buy now. If you want to see more stocks in this selection, check out 5 Best Multibagger Stocks to Buy Now.\n\nIn this uncertain market backdrop, investors are focused on macroeconomic and geopolitical constraints and their potential effects on investment portfolios. Goldman Sachs believes the U.S. will avoid a recession in 2023, and even if a recession were to occur, it would be comparatively moderate given the strong underlying U.S. fundamentals. Although inflation and rampant interest rates remain the most significant short-term challenges, global factors like the war in Ukraine and China\u2019s regional power and internal conditions are also impacting investor sentiment.\n\nDespite the volatile economic conditions, history indicates that during turbulent market spreads, investors should stay long and remain invested. To cope with the market turbulence, many investors have shifted their portfolios towards defensive and value equities to combat the taxing headwinds which they presently face. As per Goldman Sachs, investors should focus on quality stocks that are US-listed, benefit from a strong dollar, and display fortress balance sheets.\n\nIn the first half of 2023, the S&P 500 is expected to mimic the declines of 2022, but a pivot from the Fed could support an asset recovery in the later half of the year, taking the S&P 500 to 4,200 by the end of 2023. Keeping this in mind, investors often pick up large-cap stocks like Amazon.com, Inc. (NASDAQ:AMZN), Apple Inc. (NASDAQ:AAPL), and NVIDIA Corporation (NASDAQ:NVDA). However, we discuss some of the best multibagger stocks in this article.\n\nOur Methodology\n\nWe selected the following stocks based on share price gains of more than 200% over the last year as of December 13. These stocks are ranked according to their share price gains. We have assessed the hedge fund sentiment from Insider Monkey\u2019s database of 920 elite hedge funds tracked as of the end of the third quarter of 2022.\n\nStory continues 12 Best Multibagger Stocks to Buy Now\n\nImage by Steve Buissinne from Pixabay\n\nBest Multibagger Stocks to Buy Now\n\n12. CTI BioPharma Corp. (NASDAQ:CTIC)\n\n1-Year Share Price Gain as of December 13: 192.00%\n\nNumber of Hedge Fund Holders: 23\n\nCTI BioPharma Corp. (NASDAQ:CTIC) is a Washington-based biopharmaceutical company focused on the acquisition, development, and commercialization of novel targeted therapies for blood-related cancers in the United States. On November 7, CTI BioPharma Corp. (NASDAQ:CTIC) reported a Q3 GAAP loss per share of $0.13 and a revenue of $18.2 million, outperforming Wall Street estimates by $0.03 and $1.03 million, respectively. The stock traded 17.5% higher on November 8 after the company posted better-than-expected Q3 results.\n\nOn October 17, investment advisory SVB Securities initiated coverage of CTI BioPharma Corp. (NASDAQ:CTIC) with an Outperform rating and a $13 price target. Analyst Andrew Berens issued the ratings update.\n\nAccording to the third quarter database of Insider Monkey, 23 hedge funds held stakes worth nearly $194 million in CTI BioPharma Corp. (NASDAQ:CTIC), compared to 17 funds in the earlier quarter worth $158 million. Mark Lampert\u2019s Biotechnology Value Fund / BVF Inc is the leading position holder in the company, with 8.81 million shares worth $51.3 million.\n\nLike Amazon.com, Inc. (NASDAQ:AMZN), Apple Inc. (NASDAQ:AAPL), and NVIDIA Corporation (NASDAQ:NVDA), CTI BioPharma Corp. (NASDAQ:CTIC) is one of the best stocks to invest in for a winning portfolio.\n\n11. Alpha Metallurgical Resources, Inc. (NYSE:AMR)\n\n1-Year Share Price Gain as of December 13: 206.58%\n\nNumber of Hedge Fund Holders: 27\n\nAlpha Metallurgical Resources, Inc. (NYSE:AMR) was incorporated in 2016 and is headquartered in Bristol, Tennessee. It is a mining company that produces, processes, and sells met and thermal coal in Virginia and West Virginia. On November 28, Alpha Metallurgical Resources, Inc. (NYSE:AMR) provided operational guidance for 2023, including a raise in full-year total shipments to 16.7 million-18.4 million tons, with 15 million-16 million metallurgical tons expected to account for the majority of the total.\n\nOn November 8, Cowen analyst Lance Vitanza maintained an Outperform rating on Alpha Metallurgical Resources, Inc. (NYSE:AMR) but lowered the price target on the shares to $215 from $225. The analyst said in addition to strong Q3 results, the company reported a significant increase in its return of capital to shareholders with a $400 million addition to its repurchase program, an $80 million one-time special dividend, and a $0.03 increase to its regular dividend, all of which conveys confidence in the outlook.\n\nAccording to Insider Monkey\u2019s data, 27 hedge funds were long Alpha Metallurgical Resources, Inc. (NYSE:AMR) at the end of the third quarter of 2022, compared to 25 in the prior quarter. Jim Simons\u2019 Renaissance Technologies is the largest stakeholder of the company, with 819,915 shares worth $112 million. It is one of the best multibagger stocks favored by elite hedge funds.\n\n10. Prometheus Biosciences, Inc. (NASDAQ:RXDX)\n\n1-Year Share Price Gain as of December 13: 222.70%\n\nNumber of Hedge Fund Holders: 25\n\nPrometheus Biosciences, Inc. (NASDAQ:RXDX) is a California-based biopharmaceutical company that engages in the discovery, development, and commercialization of novel therapeutics and companion diagnostics products for the treatment of inflammatory bowel diseases. On December 7, Prometheus Biosciences, Inc. (NASDAQ:RXDX) announced that its medicine PRA023 indicated robust efficacy and favorable safety in two mid stage trials in patients with ulcerative colitis and Crohn\'s disease. Prometheus Biosciences, Inc. (NASDAQ:RXDX) plans to advance PRA023 into phase 3 studies for these trials in 2023.\n\nOn December 8, Credit Suisse analyst Tiago Fauth raised the price target on Prometheus Biosciences, Inc. (NASDAQ:RXDX) to $142 from $59 and maintained an Outperform rating on the shares following ulcerative colitis and Crohn\'s disease data. The debate is now shifting to the potential size of the class. The analyst believes present market dynamics in inflammatory bowel disease remain favorable for a likely best-in-class asset such as PRA023.\n\nAccording to Insider Monkey\u2019s Q3 data, Prometheus Biosciences, Inc. (NASDAQ:RXDX) was part of 25 hedge fund portfolios, compared to 20 in the prior quarter. Bihua Chen\u2019s Cormorant Asset Management is the largest stakeholder of the company, with approximately 2 million shares worth $116.8 million.\n\n9. Hallador Energy Company (NASDAQ:HNRG)\n\n1-Year Share Price Gain as of December 13: 227.17%\n\nNumber of Hedge Fund Holders: 8\n\nHallador Energy Company (NASDAQ:HNRG) is one of the best multibagger stocks to monitor. The company is based in Indiana, and it engages in the production of steam coal in the State of Indiana for the electric power generation industry. On November 3, Hallador Energy Company (NASDAQ:HNRG) reported Q3 GAAP EPS of $0.05 and a revenue of $85.08 million, up 6.60% on a year-over-year basis. The company\u2019s fundamentals continue to improve as coal prices remain resilient. With shares up over 227% over the last year as of December 13, Hallador Energy Company (NASDAQ:HNRG) is one of the best performing stocks this year.\n\nAccording to Insider Monkey\'s Q3 data, 8 hedge funds were bullish on Hallador Energy Company (NASDAQ:HNRG), compared to 5 funds in the prior quarter. Aaron Weitman\'s CastleKnight Management is the largest stakeholder of the company, with 1.18 million shares worth $6.64 million.\n\nHere is what Cove Street Capital specifically said about Hallador Energy Company (NASDAQ:HNRG) in its Q2 2022 investor letter:\n\n\u201cHallador Energy Company (NASDAQ:HNRG) is a\u2026 (get ready for it) \u2026 coal company. They have an unusual asset position \u2013 a very low cost basis in the Illinois Basis \u2013 almost all of which is thermal coal used in electricity generation. You might have noticed that the United States is theoretically attempting to transition our power needs in a ten-year plan when the reality is that 50 is probably the realistic number. The drive to this unrealistic goal is producing a severe shortage of \u201cbaseline\u201d power production, which is simply not a good thing. Our bet is that Hallador\u2019s assets are worth a lot more and will generate cash for a lot longer than is being priced in by the market. There is an interesting and financially savvy board guiding the CEO. In a new and interesting twist, the company essentially is being \u201cgiven\u201d a coal fired power plant in their backyard due to political issues. This could represent an enormous piece of upside subject to the vagaries of regulation and weather. Although we have followed the company for many years, this was a new buy in the quarter.\u201d\n\n8. CONSOL Energy Inc. (NYSE:CEIX)\n\n1-Year Share Price Gain as of December 13: 243.93%\n\nNumber of Hedge Fund Holders: 31\n\nCONSOL Energy Inc. (NYSE:CEIX) was founded in 1860 and is headquartered in Canonsburg, Pennsylvania. The company produces and exports bituminous coal in the United States, operating through PAMC, CONSOL Marine Terminal, and Other segments. CONSOL Energy Inc. (NYSE:CEIX) engages in the mining, preparation, and marketing of bituminous coal, serving power generators, industrial, and metallurgical end-users. The company reported a Q3 net income of $152.1 million and a quarterly free cash flow of $107.1 million. 2023 and 2024 contracted positions improved to 21.8 million tons and 8.8 million tons, respectively.\n\nOn November 2, Benchmark analyst Nathan Martin raised the price target on CONSOL Energy Inc. (NYSE:CEIX) to $80 from $72 and maintained a Buy rating on the shares. Though CONSOL Energy Inc. (NYSE:CEIX) posted Q3 adjusted EBITDA that "slightly" fell short of consensus, lower shipments were likely the driver and management believes it is done with those issues, the analyst said. He believes CONSOL Energy Inc. (NYSE:CEIX) should reach its targeted debt level of $300 million in the coming quarters and "at that point we think cash returns will accelerate," the analyst added.\n\nAccording to Insider Monkey\u2019s data, 31 hedge funds were long CONSOL Energy Inc. (NYSE:CEIX) at the end of Q3 2022, with collective stakes worth $360.65 million, compared to 23 funds in the prior quarter worth $272.5 million. David Einhorn\u2019s Greenlight Capital is the largest stakeholder of the company, with 1.71 million shares valued at $110 million.\n\nGreenlight Capital made the following comment about CONSOL Energy Inc. (NYSE:CEIX) in its Q3 2022 investor letter:\n\n\u201cCONSOL Energy Inc. (NYSE:CEIX) shares rose from $49.38 to $64.32. As we wrote last quarter, we expect the company to generate approximately $50 per share in after-tax free cash flow by the end of 2023. The company paid its first dividend of $1 per share in August and also announced a policy of distributing at least 35% of its free cash flow to its shareholders. We would emphasize the \u201cat least\u201d part and see room for the percentage to expand as the cash flows materialize. Coal markets have remained quite strong and visibility is improving, such that 2024 looks to us like another strong year.\u201d\n\n7. Sigma Lithium Corporation (NASDAQ:SGML)\n\n1-Year Share Price Gain as of December 13: 245.15%\n\nNumber of Hedge Fund Holders: 8\n\nSigma Lithium Corporation (NASDAQ:SGML) is a Canadian firm that engages in the exploration and development of lithium deposits in Brazil. Sigma Lithium Corporation (NASDAQ:SGML) stock gained 7.9% pre-market on December 5 after revealing plans to nearly triple its planned production of battery grade lithium concentrate to approximately 100,000 metric tons per year of lithium carbonate equivalent by 2024 after positive results from a study at its Grota do Cirilo project in Brazil. The Canadian miner plans to begin commissioning Grota do Cirilo this month, with production starting by April 2023. With shares up over 245% in the last year as of December 13, Sigma Lithium Corporation (NASDAQ:SGML) is one of the best multibagger stocks to invest in.\n\nOn December 5, Canaccord analyst Katie Lachapelle raised the firm\'s price target on Sigma Lithium Corporation (NASDAQ:SGML) to C$64 from C$45 and kept a Speculative Buy rating on the shares.\n\nAccording to Insider Monkey\u2019s Q3 data, Sigma Lithium Corporation (NASDAQ:SGML) was part of 8 hedge fund portfolios, with collective stakes worth $45.5 million, compared to 3 funds in the prior quarter worth $23.7 million. Jack Ripsteen\u2019s Potrero Capital Research is the leading position holder in the company, with 596,930 shares valued at $16.2 million.\n\n6. TORM plc (NASDAQ:TRMD)\n\n1-Year Share Price Gain as of December 13: 289.59%\n\nNumber of Hedge Fund Holders: 15\n\nTORM plc (NASDAQ:TRMD) is a Denmark-based product tanker company that engages in the transportation of gasoline, jet fuel, naphtha, and crude oil worldwide. On November 10, TORM plc (NASDAQ:TRMD) reported Q3 GAAP earnings per share of $2.63 and a revenue of $448.1 million, up 188.2% year-over-year and beating Wall Street estimates by $106.85 million. The company paid a per share quarterly dividend of $1.46 to shareholders on December 8.\n\nOn May 25, Pareto analyst Eirik Haavaldsen initiated coverage of TORM plc (NASDAQ:TRMD) with a Buy rating and a DKK 140 price target. The company could pay out dividends equal to 40% of its market value over the next three years, and tanker spot rates "are going ballistic", the analyst told investors in a research note.\n\nAccording to Insider Monkey\u2019s Q3 data, 15 hedge funds were long TORM plc (NASDAQ:TRMD), compared to 12 funds in the prior quarter. The collective stakes held by elite funds in Q3 2022 increased to $1.16 billion from $760 million in Q2 2022. Howard Marks\u2019 Oaktree Capital Management is the largest position holder in the company, with 53.8 million shares valued at $1.10 billion.\n\nIn addition to Amazon.com, Inc. (NASDAQ:AMZN), Apple Inc. (NASDAQ:AAPL), and NVIDIA Corporation (NASDAQ:NVDA), TORM plc (NASDAQ:TRMD) is one of the stocks on the radar of smart investors as they head into 2023.\n\nClick to continue reading and see 5 Best Multibagger Stocks to Buy Now.\n\nSuggested articles:\n\n10 Best Medical Stocks Under $20 15 Countries That Produce the Most Solar Energy 20 Countries That Produce the Most Electric Power\n\nDisclosure: None.\u00a012 Best Multibagger Stocks to Buy Now is originally published on Insider Monkey.',
  //     link: 'https://finance.yahoo.com/news/12-best-multibagger-stocks-buy-200245140.html',
  //     symbols: ['AAPL.US', 'AMR.US', 'AMZN.US', 'C9X.F', 'CEIX.US', 'CEPS.F', 'CTIC.US', 'HNRG.US', 'NVDA.US', 'RXDX.US', 'SGML.US', 'TRMD.US'],
  //     tags: [
  //       'ALPHA METALLURGICAL RESOURCES',
  //       'CONSOL ENERGY INC',
  //       'GOLDMAN SACHS',
  //       'HALLADOR ENERGY COMPANY',
  //       'HEDGE FUND',
  //       'HEDGE FUNDS',
  //       'INC',
  //       'INSIDER MONKEY',
  //       'PROMETHEUS BIOSCIENCES',
  //       'SHARE PRICE',
  //     ],
  //     sentiment: { polarity: 1, neg: 0.018, neu: 0.79, pos: 0.191 },
  //   },
  //   {
  //     date: '2022-12-13T16:44:39+00:00',
  //     title: 'Why Apple, Amazon, Alphabet, and Other FAANG Stocks Rallied on Tuesday',
  //     content:
  //       'Wall Street kicked the day with a broad-based rally on Tuesday. Technology stocks have been mauled by the bear market over the past year, but investors got a glimmer of hope today that the economy may finally be on the mend. The latest read on inflation gave investors a much-needed boost of confidence, which helped fuel the rally.\n\nContinue reading',
  //     link: 'https://finance.yahoo.com/m/49ac35b7-7839-3ab7-bf13-5cd24435ded1/why-apple%2C-amazon%2C-alphabet%2C.html',
  //     symbols: [
  //       'AAPL.MX',
  //       'AAPL.US',
  //       'AAPL34.SA',
  //       'ABEA.F',
  //       'ABEA.XETRA',
  //       'ABEC.F',
  //       'ABEC.XETRA',
  //       'AMZ.F',
  //       'AMZ.XETRA',
  //       'AMZN.MX',
  //       'AMZN.US',
  //       'AMZO34.SA',
  //       'APC.F',
  //       'APC.XETRA',
  //       'GOGL34.SA',
  //       'GOGL35.SA',
  //       'GOOG.MI',
  //       'GOOG.MX',
  //     ],
  //     tags: ['ALPHABET', 'AMAZON', 'APPLE', 'FAANG STOCKS', 'FEDERAL RESERVE BANK', 'INVESTORS', 'NASDAQ', 'NETFLIX', 'TECHNOLOGY STOCKS'],
  //     sentiment: { polarity: 0.916, neg: 0, neu: 0.82, pos: 0.18 },
  //   },
  //   {
  //     date: '2022-12-13T16:10:30+00:00',
  //     title: 'Stock market today: Dow cuts gains but ends higher as Fed comes into focus',
  //     content:
  //       'By Yasin Ebrahim\n\nInvesting.com -- The Dow cut the bulk of its gains Tuesday as investors weighed up data showing easing inflation pressures for the second-straight month just a day ahead of the Federal Reserve\'s interest rate decision.\n\nThe Dow Jones Industrial Average gained 0.30%, or 103 points, though had been up more than 700 points at the highs of the day. The Nasdaq Composite rose 1%, and the S&P 500 rose 0.7%.\n\nThe Labor Department said Tuesday its consumer price index rose 0.1% last month after edging up 0.3% in October. For the year through November, the CPI increased 7.1%, marking the smallest increase since December 2021.\n\nThe lower inflation print isn\u2019t likely to alter the Fed\u2019s monetary policy decision expected on Wednesday, though it will likely spark debate among members on how much further to increase rates until reaching a peak.\n\n\u201cOverall, a smaller 50 bp hike is expected for the Fed\u2019s meeting tomorrow, to be followed by another 50 bp over the first quarter next year before the Fed feels comfortable to pause the current cycle and reassess,\u201d RBC said.\n\nExpectations that the Fed could pause sooner rather than later pushed Treasury yields sharply lower, sparking a Meta-led surge in big tech.\n\nMeta Platforms Inc (NASDAQ:META) gained more than 4% after Goldman Sachs flagged the social media giant as a "top pick", saying most of the bad news about the firm\u2019s core social media business and concerns about its hefty investments in the metaverse is increasingly priced into the shares.\n\nAlphabet Inc (NASDAQ:GOOGL) rose 2%, while Apple (NASDAQ:AAPL) and Microsoft Corporation (NASDAQ:MSFT) ended in the green, with the latter up more than 1%.\n\nEnergy added to gains from a day earlier as oil prices were driven higher by ongoing supply constraints amid the closure of the Keystone pipeline supplying Canadian heavy crude to the U.S. Gulf Coast of Mexico.\n\nHalliburton Company (NYSE:HAL) rallied more than 7%, while APA Corporation (NASDAQ:APA) and Schlumberger NV (NYSE:SLB) were up about 4% each.\n\nStory continues\n\nIn health care, meanwhile, Moderna (NASDAQ:MRNA) jumped 20% after the drugmaker announced positive results from its experimental skin cancer treatment.\n\nPfizer (NYSE:PFE), meanwhile, closed up nearly 2% as Goldman Sachs upgraded its rating on the stock to buy from neutral on expectations the firm\'s RSV, migraine, and sickle-cell disease drugs will drive growth in 2023.\n\nThe move higher in the broader market comes as some continue to warn of a downturn next year, driven by a deterioration in corporate earnings as margins come under pressure from a weaker consumer amid the impact of higher interest rates.\n\n\u201cAs earnings projections deteriorate and the lagged effects of Fed\u2019s actions begin to set in a more concrete way, I think markets will turn down,\u201d Phillip Toews, CEO&portfolio manager of Toews Asset Management, told Investing.com\u2019s Yasin Ebrahim in an interview on Monday.\n\nRelated Articles\n\nStock market today: Dow cuts gains but ends higher as Fed comes into focus\n\nDanske Bank pleads guilty to resolve long-running Estonia money-laundering probe\n\nAfter-hours movers: ABM, Braze fall following earnings',
  //     link: 'https://finance.yahoo.com/news/stock-market-today-dow-cuts-161030738.html',
  //     symbols: ['AAPL.US', 'APA.US', 'COMP.US', 'DJI.INDX', 'GOOGL.US', 'HAL.US', 'IXIC.INDX', 'META.US', 'MRNA.US', 'MSFT.US', 'PFE.US', 'SLB.US'],
  //     tags: [
  //       'CONSUMER PRICE INDEX',
  //       'DOW',
  //       'FEDERAL RESERVE',
  //       'GOLDMAN SACHS',
  //       'INFLATION PRESSURES',
  //       'INTEREST RATE DECISION',
  //       'LABOR DEPARTMENT',
  //       'NASDAQ COMPOSITE',
  //     ],
  //     sentiment: { polarity: 0.84, neg: 0.049, neu: 0.872, pos: 0.079 },
  //   },
  //   {
  //     date: '2022-12-13T23:16:57+00:00',
  //     title: 'Why Investors Cranked Spotify Stock Higher Today',
  //     content:
  //       'A report indicated that the companies behind popular mobile apps helped push Spotify (NYSE: SPOT) stock higher on Tuesday. The share price of the music service operator, whose app is enduringly popular on mobile platforms, rose by 1.5% on the day, more than double the percentage rate gain of the S&P 500 index. In an article published this mid-afternoon and updated shortly before market close, Bloomberg wrote that Apple (NASDAQ: AAPL) is gearing up to allow third-party app stores on its devices.\n\nContinue reading',
  //     link: 'https://finance.yahoo.com/m/11f3b4db-63eb-307f-b718-d2189697bf48/why-investors-cranked-spotify.html',
  //     symbols: ['639.F', '639.XETRA', 'AAPL.US', 'SPOT.US'],
  //     tags: ['APPLE', 'SPOTIFY'],
  //     sentiment: { polarity: 0.902, neg: 0, neu: 0.856, pos: 0.144 },
  //   },
  //   {
  //     date: '2022-12-13T22:23:12+00:00',
  //     title: 'Fed Rate Hike Looms After Market Rally Fizzles; Tesla Stock Hits New Lows As Elon Musk Admits This',
  //     content:
  //       'A Fed rate hike looms after Tuesday\'s rally on tame inflation data fizzled. Tesla stock hit new lows as Elon Musk sees "macroeconomic tides."\n\nContinue reading',
  //     link: 'https://finance.yahoo.com/m/c0cc381f-ec6c-30e2-a8b2-847f78d55dfc/fed-rate-hike-looms-after.html',
  //     symbols: ['AAPL.US', 'BTU.US', 'COMP.US', 'DJI.INDX', 'GE.US', 'GSPC.INDX', 'IXIC.INDX', 'MSFT.US', 'RUT.INDX', 'TSLA.US'],
  //     tags: [
  //       'BASIS POINTS',
  //       'CPI INFLATION',
  //       'DOW JONES',
  //       'ELON MUSK',
  //       'FEDERAL RESERVE',
  //       'JEROME POWELL',
  //       'MARKET RALLY',
  //       'NASDAQ FUTURES',
  //       'PEABODY ENERGY',
  //       'STOCK MARKET',
  //       'TESLA STOCK',
  //     ],
  //     sentiment: { polarity: -0.34, neg: 0.129, neu: 0.871, pos: 0 },
  //   },
  //   {
  //     date: '2022-12-13T20:02:45+00:00',
  //     title: '12 Best Multibagger Stocks to Buy Now',
  //     content:
  //       'In this article, we discuss 12 best multibagger stocks to buy now. If you want to see more stocks in this selection, check out 5 Best Multibagger Stocks to Buy Now.\n\nIn this uncertain market backdrop, investors are focused on macroeconomic and geopolitical constraints and their potential effects on investment portfolios. Goldman Sachs believes the U.S. will avoid a recession in 2023, and even if a recession were to occur, it would be comparatively moderate given the strong underlying U.S. fundamentals. Although inflation and rampant interest rates remain the most significant short-term challenges, global factors like the war in Ukraine and China\u2019s regional power and internal conditions are also impacting investor sentiment.\n\nDespite the volatile economic conditions, history indicates that during turbulent market spreads, investors should stay long and remain invested. To cope with the market turbulence, many investors have shifted their portfolios towards defensive and value equities to combat the taxing headwinds which they presently face. As per Goldman Sachs, investors should focus on quality stocks that are US-listed, benefit from a strong dollar, and display fortress balance sheets.\n\nIn the first half of 2023, the S&P 500 is expected to mimic the declines of 2022, but a pivot from the Fed could support an asset recovery in the later half of the year, taking the S&P 500 to 4,200 by the end of 2023. Keeping this in mind, investors often pick up large-cap stocks like Amazon.com, Inc. (NASDAQ:AMZN), Apple Inc. (NASDAQ:AAPL), and NVIDIA Corporation (NASDAQ:NVDA). However, we discuss some of the best multibagger stocks in this article.\n\nOur Methodology\n\nWe selected the following stocks based on share price gains of more than 200% over the last year as of December 13. These stocks are ranked according to their share price gains. We have assessed the hedge fund sentiment from Insider Monkey\u2019s database of 920 elite hedge funds tracked as of the end of the third quarter of 2022.\n\nStory continues 12 Best Multibagger Stocks to Buy Now\n\nImage by Steve Buissinne from Pixabay\n\nBest Multibagger Stocks to Buy Now\n\n12. CTI BioPharma Corp. (NASDAQ:CTIC)\n\n1-Year Share Price Gain as of December 13: 192.00%\n\nNumber of Hedge Fund Holders: 23\n\nCTI BioPharma Corp. (NASDAQ:CTIC) is a Washington-based biopharmaceutical company focused on the acquisition, development, and commercialization of novel targeted therapies for blood-related cancers in the United States. On November 7, CTI BioPharma Corp. (NASDAQ:CTIC) reported a Q3 GAAP loss per share of $0.13 and a revenue of $18.2 million, outperforming Wall Street estimates by $0.03 and $1.03 million, respectively. The stock traded 17.5% higher on November 8 after the company posted better-than-expected Q3 results.\n\nOn October 17, investment advisory SVB Securities initiated coverage of CTI BioPharma Corp. (NASDAQ:CTIC) with an Outperform rating and a $13 price target. Analyst Andrew Berens issued the ratings update.\n\nAccording to the third quarter database of Insider Monkey, 23 hedge funds held stakes worth nearly $194 million in CTI BioPharma Corp. (NASDAQ:CTIC), compared to 17 funds in the earlier quarter worth $158 million. Mark Lampert\u2019s Biotechnology Value Fund / BVF Inc is the leading position holder in the company, with 8.81 million shares worth $51.3 million.\n\nLike Amazon.com, Inc. (NASDAQ:AMZN), Apple Inc. (NASDAQ:AAPL), and NVIDIA Corporation (NASDAQ:NVDA), CTI BioPharma Corp. (NASDAQ:CTIC) is one of the best stocks to invest in for a winning portfolio.\n\n11. Alpha Metallurgical Resources, Inc. (NYSE:AMR)\n\n1-Year Share Price Gain as of December 13: 206.58%\n\nNumber of Hedge Fund Holders: 27\n\nAlpha Metallurgical Resources, Inc. (NYSE:AMR) was incorporated in 2016 and is headquartered in Bristol, Tennessee. It is a mining company that produces, processes, and sells met and thermal coal in Virginia and West Virginia. On November 28, Alpha Metallurgical Resources, Inc. (NYSE:AMR) provided operational guidance for 2023, including a raise in full-year total shipments to 16.7 million-18.4 million tons, with 15 million-16 million metallurgical tons expected to account for the majority of the total.\n\nOn November 8, Cowen analyst Lance Vitanza maintained an Outperform rating on Alpha Metallurgical Resources, Inc. (NYSE:AMR) but lowered the price target on the shares to $215 from $225. The analyst said in addition to strong Q3 results, the company reported a significant increase in its return of capital to shareholders with a $400 million addition to its repurchase program, an $80 million one-time special dividend, and a $0.03 increase to its regular dividend, all of which conveys confidence in the outlook.\n\nAccording to Insider Monkey\u2019s data, 27 hedge funds were long Alpha Metallurgical Resources, Inc. (NYSE:AMR) at the end of the third quarter of 2022, compared to 25 in the prior quarter. Jim Simons\u2019 Renaissance Technologies is the largest stakeholder of the company, with 819,915 shares worth $112 million. It is one of the best multibagger stocks favored by elite hedge funds.\n\n10. Prometheus Biosciences, Inc. (NASDAQ:RXDX)\n\n1-Year Share Price Gain as of December 13: 222.70%\n\nNumber of Hedge Fund Holders: 25\n\nPrometheus Biosciences, Inc. (NASDAQ:RXDX) is a California-based biopharmaceutical company that engages in the discovery, development, and commercialization of novel therapeutics and companion diagnostics products for the treatment of inflammatory bowel diseases. On December 7, Prometheus Biosciences, Inc. (NASDAQ:RXDX) announced that its medicine PRA023 indicated robust efficacy and favorable safety in two mid stage trials in patients with ulcerative colitis and Crohn\'s disease. Prometheus Biosciences, Inc. (NASDAQ:RXDX) plans to advance PRA023 into phase 3 studies for these trials in 2023.\n\nOn December 8, Credit Suisse analyst Tiago Fauth raised the price target on Prometheus Biosciences, Inc. (NASDAQ:RXDX) to $142 from $59 and maintained an Outperform rating on the shares following ulcerative colitis and Crohn\'s disease data. The debate is now shifting to the potential size of the class. The analyst believes present market dynamics in inflammatory bowel disease remain favorable for a likely best-in-class asset such as PRA023.\n\nAccording to Insider Monkey\u2019s Q3 data, Prometheus Biosciences, Inc. (NASDAQ:RXDX) was part of 25 hedge fund portfolios, compared to 20 in the prior quarter. Bihua Chen\u2019s Cormorant Asset Management is the largest stakeholder of the company, with approximately 2 million shares worth $116.8 million.\n\n9. Hallador Energy Company (NASDAQ:HNRG)\n\n1-Year Share Price Gain as of December 13: 227.17%\n\nNumber of Hedge Fund Holders: 8\n\nHallador Energy Company (NASDAQ:HNRG) is one of the best multibagger stocks to monitor. The company is based in Indiana, and it engages in the production of steam coal in the State of Indiana for the electric power generation industry. On November 3, Hallador Energy Company (NASDAQ:HNRG) reported Q3 GAAP EPS of $0.05 and a revenue of $85.08 million, up 6.60% on a year-over-year basis. The company\u2019s fundamentals continue to improve as coal prices remain resilient. With shares up over 227% over the last year as of December 13, Hallador Energy Company (NASDAQ:HNRG) is one of the best performing stocks this year.\n\nAccording to Insider Monkey\'s Q3 data, 8 hedge funds were bullish on Hallador Energy Company (NASDAQ:HNRG), compared to 5 funds in the prior quarter. Aaron Weitman\'s CastleKnight Management is the largest stakeholder of the company, with 1.18 million shares worth $6.64 million.\n\nHere is what Cove Street Capital specifically said about Hallador Energy Company (NASDAQ:HNRG) in its Q2 2022 investor letter:\n\n\u201cHallador Energy Company (NASDAQ:HNRG) is a\u2026 (get ready for it) \u2026 coal company. They have an unusual asset position \u2013 a very low cost basis in the Illinois Basis \u2013 almost all of which is thermal coal used in electricity generation. You might have noticed that the United States is theoretically attempting to transition our power needs in a ten-year plan when the reality is that 50 is probably the realistic number. The drive to this unrealistic goal is producing a severe shortage of \u201cbaseline\u201d power production, which is simply not a good thing. Our bet is that Hallador\u2019s assets are worth a lot more and will generate cash for a lot longer than is being priced in by the market. There is an interesting and financially savvy board guiding the CEO. In a new and interesting twist, the company essentially is being \u201cgiven\u201d a coal fired power plant in their backyard due to political issues. This could represent an enormous piece of upside subject to the vagaries of regulation and weather. Although we have followed the company for many years, this was a new buy in the quarter.\u201d\n\n8. CONSOL Energy Inc. (NYSE:CEIX)\n\n1-Year Share Price Gain as of December 13: 243.93%\n\nNumber of Hedge Fund Holders: 31\n\nCONSOL Energy Inc. (NYSE:CEIX) was founded in 1860 and is headquartered in Canonsburg, Pennsylvania. The company produces and exports bituminous coal in the United States, operating through PAMC, CONSOL Marine Terminal, and Other segments. CONSOL Energy Inc. (NYSE:CEIX) engages in the mining, preparation, and marketing of bituminous coal, serving power generators, industrial, and metallurgical end-users. The company reported a Q3 net income of $152.1 million and a quarterly free cash flow of $107.1 million. 2023 and 2024 contracted positions improved to 21.8 million tons and 8.8 million tons, respectively.\n\nOn November 2, Benchmark analyst Nathan Martin raised the price target on CONSOL Energy Inc. (NYSE:CEIX) to $80 from $72 and maintained a Buy rating on the shares. Though CONSOL Energy Inc. (NYSE:CEIX) posted Q3 adjusted EBITDA that "slightly" fell short of consensus, lower shipments were likely the driver and management believes it is done with those issues, the analyst said. He believes CONSOL Energy Inc. (NYSE:CEIX) should reach its targeted debt level of $300 million in the coming quarters and "at that point we think cash returns will accelerate," the analyst added.\n\nAccording to Insider Monkey\u2019s data, 31 hedge funds were long CONSOL Energy Inc. (NYSE:CEIX) at the end of Q3 2022, with collective stakes worth $360.65 million, compared to 23 funds in the prior quarter worth $272.5 million. David Einhorn\u2019s Greenlight Capital is the largest stakeholder of the company, with 1.71 million shares valued at $110 million.\n\nGreenlight Capital made the following comment about CONSOL Energy Inc. (NYSE:CEIX) in its Q3 2022 investor letter:\n\n\u201cCONSOL Energy Inc. (NYSE:CEIX) shares rose from $49.38 to $64.32. As we wrote last quarter, we expect the company to generate approximately $50 per share in after-tax free cash flow by the end of 2023. The company paid its first dividend of $1 per share in August and also announced a policy of distributing at least 35% of its free cash flow to its shareholders. We would emphasize the \u201cat least\u201d part and see room for the percentage to expand as the cash flows materialize. Coal markets have remained quite strong and visibility is improving, such that 2024 looks to us like another strong year.\u201d\n\n7. Sigma Lithium Corporation (NASDAQ:SGML)\n\n1-Year Share Price Gain as of December 13: 245.15%\n\nNumber of Hedge Fund Holders: 8\n\nSigma Lithium Corporation (NASDAQ:SGML) is a Canadian firm that engages in the exploration and development of lithium deposits in Brazil. Sigma Lithium Corporation (NASDAQ:SGML) stock gained 7.9% pre-market on December 5 after revealing plans to nearly triple its planned production of battery grade lithium concentrate to approximately 100,000 metric tons per year of lithium carbonate equivalent by 2024 after positive results from a study at its Grota do Cirilo project in Brazil. The Canadian miner plans to begin commissioning Grota do Cirilo this month, with production starting by April 2023. With shares up over 245% in the last year as of December 13, Sigma Lithium Corporation (NASDAQ:SGML) is one of the best multibagger stocks to invest in.\n\nOn December 5, Canaccord analyst Katie Lachapelle raised the firm\'s price target on Sigma Lithium Corporation (NASDAQ:SGML) to C$64 from C$45 and kept a Speculative Buy rating on the shares.\n\nAccording to Insider Monkey\u2019s Q3 data, Sigma Lithium Corporation (NASDAQ:SGML) was part of 8 hedge fund portfolios, with collective stakes worth $45.5 million, compared to 3 funds in the prior quarter worth $23.7 million. Jack Ripsteen\u2019s Potrero Capital Research is the leading position holder in the company, with 596,930 shares valued at $16.2 million.\n\n6. TORM plc (NASDAQ:TRMD)\n\n1-Year Share Price Gain as of December 13: 289.59%\n\nNumber of Hedge Fund Holders: 15\n\nTORM plc (NASDAQ:TRMD) is a Denmark-based product tanker company that engages in the transportation of gasoline, jet fuel, naphtha, and crude oil worldwide. On November 10, TORM plc (NASDAQ:TRMD) reported Q3 GAAP earnings per share of $2.63 and a revenue of $448.1 million, up 188.2% year-over-year and beating Wall Street estimates by $106.85 million. The company paid a per share quarterly dividend of $1.46 to shareholders on December 8.\n\nOn May 25, Pareto analyst Eirik Haavaldsen initiated coverage of TORM plc (NASDAQ:TRMD) with a Buy rating and a DKK 140 price target. The company could pay out dividends equal to 40% of its market value over the next three years, and tanker spot rates "are going ballistic", the analyst told investors in a research note.\n\nAccording to Insider Monkey\u2019s Q3 data, 15 hedge funds were long TORM plc (NASDAQ:TRMD), compared to 12 funds in the prior quarter. The collective stakes held by elite funds in Q3 2022 increased to $1.16 billion from $760 million in Q2 2022. Howard Marks\u2019 Oaktree Capital Management is the largest position holder in the company, with 53.8 million shares valued at $1.10 billion.\n\nIn addition to Amazon.com, Inc. (NASDAQ:AMZN), Apple Inc. (NASDAQ:AAPL), and NVIDIA Corporation (NASDAQ:NVDA), TORM plc (NASDAQ:TRMD) is one of the stocks on the radar of smart investors as they head into 2023.\n\nClick to continue reading and see 5 Best Multibagger Stocks to Buy Now.\n\nSuggested articles:\n\n10 Best Medical Stocks Under $20 15 Countries That Produce the Most Solar Energy 20 Countries That Produce the Most Electric Power\n\nDisclosure: None.\u00a012 Best Multibagger Stocks to Buy Now is originally published on Insider Monkey.',
  //     link: 'https://finance.yahoo.com/news/12-best-multibagger-stocks-buy-200245140.html',
  //     symbols: ['AAPL.US', 'AMR.US', 'AMZN.US', 'C9X.F', 'CEIX.US', 'CEPS.F', 'CTIC.US', 'HNRG.US', 'NVDA.US', 'RXDX.US', 'SGML.US', 'TRMD.US'],
  //     tags: [
  //       'ALPHA METALLURGICAL RESOURCES',
  //       'CONSOL ENERGY INC',
  //       'GOLDMAN SACHS',
  //       'HALLADOR ENERGY COMPANY',
  //       'HEDGE FUND',
  //       'HEDGE FUNDS',
  //       'INC',
  //       'INSIDER MONKEY',
  //       'PROMETHEUS BIOSCIENCES',
  //       'SHARE PRICE',
  //     ],
  //     sentiment: { polarity: 1, neg: 0.018, neu: 0.79, pos: 0.191 },
  //   },
  //   {
  //     date: '2022-12-13T16:44:39+00:00',
  //     title: 'Why Apple, Amazon, Alphabet, and Other FAANG Stocks Rallied on Tuesday',
  //     content:
  //       'Wall Street kicked the day with a broad-based rally on Tuesday. Technology stocks have been mauled by the bear market over the past year, but investors got a glimmer of hope today that the economy may finally be on the mend. The latest read on inflation gave investors a much-needed boost of confidence, which helped fuel the rally.\n\nContinue reading',
  //     link: 'https://finance.yahoo.com/m/49ac35b7-7839-3ab7-bf13-5cd24435ded1/why-apple%2C-amazon%2C-alphabet%2C.html',
  //     symbols: [
  //       'AAPL.MX',
  //       'AAPL.US',
  //       'AAPL34.SA',
  //       'ABEA.F',
  //       'ABEA.XETRA',
  //       'ABEC.F',
  //       'ABEC.XETRA',
  //       'AMZ.F',
  //       'AMZ.XETRA',
  //       'AMZN.MX',
  //       'AMZN.US',
  //       'AMZO34.SA',
  //       'APC.F',
  //       'APC.XETRA',
  //       'GOGL34.SA',
  //       'GOGL35.SA',
  //       'GOOG.MI',
  //       'GOOG.MX',
  //     ],
  //     tags: ['ALPHABET', 'AMAZON', 'APPLE', 'FAANG STOCKS', 'FEDERAL RESERVE BANK', 'INVESTORS', 'NASDAQ', 'NETFLIX', 'TECHNOLOGY STOCKS'],
  //     sentiment: { polarity: 0.916, neg: 0, neu: 0.82, pos: 0.18 },
  //   },
  //   {
  //     date: '2022-12-13T16:10:30+00:00',
  //     title: 'Stock market today: Dow cuts gains but ends higher as Fed comes into focus',
  //     content:
  //       'By Yasin Ebrahim\n\nInvesting.com -- The Dow cut the bulk of its gains Tuesday as investors weighed up data showing easing inflation pressures for the second-straight month just a day ahead of the Federal Reserve\'s interest rate decision.\n\nThe Dow Jones Industrial Average gained 0.30%, or 103 points, though had been up more than 700 points at the highs of the day. The Nasdaq Composite rose 1%, and the S&P 500 rose 0.7%.\n\nThe Labor Department said Tuesday its consumer price index rose 0.1% last month after edging up 0.3% in October. For the year through November, the CPI increased 7.1%, marking the smallest increase since December 2021.\n\nThe lower inflation print isn\u2019t likely to alter the Fed\u2019s monetary policy decision expected on Wednesday, though it will likely spark debate among members on how much further to increase rates until reaching a peak.\n\n\u201cOverall, a smaller 50 bp hike is expected for the Fed\u2019s meeting tomorrow, to be followed by another 50 bp over the first quarter next year before the Fed feels comfortable to pause the current cycle and reassess,\u201d RBC said.\n\nExpectations that the Fed could pause sooner rather than later pushed Treasury yields sharply lower, sparking a Meta-led surge in big tech.\n\nMeta Platforms Inc (NASDAQ:META) gained more than 4% after Goldman Sachs flagged the social media giant as a "top pick", saying most of the bad news about the firm\u2019s core social media business and concerns about its hefty investments in the metaverse is increasingly priced into the shares.\n\nAlphabet Inc (NASDAQ:GOOGL) rose 2%, while Apple (NASDAQ:AAPL) and Microsoft Corporation (NASDAQ:MSFT) ended in the green, with the latter up more than 1%.\n\nEnergy added to gains from a day earlier as oil prices were driven higher by ongoing supply constraints amid the closure of the Keystone pipeline supplying Canadian heavy crude to the U.S. Gulf Coast of Mexico.\n\nHalliburton Company (NYSE:HAL) rallied more than 7%, while APA Corporation (NASDAQ:APA) and Schlumberger NV (NYSE:SLB) were up about 4% each.\n\nStory continues\n\nIn health care, meanwhile, Moderna (NASDAQ:MRNA) jumped 20% after the drugmaker announced positive results from its experimental skin cancer treatment.\n\nPfizer (NYSE:PFE), meanwhile, closed up nearly 2% as Goldman Sachs upgraded its rating on the stock to buy from neutral on expectations the firm\'s RSV, migraine, and sickle-cell disease drugs will drive growth in 2023.\n\nThe move higher in the broader market comes as some continue to warn of a downturn next year, driven by a deterioration in corporate earnings as margins come under pressure from a weaker consumer amid the impact of higher interest rates.\n\n\u201cAs earnings projections deteriorate and the lagged effects of Fed\u2019s actions begin to set in a more concrete way, I think markets will turn down,\u201d Phillip Toews, CEO&portfolio manager of Toews Asset Management, told Investing.com\u2019s Yasin Ebrahim in an interview on Monday.\n\nRelated Articles\n\nStock market today: Dow cuts gains but ends higher as Fed comes into focus\n\nDanske Bank pleads guilty to resolve long-running Estonia money-laundering probe\n\nAfter-hours movers: ABM, Braze fall following earnings',
  //     link: 'https://finance.yahoo.com/news/stock-market-today-dow-cuts-161030738.html',
  //     symbols: ['AAPL.US', 'APA.US', 'COMP.US', 'DJI.INDX', 'GOOGL.US', 'HAL.US', 'IXIC.INDX', 'META.US', 'MRNA.US', 'MSFT.US', 'PFE.US', 'SLB.US'],
  //     tags: [
  //       'CONSUMER PRICE INDEX',
  //       'DOW',
  //       'FEDERAL RESERVE',
  //       'GOLDMAN SACHS',
  //       'INFLATION PRESSURES',
  //       'INTEREST RATE DECISION',
  //       'LABOR DEPARTMENT',
  //       'NASDAQ COMPOSITE',
  //     ],
  //     sentiment: { polarity: 0.84, neg: 0.049, neu: 0.872, pos: 0.079 },
  //   },
  // ]
  // let news = [
  //   {
  //     source: 'Benzinga',
  //     title: "Apple's New Freeform App Not Showing Up On Your Mac? Here's How You Can Fix It - Apple (NASDAQ:AAPL) - Benzinga",
  //     url: 'https://www.benzinga.com/news/22/12/30087447/apples-new-freeform-app-not-showing-up-on-your-mac-heres-how-you-can-fix-it',
  //     published_at: 1671114321,
  //     score: { neg: 0, neu: 0.913, pos: 0.087, compound: 0.2263 },
  //   },
  //   {
  //     source: 'Business Standard',
  //     title: 'Reliance Jio True 5G: List of supported Apple iPhones and how-to enable it - Business Standard',
  //     url: 'https://www.business-standard.com/article/technology/reliance-jio-true-5g-list-of-supported-apple-iphones-and-how-to-enable-it-122121500564_1.html',
  //     published_at: 1671094560,
  //     score: { neg: 0, neu: 0.733, pos: 0.267, compound: 0.6249 },
  //   },
  //   {
  //     source: 'MarketWatch',
  //     title: 'The Ratings Game: Apple is seeing better iPhone wait times, but that’s still ‘not enough,’ says analyst',
  //     url: 'https://www.marketwatch.com/story/apple-is-seeing-better-iphone-wait-times-but-thats-still-not-enough-says-analyst-11671056169',
  //     published_at: 1671056160,
  //     score: { neg: 0, neu: 0.891, pos: 0.109, compound: 0.2382 },
  //   },
  // ]
  // console.log('news articles combined')

  // console.log(news)

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

export default NewsArticles
