const styles = {
  // Universal Styles
  container: 'bg-background',

  // Navbar Styles
  navbar: 'flex justify-between text-primary font-Sans-Narrow text-xl bg-background h-24 ',
  navbarList: 'my-auto space-x-5 mr-[50px]',
  navItem: 'hover:text-secondary',
  logo: 'w-[75px] h-[75px] object-contain ml-[24px] my-auto',

  // Portfolio section styles

  //   Stock card long styles
  portfolioContainer: ' bg-primary w-[100%]',
  portfolioHeaderColumns: 'text-background2 font-Sans-Narrow flex gap-x-16 p-4 border-b-2 border-danger',
  portfolioTickerInfo: 'font-Sans-Narrow flex gap-x-16 p-4',

  //   News articles section
  articleListContainer: 'w-[20%] h-[1000px] font-Sans-Narrow bg-primary  border-background overflow-auto',
  articles: 'flex flex-col gap-y-2 ',
  articleList: 'relative w-[90%] drop-shadow-2xl mx-auto border-2 rounded p-2',
  articleTitle: 'text-xl font-semibold',
  articleSource: 'text-lg',
  articleDate: 'text-xs',

  // Stock Screener Page
  screenerContainer: 'w-[70%] mx-auto bg-primary ',
  screenerTitle: 'w-[100%] flex justify-center text-3xl font-Sans-Narrow p-6',
  screenerDropDownContainer: 'grid grid-cols-4 w-[90%] mx-auto relative ',
  screenerFilter: 'w-[300px] h-[35px] relative flex justify-center items-center gap-x-2 border-[0.3px] absolute right-0 p-2',
  screenerFilterName: 'w-[50%] text-right	',
  screenerDropDown: ' w-[50%] h-[25px] drop-shadow-2xl border-[1px] inline list-none items-center right-0',
  screenerDropwDownList: 'hover:bg-[#298DE6] min-h-[35px] w-[150px]',
  filterResultsContainer: 'w-[90%] relative mx-auto border-2 drop-shadow-2xl',
  filterResultsHeader: 'bg-background2 font-Sans-Narrow',
  filterResultsInfoContainer: '',
}

export default styles
