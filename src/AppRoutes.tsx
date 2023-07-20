import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import UserHome from "./pages/UserHome";

export default function AppRoutes({ isLoggedIn }: { isLoggedIn: boolean }) {
  return (
    <Routes>
      {/*Public Routes go here*/}
      <Route path="/" />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/*Protected Routes go here*/}
      <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
        <Route path="/home" element={<UserHome />} />
      </Route>
    </Routes>
  );
}
