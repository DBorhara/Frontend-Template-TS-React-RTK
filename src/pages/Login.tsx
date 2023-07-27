import React, { useState, ChangeEvent, FormEvent } from "react";
import { useAppDispatch } from "../redux/hooks";
import { login } from "../redux/slices/user";

// Define a CustomError interface to handle any errors that may occur during login
interface CustomError {
  name: string;
  message: string;
  code: string;
}

// The Login component handles the user login process
export default function Login() {
  // Use useState hook for form inputs and error handling
  const [error, setError] = useState<CustomError | null>(null);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // useAppDispatch hook to dispatch actions
  const dispatch = useAppDispatch();

  // Function to handle form submission
  const handleLoginSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Dispatch login action with email and password
      await dispatch(login({ email, password })).unwrap();
    } catch (error: any) {
      // Set the error if login fails
      setError(error);
    }
  };

  // Function to handle input change
  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
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
            onChange={handleInputChange(setEmail)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={handleInputChange(setPassword)}
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
        {error && <div> {error.message} </div>}
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
