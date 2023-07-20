import { Outlet, Navigate } from "react-router-dom";

interface PrivateRouteProps {
  isLoggedIn: boolean;
}

export default function PrivateRoute({ isLoggedIn }: PrivateRouteProps) {
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}
