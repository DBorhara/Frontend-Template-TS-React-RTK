import React, { useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { signup } from "../redux/slices/user";

interface CustomError {
  name: string;
  message: string;
  code: string;
}
export default function Signup() {
  const dispatch = useAppDispatch();
  const [error, setError] = useState<CustomError | null>(null);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignupSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const userSignup = await dispatch(signup({ email, password })).unwrap();
      if (userSignup) {
        console.log("userSignup", userSignup);
        //change to redirect to home page
      }
    } catch (error: any) {
      setError(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSignupSubmit} name="signup">
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="email"
            name="email"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
            name="password"
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
        {error && error.message && <div> {error.message} </div>}
      </form>
      <a
        href={`${
          process.env.NODE_ENV === "development"
            ? process.env.REACT_APP_LOCAL_BACKEND_URL
            : process.env.REACT_APP_REMOTE_BACKEND_URL
        }/auth/google`}
      >
        Log in with Google
      </a>
    </div>
  );
}
