import React, { useState, FormEvent, ChangeEvent } from 'react'
import { useAppDispatch } from '../redux/hooks'
import { login } from '../redux/slices/user'

interface CustomError {
  name: string
  message: string
  code: string
}

interface FormState {
  email: string
  password: string
}

export default function Login() {
  const [error, setError] = useState<CustomError | null>(null)
  const [formState, setFormState] = useState<FormState>({
    email: '',
    password: ''
  })

  const dispatch = useAppDispatch()

  const handleLoginSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await dispatch(login(formState)).unwrap()
    } catch (error: any) {
      setError(error)
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  return (
    <div className="mb-4 flex w-full flex-col items-center rounded bg-white px-8 pb-8 pt-6">
      <form
        className="mb-4 w-full rounded bg-white px-8 pb-8 pt-6 shadow-md md:w-3/12"
        onSubmit={handleLoginSubmit}
        name="login"
      >
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            autoComplete="email"
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            type="text"
            placeholder="email"
            name="email"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-6">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <input
            autoComplete="current-password"
            className="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            type="password"
            placeholder="password"
            name="password"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-5 flex items-center justify-between">
          <button
            className="w-full rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
            type="submit"
          >
            Login
          </button>
        </div>
        {error && (
          <div className="mb-5 rounded border border-red-600 p-2 text-red-500">
            {error.message}
          </div>
        )}
        <div className="flex">
          <a
            className="flex w-full flex-wrap justify-center rounded border bg-blue-300  px-4 py-2 text-center font-bold text-black hover:bg-blue-400 focus:bg-red-300"
            href={`${
              process.env.NODE_ENV === 'development'
                ? process.env.REACT_APP_LOCAL_BACKEND_URL
                : process.env.REACT_APP_REMOTE_BACKEND_URL
            }/auth/google`}
          >
            Log in with
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 600 250"
              width="150"
              height="40"
            >
              <g strokeWidth="16" fill="none">
                <path
                  d="M173 102a51 51 0 1 1-13-30m20 37h-53"
                  stroke="#4a87ee"
                />
                <circle cx="227" cy="128" r="32" stroke="#d83038" />
                <circle cx="313" cy="128" r="32" stroke="#f4c022" />
                <path
                  d="M401 160a31 31 0 1 1 0-61m-4 0a24 29 0 1 1 0 61m26-67v79m-1-12a20 20 0 1 1-52 17"
                  stroke="#4a87ee"
                />
                <path stroke="#4ab95a" d="M449 51v115" />
                <path
                  d="M529 118a30 30 0 1 0-2 24m5-32l-62 28"
                  stroke="#d83038"
                />
              </g>
            </svg>
          </a>
        </div>
      </form>
    </div>
  )
}
