import React, { useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { login } from "../redux/slices/user";

interface CustomError {
  name: string;
  message: string;
  code: string;
}

export default function Login() {
  const [error, setError] = useState<CustomError | null>(null);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      const userLogin = await dispatch(login({ email, password })).unwrap();
      if (userLogin) {
        console.log("userLogin", userLogin);
      }
    } catch (error: any) {
      setError(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleLoginSubmit} name="login">
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
        {error && error.message && <div> {error.message} </div>}
      </form>
      <a href="http://localhost:8080/auth/google">Log in with Google</a>
    </div>
  );
}
