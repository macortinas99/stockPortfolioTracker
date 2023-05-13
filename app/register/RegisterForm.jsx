'use client'
import { useState } from 'react'
import styles from '../../styles/index'
import { useRouter } from 'next/navigation'

const RegisterForm = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
    stocks: [],
  })
  const [confirmPassword, setConfirmPassword] = useState('')
  const [hasPasswordBeenTyped, setHasPasswordBeenTyped] = useState(false)

  const handleFirstNameChange = async e => {
    let firstName = e.target.value
    setFormData({ ...formData, firstName: firstName })
  }
  const handleLastNameChange = async e => {
    let lastName = e.target.value
    setFormData({ ...formData, lastName: lastName })
  }
  const handleEmailAddressChange = async e => {
    let emailAddress = e.target.value
    setFormData({ ...formData, emailAddress: emailAddress })
  }
  const handlePasswordChange = async e => {
    let password = e.target.value
    setHasPasswordBeenTyped(true)
    setFormData({ ...formData, password: password })
  }

  const handleRegistration = async () => {
    router.push(process.env.NEXT_PUBLIC_API_URL + 'api/auth/signin')
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + 'api/users/register', {
      cache: 'no-store',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    console.log(res.json())
  }
  return (
    <div>
      <div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='w-full max-w-md space-y-8'>
          <div>
            <img className='mx-auto w-[150px] h-[150px] w-auto' src='../logo.png' alt='Your Company' />
            <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>Don't have an account already? Create one below</h2>
            <p className='mt-2 text-center text-sm text-gray-600'>
              Or if you already have an account,{' '}
              <a href='api/auth/signin' className='font-medium text-secondary hover:text-indigo-500 underline'>
                login here.
              </a>
            </p>
          </div>
          <form className='mt-8 space-y-6' action='#' method='POST'>
            <input type='hidden' name='remember' defaultValue='true' />
            <div className=' rounded-md shadow-sm flex flex-col gap-2'>
              <div>
                <label htmlFor='password' className='sr-only'>
                  First Name
                </label>
                <input
                  id='firstname'
                  name='firstname'
                  type='name'
                  required
                  className='relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  placeholder='First Name'
                  onChange={e => handleFirstNameChange(e)}
                />
              </div>
              <div>
                <label htmlFor='password' className='sr-only'>
                  Lastname
                </label>
                <input
                  id='lastname'
                  name='lastname'
                  type='name'
                  required
                  className='relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  placeholder='Last Name'
                  onChange={e => handleLastNameChange(e)}
                />
              </div>
              <div>
                <label htmlFor='email-address' className='sr-only'>
                  Email address
                </label>
                <input
                  id='email-address'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  className='relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  placeholder='Email address'
                  onChange={e => handleEmailAddressChange(e)}
                />
              </div>

              <div>
                <label htmlFor='password' className='sr-only'>
                  Password
                </label>

                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  required
                  className='relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  placeholder='Password'
                  onChange={e => handlePasswordChange(e)}
                />
              </div>
              <div>
                <label htmlFor='password' className='sr-only'>
                  Confirm Password
                </label>
                {formData.password === confirmPassword && hasPasswordBeenTyped && <span className={styles.passwordMatch}>Passwords match!</span>}
                {formData.password !== confirmPassword && hasPasswordBeenTyped && (
                  <span className={styles.passwordNotMatch}>Password does not match</span>
                )}

                <input
                  id='confirmpassword'
                  name='confirmpassword'
                  type='password'
                  autoComplete='current-password'
                  required
                  className='relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  placeholder='Confirm Password'
                  onChange={e => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                onClick={() => handleRegistration()}
              >
                <span className='absolute inset-y-0 left-0 flex items-center pl-3'></span>
                Register Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm
