import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar({
  isAuthenticated,
}: {
  isAuthenticated: boolean;
}) {
  const navigate = useNavigate();

  return isAuthenticated ? (
    <div>
      <button type="button" onClick={() => navigate("/home")}>
        Home
      </button>
      <button type="button">Logout</button>
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
