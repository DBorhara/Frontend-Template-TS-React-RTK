import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AppRoutes from "./AppRoutes";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { me } from "./redux/slices/user";

interface AppProps {
  isLoggedIn: boolean;
}

function App() {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(
    (state) => !!state.user?.data?.id
  ) as AppProps["isLoggedIn"];

  useEffect(() => {
    const fetchMe = async () => {
      await dispatch(me());
    };
    fetchMe();
  }, [dispatch]);

  // console.log("isLoggedIn", isLoggedIn);
  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} />
      <AppRoutes isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
