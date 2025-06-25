import Image from "next/image";
import Email from "./email";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white dark:from-slate-900 dark:to-slate-800 light: from-slate-900 light: to-slate-800">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Hero Section with Background Image */}
          <div className="absolute mt-20 inset-0 z-0">
            <Image
              src="/images/avatars-hero.png"
              alt="Avatars Interviewing hero background"
              fill
              className="object-cover opacity-80"
              priority
            />
          </div>

          <div className="relative z-10 text-center pt-20 pb-16 sm:pt-24 sm:pb-20">
            <div className="inline-block bg-white bg-opacity-30 rounded-xl p-8 shadow-2xl z-10">
              <div className="inline-flex ml-50% mb-10 items-center justify-center rounded-md bg-slate-800 p-3 ">
                <Image
                  src="/images/prescreen-hub-logo.png"
                  alt="Prescreen Hub logo icon"
                  width={500}
                  height={200}
                  className="text-white"
                />
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
                <span className="block">Maximize Your Interviews</span>
                <span className="block text-violet-600 dark:text-violet-400">Make A Great Impression</span>
              </h1>
              <h3 className="mt-6 max-w-2xl mx-auto text-xl font-bold text-black dark:text-slate-300">
                Join the waitlist for the revolutionary service that helps job candidates showcase their potential. 
                Get early access and be the first to transform your employment experience.
              </h3>

              <div className="mt-10 max-w-md mx-auto sm:max-w-lg">
                <Email />
              </div>

              <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
                {/* Feature Cards */}
                <div className="pt-6">
                  <div className="flow-root bg-white dark:bg-slate-800 rounded-lg px-6 pb-8 shadow-lg">
                    <div className="-mt-6">
                      <div className="inline-flex items-center justify-center rounded-md bg-violet-500 p-3 shadow-lg">
                        <Image
                          src="/images/pastel-calendar.png"
                          alt="calendar icon"
                          width={200}
                          height={200}
                          className="text-white"
                        />
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-slate-900 dark:text-white tracking-tight">Maximize Time</h3>
                      <p className="mt-2 text-base text-slate-500 dark:text-slate-400">
                        Effortlessly book and pay for services with Calendly.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <div className="flow-root bg-white dark:bg-slate-800 rounded-lg px-6 pb-8 shadow-lg">
                    <div className="-mt-6">
                      <div className="inline-flex items-center justify-center rounded-md bg-violet-500 p-3 shadow-lg">
                        <Image
                          src="/images/video-interview.png"
                          alt="Video interview icon"
                          width={200}
                          height={200}
                          className="text-white"
                        />
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-slate-900 dark:text-white tracking-tight">Showcase YOU and Your Skills</h3>
                      <p className="mt-2 text-base text-slate-500 dark:text-slate-400">
                        Capture the best of your soft and technical skills enhancing your employment potential. 
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <div className="flow-root bg-white dark:bg-slate-800 rounded-lg px-6 pb-8 shadow-lg">
                    <div className="-mt-6">
                      <div className="inline-flex items-center justify-center rounded-md bg-violet-500 p-3 shadow-lg">
                        <Image
                          src="/images/pastel-resume.jpeg"
                          alt="resume icon"
                          width={200}
                          height={200}
                          className="text-white"
                        />
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-slate-900 dark:text-white tracking-tight">Own Unique Video Interviews</h3>
                      <p className="mt-2 text-base text-slate-500 dark:text-slate-400">
                        Connect your personalized video interviews with the employment market. 
                      </p>
                    </div>
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

