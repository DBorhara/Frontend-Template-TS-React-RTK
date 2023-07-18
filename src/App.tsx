import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AppRoutes from "./AppRoutes";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { me } from "./redux/slices/user";

function App() {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => !!state.user?.data?.id);

  useEffect(() => {
    const fetchMe = () => {
      dispatch(me());
    };
    fetchMe();
  }, []);

  console.log("isLoggedIn", isLoggedIn);
  return (
    <div>
      <Navbar isAuthenticated={isLoggedIn} />
      <AppRoutes isAuthenticated={isLoggedIn} />
    </div>
  );
}

export default App;
