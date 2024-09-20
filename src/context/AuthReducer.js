import { ACTION_TYPES } from "./Actions";
import { initialState } from "./InitialState";

/**
 * Reducer function to manage the authentication and user state within the AuthContext.
 * It handles actions like setting authentication status, current user, loading state,
 * error handling, user fetching, and logout.
 *
 * @param {Object} state - The current state of the application.
 * @param {Object} action - The action dispatched to the reducer.
 * @param {string} action.type - The type of action to be handled by the reducer.
 * @param {any} action.payload - The data associated with the action (e.g., user, authentication status, etc.).
 *
 * @returns {Object} The updated state after applying the action.
 */

export const authReducer = (state, action) => {
  switch (action.type) {
    // Authentication-related actions
    case ACTION_TYPES.SET_AUTHENTICATED:
      return {
        ...state,
        auth: { ...state.auth, isAuthenticated: action.payload },
      };
    case ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        auth: { ...state.auth, currentUser: action.payload },
      };
    case ACTION_TYPES.SET_AUTH_LOADING:
      return {
        ...state,
        auth: { ...state.auth, isLoading: action.payload },
      };
    case ACTION_TYPES.SET_AUTH_ERROR:
      return {
        ...state,
        auth: { ...state.auth, error: action.payload },
      };

    // User-related actions
    case ACTION_TYPES.SET_USERS:
      return {
        ...state,
        users: { ...state.users, data: action.payload },
      };
    case ACTION_TYPES.SET_USERS_LOADING:
      return {
        ...state,
        users: { ...state.users, isLoading: action.payload },
      };
    case ACTION_TYPES.SET_USERS_ERROR:
      return {
        ...state,
        users: { ...state.users, error: action.payload },
      };

    // Logout action
    case ACTION_TYPES.LOGOUT:
      return { ...initialState };

    default:
      return state;
  }
};
