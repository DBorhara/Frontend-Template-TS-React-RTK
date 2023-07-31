import React from 'react'
import { useNavigate } from 'react-router'

// Button Component
function Button({
  text,
  action,
  styles
}: {
  text: string
  action: () => void
  styles: string
}) {
  return (
    <button
      className={styles}
      data-te-ripple-init
      data-te-ripple-color="light"
      onClick={action}
      type="button"
    >
      {text}
    </button>
  )
}

export default function Landing() {
  const navigate = useNavigate()

  const handleNavigation = (path: string) => () => {
    navigate(path)
  }

  return (
    <div className="px-6 py-12 text-center md:px-12 lg:text-left">
      <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl xl:px-32">
        <div className="grid items-center lg:grid-cols-2">
          <div className="mb-12 md:mt-12 lg:mb-0 lg:mt-0">
            <div className="block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14">
              <h1 className="mb-16 mt-2 text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">
                Landing Page <br />
                <span className="text-primary">for your use</span>
              </h1>
              <Button
                text="Get Started"
                action={handleNavigation('/signup')}
                styles="mb-2 inline-block rounded bg-white text-black px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
              />
              <Button
                text="Log In"
                action={handleNavigation('/login')}
                styles="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-700 dark:hover:bg-opacity-40"
              />
            </div>
          </div>
          {/* rest of the code */}
          <img
            src="https://tecdn.b-cdn.net/img/new/ecommerce/vertical/004.jpg"
            className="w-full rounded-lg shadow-lg dark:shadow-black/20"
            alt="E-commerce image"
          />
        </div>
      </div>
      {/* rest of the code */}
    </div>
  )
}
