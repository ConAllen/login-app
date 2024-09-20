import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AppContent from "./containers/AppContent";
import Login from "./containers/Login";
import { AuthContext } from "./context/AuthContext";
import "./styles/style-variables.css";
import "./styles/global.css";
/**
 * Main application component handling routing and authentication.
 * Uses React Router for navigation and redirects based on authentication status.
 *
 * @returns {JSX.Element} The application component with routes.
 */
const App = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />}
        />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <AppContent /> : <Navigate to="/login" />}
        />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
