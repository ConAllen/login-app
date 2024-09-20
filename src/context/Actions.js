/**
 * ACTION_TYPES contains the different action types used by the reducer in AuthContext.
 * These actions help manage the state of authentication, current user, users list, loading state, and error handling.
 *
 * @constant {Object} ACTION_TYPES - An object holding different action types as string constants.
 * @property {string} SET_AUTHENTICATED - Action type to set the authentication state.
 * @property {string} SET_CURRENT_USER - Action type to set the current user data.
 * @property {string} SET_AUTH_LOADING - Action type to set the loading state for authentication.
 * @property {string} SET_AUTH_ERROR - Action type to set or clear authentication-related error messages.
 * @property {string} LOGOUT - Action type to log out the current user and reset the authentication state.
 * @property {string} SET_USERS - Action type to set the list of users.
 * @property {string} SET_USERS_LOADING - Action type to set the loading state for fetching users.
 * @property {string} SET_USERS_ERROR - Action type to set or clear user-related error messages.
 */

export const ACTION_TYPES = {
  // Authentication-related actions
  SET_AUTHENTICATED: "SET_AUTHENTICATED",
  SET_CURRENT_USER: "SET_CURRENT_USER",
  SET_AUTH_LOADING: "SET_AUTH_LOADING",
  SET_AUTH_ERROR: "SET_AUTH_ERROR",
  LOGOUT: "LOGOUT",

  // User-related actions
  SET_USERS: "SET_USERS",
  SET_USERS_LOADING: "SET_USERS_LOADING",
  SET_USERS_ERROR: "SET_USERS_ERROR",
};
