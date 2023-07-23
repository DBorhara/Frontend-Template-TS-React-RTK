import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import AppRoutes from "./AppRoutes";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { me } from "./redux/slices/user";

/**
 * Interface for App component props
 */
interface AppProps {
  isLoggedIn: boolean;
}

/**
 * The main application component.
 *
 * It fetches the user state (by dispatching the 'me' action),
 * checks if the user is logged in, and passes this information down to its children.
 */
function App() {
  const dispatch = useAppDispatch();

  // Fetch the current user data from the state.
  // If the user id exists, isLoggedIn will be true, otherwise it will be false.
  const isLoggedIn: boolean = useAppSelector((state) => !!state.user?.data?.id);

  /**
   * Fetch the current user's data when the component mounts.
   * We do this by dispatching the 'me' action in a useEffect hook.
   * The empty dependency array ensures this only runs once on mount, and not on subsequent rerenders.
   */
  useEffect(() => {
    dispatch(me());
  }, [dispatch]);

  return (
    <div>
      {/* Pass the isLoggedIn prop down to Navbar and AppRoutes */}
      <Navbar isLoggedIn={isLoggedIn} />
      <AppRoutes isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
