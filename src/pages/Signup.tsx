import React, { useState, ChangeEvent, FormEvent } from "react";
import { useAppDispatch } from "../redux/hooks";
import { signup } from "../redux/slices/user";

// CustomError interface to handle error messages
interface CustomError {
  name: string;
  message: string;
  code: string;
}

// Signup function component handles the user registration process
export default function Signup() {
  // using the useState hook to manage local state for email, password and error
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<CustomError | null>(null);

  // useAppDispatch hook to dispatch actions
  const dispatch = useAppDispatch();

  // handleSignupSubmit handles form submission for the Signup form
  const handleSignupSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Dispatch the signup action with email and password
      const userSignup = await dispatch(signup({ email, password })).unwrap();

      // Console.log the userSignup for debugging purposes (to be removed in production)
      console.log("userSignup", userSignup);

      // TODO: Redirect to home page on successful signup
    } catch (error: any) {
      // If error occurs, set the error state
      setError(error);
    }
  };

  // Generic input change handler
  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
    };

  return (
    <div>
      <form onSubmit={handleSignupSubmit} name="signup">
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
          <button type="submit">Sign Up</button>
        </div>
        {error && <div> {error.message} </div>}
      </form>
      <a href="http://localhost:8080/auth/google">Sign up with Google</a>
    </div>
  );
}
