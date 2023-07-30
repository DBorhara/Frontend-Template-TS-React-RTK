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
    <div className="w-full max-w-xs">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleLoginSubmit}
        name="login"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="email"
            name="email"
            onChange={handleInputChange(setEmail)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="password"
            name="password"
            onChange={handleInputChange(setPassword)}
          />
        </div>
        <div className="flex items-center justify-between mb-5">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Login
          </button>
        </div>
        {error && <div> {error.message} </div>}
        <a
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          href={`${
            process.env.NODE_ENV === "development"
              ? process.env.REACT_APP_LOCAL_BACKEND_URL
              : process.env.REACT_APP_REMOTE_BACKEND_URL
          }/auth/google`}
        >
          Log in with Google
        </a>
      </form>
    </div>
  );
}
