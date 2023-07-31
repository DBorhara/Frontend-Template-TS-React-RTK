import React from 'react'
import { useNavigate } from 'react-router-dom'
import { logout } from '../redux/slices/user'
import { useAppDispatch } from '../redux/hooks'

interface NavbarProps {
  isLoggedIn: boolean
}

interface NavButtonProps {
  label: string
  action: () => void
}

const NavButton: React.FC<NavButtonProps> = ({ label, action }) => (
  <button
    onClick={action}
    className="mr-4 mt-4 block text-teal-200 hover:text-white lg:mt-0 lg:inline-block"
  >
    {label}
  </button>
)

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn }) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const buttons = isLoggedIn
    ? [
        { label: 'Home', action: () => navigate('/home') },
        { label: 'Log Out', action: () => dispatch(logout()) }
      ]
    : [
        { label: 'Login', action: () => navigate('/login') },
        { label: 'Sign Up', action: () => navigate('/signup') }
      ]

  return (
    <nav className="flex flex-wrap items-center justify-between bg-slate-500 p-6">
      <div className="mr-6 flex flex-shrink-0 items-center text-white">
        <span className="text-xl font-semibold tracking-tight">
          Front-End Template
        </span>
      </div>
      <div className="block w-full flex-grow lg:flex lg:w-auto lg:items-center">
        <div className="text-sm lg:flex-grow">
          {buttons.map((button, index) => (
            <NavButton key={index} {...button} />
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
