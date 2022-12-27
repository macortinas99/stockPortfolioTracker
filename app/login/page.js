import React from 'react'
import LoginUi from './LoginUi'
import VerifyEmail from './VerifyEmail'

async function page() {
  // let user = await getUserByEmail('macortinas99@gmail.com')
  // console.log(user)

  return (
    <div>
      {/* <VerifyEmail /> */}
      <LoginUi />
    </div>
  )
}

export default page
