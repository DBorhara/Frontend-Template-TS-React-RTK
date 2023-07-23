import { Outlet, Navigate } from "react-router-dom";

// Define interface for PrivateRouteProps.
// It accepts a boolean prop named 'isLoggedIn'.
interface PrivateRouteProps {
  isLoggedIn: boolean;
}

// PrivateRoute component that checks if the user is logged in.
// If the user is logged in, render the component that PrivateRoute is wrapping (Outlet component),
// otherwise redirect the user to the /login route.
export default function PrivateRoute({ isLoggedIn }: PrivateRouteProps) {
  return isLoggedIn ? (
    <Outlet /> // If logged in, render the child components (i.e., render the outlet)
  ) : (
    <Navigate to="/login" />
  ); // If not logged in, redirect to login page
}
