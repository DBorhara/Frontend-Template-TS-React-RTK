import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoute({
  isAuthenticated,
}: {
  isAuthenticated: boolean;
}) {
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
