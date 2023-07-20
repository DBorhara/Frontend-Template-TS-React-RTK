import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/slices/user";
import { useAppDispatch } from "../redux/hooks";

export default function Navbar({ isLoggedIn }: { isLoggedIn: boolean }) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return isLoggedIn ? (
    <div>
      <button type="button" onClick={() => navigate("/home")}>
        Home
      </button>
      <button type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  ) : (
    <div>
      <button type="button" onClick={() => navigate("/login")}>
        Log In
      </button>
      <button type="button" onClick={() => navigate("/signup")}>
        Sign Up
      </button>
    </div>
  );
}
