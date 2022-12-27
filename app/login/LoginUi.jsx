'use client'
import React, { useEffect, useState } from 'react'

function LoginUi() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [submittedResponse, setSubmittedResponse] = useState(false)
  const [userInfo, setUserInfo] = useState()

  const handleSubmit = () => {
    event.preventDefault()
    const verifyEmail = async () => {
      let res = await fetch(process.env.NEXT_PUBLIC_API_URL + 'api/users/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiBody),
      })
      let data = await res.json()
      // console.log('this should be printing on client')
      console.log(data)
      setUserInfo(data)
    }
    verifyEmail()
    setSubmittedResponse(true)
  }
  let apiBody = { email, password }

  // Re-route user to dashboard/home page

  // useEffect(() => {
  //   // event.preventDefault()
  //   // const verifyEmail = async () => {
  //   //   let res = await fetch(process.env.NEXT_PUBLIC_API_URL + 'api/users/verify', {
  //   //     method: 'POST',
  //   //     headers: {
  //   //       'Content-Type': 'application/json',
  //   //     },
  //   //     body: JSON.stringify(email),
  //   //   })
  //   //   let data = await res.json()
  //   //   // console.log('this should be printing on client')
  //   //   console.log(data.user)
  //   //   setUserInfo(data.user)
  //   // }
  //   // if (submittedResponse) {
  //   //   verifyEmail()
  //   //   console.log('user info', userInfo)
  //   // }
  // }, [submittedResponse])
  return (
    <form>
      {submittedResponse && !userInfo && <p>The email you entered does not exists.</p>}
      <label htmlFor='email'>Email:</label>
      <input type='email' id='email' onChange={e => setEmail(e.target.value)} />
      <br />
      {submittedResponse && !userInfo && <p>The password you entered is not correct.</p>}
      <label htmlFor='password'>Password:</label>
      <input type='password' id='password' onChange={e => setPassword(e.target.value)} />
      <br />
      <button type='submit' onClick={() => handleSubmit()}>
        Log in
      </button>
    </form>
  )
}

export default LoginUi
