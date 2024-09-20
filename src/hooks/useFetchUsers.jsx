import { useEffect } from "react";
import { fetchAllUsers } from "../api/api";
import { ACTION_TYPES } from "../context/Actions";
import { FAILED_TO_FETCH_USERS } from "../constants";

/**
 * Custom hook to fetch users from the API and dispatch the results to the state.
 * It only triggers the fetch when the users array is empty to avoid unnecessary requests.
 *
 * @param {Function} dispatch - The dispatch function from the context to handle state updates.
 * @param {Array} users - The current list of users, used to determine if fetching is necessary.
 */
export const useFetchUsers = (dispatch, users) => {
  useEffect(() => {
    if (users.length === 0) {
      const loadUsers = async () => {
        dispatch({ type: ACTION_TYPES.SET_USERS_LOADING, payload: true });
        try {
          const fetchedUsers = await fetchAllUsers();
          dispatch({ type: ACTION_TYPES.SET_USERS, payload: fetchedUsers });
        } catch (err) {
          dispatch({
            type: ACTION_TYPES.SET_USERS_ERROR,
            payload: FAILED_TO_FETCH_USERS,
          });
        } finally {
          dispatch({ type: ACTION_TYPES.SET_USERS_LOADING, payload: false });
        }
      };

      loadUsers();
    }
  }, [users.length, dispatch]);
};
