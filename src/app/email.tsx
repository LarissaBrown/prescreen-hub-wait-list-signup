'use client'

import { useRef, useEffect } from 'react'
import { addToWaitlist } from './actions/waitlist'

declare global {
  interface Window {
    grecaptcha: any
  }
}

export default function Email() {
  const recaptchaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Render reCAPTCHA when component mounts
    if (recaptchaRef.current) {
      window.grecaptcha.render(recaptchaRef.current, {
        sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
      })
    }
  }, [])

  async function handleSubmit(formData: FormData) {
    try {
      const token = window.grecaptcha.getResponse()
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
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm px-4 py-3 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
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
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm px-4 py-3 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
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
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm px-4 py-3 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="Enter your email address"
          required
        />
      </div>
      
      <button
        type="submit"
        className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:mt-0 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto dark:bg-purple-500 dark:hover:bg-purple-400"
      >
        Join Waitlist
      </button>

      <div ref={recaptchaRef} className="mt-4" />
    </form>
  )
}
