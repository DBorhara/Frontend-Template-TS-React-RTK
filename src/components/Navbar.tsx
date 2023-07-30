import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/slices/user";
import { useAppDispatch } from "../redux/hooks";

/**
 * Interface for Navbar component props
 */
interface NavbarProps {
  isLoggedIn: boolean;
}

/**
 * Navbar component.
 *
 * Depending on whether the user is logged in or not,
 * it shows either login/signup buttons or a home/logout buttons.
 *
 * @param {NavbarProps} props - The props that define whether the user is logged in.
 */
const Navbar: React.FC<NavbarProps> = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  /**
   * If the user is logged in, show the 'Home' and 'Logout' buttons.
   * Clicking 'Home' navigates to the /home route.
   * Clicking 'Logout' dispatches the logout action.
   */
  if (isLoggedIn) {
    return (
      <nav className="flex items-center justify-between flex-wrap bg-slate-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
            Front-End Template
          </span>
        </div>
        {/* TODO: Fix for navbar collapse/uncollapse on mobile */}
        {/* <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div> */}
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <button
              onClick={() => navigate("/home")}
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => dispatch(logout())}
              // href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Log Out
            </button>
          </div>
        </div>
      </nav>
    );
  }

  /**
   * If the user is not logged in, show the 'Log In' and 'Sign Up' buttons.
   * Clicking 'Log In' navigates to the /login route.
   * Clicking 'Sign Up' navigates to the /signup route.
   */
  return (
    <nav className="flex items-center justify-between flex-wrap bg-slate-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          Front-End Template
        </span>
      </div>
      {/* TODO: Fix for navbar collapse/uncollapse on mobile */}
      {/* <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div> */}
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <button
            onClick={() => navigate("/login")}
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => navigate("/signup")}
            // href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
