import Image from "next/image";
import Email from './email';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Hero Section with Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/band-hero.jpeg"
              alt="Band performing on stage"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>

          <div className="relative z-10 text-center pt-20 pb-16 sm:pt-24 sm:pb-20">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block">Book Your Band.</span>
              <span className="block text-purple-600 dark:text-purple-400">Make More Money.</span>
            </h1>
            
            <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              Join the waitlist for the revolutionary app that helps musicians maximize their booking potential. 
              Get early access and be the first to transform your band's booking experience.
            </p>

            <div className="mt-10 max-w-md mx-auto sm:max-w-lg">
              <Email />
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {/* Feature Cards */}
              <div className="pt-6">
                <div className="flow-root bg-white dark:bg-gray-800 rounded-lg px-6 pb-8 shadow-lg">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center rounded-md bg-purple-500 p-3 shadow-lg">
                      <Image
                        src="/images/guitar.png"
                        alt="Revenue icon"
                        width={200}
                        height={200}
                        className="text-white"
                      />
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">Maximize Revenue</h3>
                    <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                      Smart pricing and booking strategies to increase your earnings
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-white dark:bg-gray-800 rounded-lg px-6 pb-8 shadow-lg">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center rounded-md bg-purple-500 p-3 shadow-lg">
                      <Image
                        src="/images/signup.png"
                        alt="Calendar icon"
                        width={200}
                        height={200}
                        className="text-white"
                      />
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">Simple Scheduling</h3>
                    <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                      Effortlessly manage your band's calendar and bookings
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-white dark:bg-gray-800 rounded-lg px-6 pb-8 shadow-lg">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center rounded-md bg-purple-500 p-3 shadow-lg">
                      <Image
                        src="/images/fullband.png"
                        alt="Network icon"
                        width={200}
                        height={200}
                        className="text-white"
                      />
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">Grow Your Fanbase</h3>
                    <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                      Connect with new venues and expand your reach
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

