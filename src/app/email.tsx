'use client'

import { useRef } from 'react'
import { addToWaitlist } from './actions/waitlist'

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    grecaptcha: any
  }
}

export default function Email() {
  const recaptchaRef = useRef<HTMLDivElement>(null)

  async function handleSubmit(formData: FormData) {

    
    try {

     
      const token = await window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, {
        action: 'LOGIN',
      });
      console.log('reCAPTCHA token:', token);
      
      if (!token) {
        alert('Please complete the reCAPTCHA')
        return
      }
      
      formData.append('recaptchaToken', token)
      const result = await addToWaitlist(formData)
      
      if (result.success) {
        // Reset reCAPTCHA
        window.grecaptcha.reset()
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <form action={handleSubmit} className="flex flex-col gap-3 w-full">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <label htmlFor="firstName" className="sr-only">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-3 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
            placeholder="First name"
            required
          />
        </div>
        <div className="flex-1">
          <label htmlFor="lastName" className="sr-only">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-3 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
            placeholder="Last name"
            required
          />
        </div>
      </div>
      <div className="w-full">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-3 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
          placeholder="Enter your email address"
          required
        />
      </div>
      
      <button
        type="submit"
        className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto dark:bg-indigo-500 dark:hover:bg-indigo-400"
      >
        Join Waitlist
      </button>

      <div ref={recaptchaRef} className="mt-4" />
    </form>
  )
}
