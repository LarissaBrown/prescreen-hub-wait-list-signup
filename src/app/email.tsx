export default function Email() {
    return (
        <form className="mt-3 sm:flex">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm px-4 py-3 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="Enter your email address"
        />
        <button
          type="submit"
          className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto dark:bg-purple-500 dark:hover:bg-purple-400"
        >
          Join Waitlist
        </button>
      </form>
    )
}