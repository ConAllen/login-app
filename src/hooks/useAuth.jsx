import { useCallback } from "react";
import { ACTION_TYPES } from "../context/Actions";
import { MOCKED_JWT_TOKEN } from "../constants";

/**
 * Custom hook to handle authentication logic, including login and logout functionality.
 * It manages state changes using the provided dispatch function, handles storing authentication data,
 * and provides methods to log in and log out.
 *
 * @param {Function} dispatch - The dispatch function from the AuthContext to manage state changes.
 * @param {Array} users - The list of users to validate against during login.
 *
 * @returns {Object} An object containing the `login` and `logout` functions.
 */
export const useAuth = (dispatch, users) => {
  const saveAuthToStorage = useCallback((user, token) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  }, []);

  const removeAuthFromStorage = useCallback(() => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }, []);

  const login = useCallback(
    (email, password) => {
      dispatch({ type: ACTION_TYPES.SET_AUTH_LOADING, payload: true });

      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        const token = MOCKED_JWT_TOKEN; // Replace with actual token from the server
        saveAuthToStorage(user, token);
        dispatch({ type: ACTION_TYPES.SET_CURRENT_USER, payload: user });
        dispatch({ type: ACTION_TYPES.SET_AUTHENTICATED, payload: true });
      } else {
        dispatch({
          type: ACTION_TYPES.SET_AUTH_ERROR,
          payload: "Invalid credentials",
        });
      }

      dispatch({ type: ACTION_TYPES.SET_AUTH_LOADING, payload: false });
      return !!user;
    },
    [users, saveAuthToStorage, dispatch]
  );

  const logout = useCallback(() => {
    removeAuthFromStorage();
    dispatch({ type: ACTION_TYPES.LOGOUT });
  }, [removeAuthFromStorage, dispatch]);

  return { login, logout };
};
