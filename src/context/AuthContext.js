import React, {
  createContext,
  useReducer,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import { ACTION_TYPES } from "./Actions";
import { initialState } from "./InitialState";
import { authReducer } from "./AuthReducer";
import { useFetchUsers } from "../hooks/useFetchUsers";
import { useAuth } from "../hooks/useAuth";
import { useAuthStorage } from "../hooks/useAuthStorage"; // New custom hook for handling storage

export const AuthContext = createContext();

/**
 * AuthProvider component provides authentication context to its children.
 * It manages the authentication state, user data, and handles login, logout, and user fetching.
 *
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - Child components that will receive the authentication context.
 *
 * @returns {JSX.Element} The provider component that wraps its children with AuthContext.
 */
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const { auth, users } = state;
  const {
    isAuthenticated,
    currentUser,
    isLoading: isAuthLoading,
    error: authError,
  } = auth;
  const {
    data: userList,
    isLoading: isUsersLoading,
    error: usersError,
  } = users;

  // Custom hook to fetch current user from localStorage
  useAuthStorage(dispatch);

  // Custom hook to fetch users and manage user list
  useFetchUsers(dispatch, userList);

  // Custom hook to manage login and logout functionality
  const { login, logout } = useAuth(dispatch, userList);

  // Memoized value for AuthContext to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      isAuthenticated,
      currentUser,
      userList,
      login,
      logout,
      isAuthLoading,
      authError,
      isUsersLoading,
      usersError,
      dispatch,
    }),
    [
      isAuthenticated,
      currentUser,
      userList,
      login,
      logout,
      isAuthLoading,
      authError,
      isUsersLoading,
      usersError,
      dispatch,
    ]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
