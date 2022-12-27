import '../styles/globals.css'

const RootLayout = ({ children }) => (
  <html lang='en'>
    <head>
      {/* Don't mind this error, if async tag is added it breaks production on page refresh */}
      <script src='https://s3.tradingview.com/tv.js'></script>
    </head>
    <body className='bg-background2'>{children}</body>
  </html>
)

export default RootLayout
