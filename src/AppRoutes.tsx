import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import { useAppDispatch } from "./redux/hooks";
import { me } from "./redux/slices/user";
import UserHome from "./pages/UserHome";

export default function AppRoutes({
  isAuthenticated,
}: {
  isAuthenticated: boolean;
}) {
  return (
    <Routes>
      {/*Public Routes go here*/}
      <Route path="/" />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/*Protected Routes go here*/}
      <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
        <Route path="/home" element={<UserHome />} />
      </Route>
    </Routes>
  );
}
