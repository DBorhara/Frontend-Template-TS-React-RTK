import { Outlet, Navigate } from "react-router-dom";

// Define interface for ProtectedRouteProps.
// It accepts a boolean prop named 'isLoggedIn'.
interface ProtectedRouteProps {
  isLoggedIn: boolean;
}

// ProtectedRoute component is a wrapper component that checks if the user is logged in.
// This component is meant to be used to protect routes that should only be visible to authenticated users.
export default function ProtectedRoute({ isLoggedIn }: ProtectedRouteProps) {
  // Depending on the authentication status (i.e., the value of isLoggedIn),
  // the component either allows rendering of its child components or redirects the user to the login page.
  return isLoggedIn ? (
    // If the user is logged in, render the component that ProtectedRoute is wrapping (Outlet component).
    // The Outlet component renders whatever matches the remaining part of the URL.
    <Outlet />
  ) : (
    // If the user is not logged in, redirect to the /login route using the Navigate component.
    // The Navigate component is used to declaratively navigate to other routes.
    <Navigate to="/login" />
  );
}
