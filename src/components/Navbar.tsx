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
      <div>
        <button type="button" onClick={() => navigate("/home")}>
          Home
        </button>
        <button type="button" onClick={() => dispatch(logout())}>
          Logout
        </button>
      </div>
    );
  }

  /**
   * If the user is not logged in, show the 'Log In' and 'Sign Up' buttons.
   * Clicking 'Log In' navigates to the /login route.
   * Clicking 'Sign Up' navigates to the /signup route.
   */
  return (
    <div>
      <button type="button" onClick={() => navigate("/login")}>
        Log In
      </button>
      <button type="button" onClick={() => navigate("/signup")}>
        Sign Up
      </button>
    </div>
  );
};

export default Navbar;
