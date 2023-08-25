import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ProtectedRoute from './components/Auth/ProtectedRoute'
import UserHome from './pages/UserHome'
import PageNotFound from './pages/PageNotFound'
import Landing from './pages/Landing'

/**
 * Interface for AppRoutes component props
 */
interface AppRoutesProps {
  isLoggedIn: boolean
}

/**
 * AppRoutes component.
 *
 * Defines the routing for the app. Includes both public routes (accessible to all users)
 * and protected routes (only accessible to logged-in users).
 *
 * @param {AppRoutesProps} props - The props that define whether the user is logged in.
 */
const AppRoutes: React.FC<AppRoutesProps> = ({ isLoggedIn }) => {
  return (
    <Routes>
      {/* Public Routes */}
      {/* The root path is left empty. Consider redirecting it to a landing or login page. */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected Routes */}
      {/* They are wrapped in a ProtectedRoute component that checks if the user is logged in. */}
      <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
        <Route path="/home" element={<UserHome />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default AppRoutes
