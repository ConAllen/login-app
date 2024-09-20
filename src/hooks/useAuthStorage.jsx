import { useEffect } from "react";
import { ACTION_TYPES } from "../context/Actions";

/**
 * Custom hook to check localStorage for authentication data (JWT token and user)
 * and update the context state accordingly.
 *
 * @param {Function} dispatch - The dispatch function to manage state updates.
 */
export const useAuthStorage = (dispatch) => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    if (token && user) {
      dispatch({ type: ACTION_TYPES.SET_CURRENT_USER, payload: user });
      dispatch({ type: ACTION_TYPES.SET_AUTHENTICATED, payload: true });
    }
  }, [dispatch]);
};
