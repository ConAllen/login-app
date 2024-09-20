/**
 * initialState defines the default state for the authentication and user context.
 *
 * @constant {Object} initialState - The default state for the authentication context.
 * @property {Object} auth - State related to authentication.
 * @property {boolean} auth.isAuthenticated - Whether the user is authenticated or not (default: false).
 * @property {Object|null} auth.currentUser - The currently logged-in user object (default: null).
 * @property {boolean} auth.isLoading - Whether the authentication process is in progress (default: false).
 * @property {string|null} auth.error - Any error messages related to authentication (default: null).
 * @property {Object} users - State related to user data fetching.
 * @property {Array} users.data - The list of all users fetched from the API (default: []).
 * @property {boolean} users.isLoading - Whether the user fetching process is in progress (default: false).
 * @property {string|null} users.error - Any error messages related to user fetching (default: null).
 */

export const initialState = {
  auth: {
    isAuthenticated: false,
    currentUser: null,
    isLoading: false,
    error: null,
  },
  users: {
    data: [],
    isLoading: false,
    error: null,
  },
};
