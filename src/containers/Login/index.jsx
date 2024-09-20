import React, { useContext } from "react";
import LoginForm from "../../components/LoginForm";
import { AuthContext } from "../../context/AuthContext";
import style from "./index.module.css";
import { ACTION_TYPES } from "../../context/Actions";
import { PASSWORD_AND_EMAIL_ERROR } from "../../constants";
import { useNavigate } from "react-router-dom";

/**
 * Login component handles the login functionality. It submits the user's email and password
 * through the `login` function from `AuthContext`, and upon success, navigates to the dashboard.
 * Displays an error if authentication fails.
 * It also provides the ability to clear the error state when necessary.
 *
 * @returns {JSX.Element} The rendered login form component.
 */
const Login = () => {
  const { login, authError, dispatch, isAuthLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (email, password) => {
    dispatch({ type: ACTION_TYPES.SET_AUTH_ERROR, payload: null });

    try {
      dispatch({ type: ACTION_TYPES.SET_AUTH_LOADING, payload: true });

      const success = await login(email, password);
      if (success) {
        navigate("/dashboard");
      } else {
        dispatch({
          type: ACTION_TYPES.SET_AUTH_ERROR,
          payload: PASSWORD_AND_EMAIL_ERROR,
        });
      }
    } catch (err) {
      // Handle unexpected errors here
      dispatch({
        type: ACTION_TYPES.SET_AUTH_ERROR,
        payload: PASSWORD_AND_EMAIL_ERROR,
      });
    } finally {
      dispatch({ type: ACTION_TYPES.SET_AUTH_LOADING, payload: false });
    }
  };

  const clearError = () => {
    if (authError) {
      dispatch({ type: ACTION_TYPES.SET_AUTH_ERROR, payload: null });
    }
  };

  return (
    <div className={style.loginContainer}>
      <LoginForm
        handleSubmit={handleSubmit}
        error={authError}
        clearError={clearError}
        isLoading={isAuthLoading}
      />
    </div>
  );
};

export default Login;
