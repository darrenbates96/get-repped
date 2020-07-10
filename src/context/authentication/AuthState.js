import React, { useReducer } from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";

const AuthState = (props) => {
    const initialState = {
        attemptingLogin: false,
        isLoggedIn: "",
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    // State manipulation functions

    // This function exists solely to manipulate the UI
    const attemptLogin = () => {
        dispatch({ type: "ATTEMPT_LOGIN" });
    };

    // This function should be called upon successful
    // authentication with firebase. UID will be stored
    // in context for if interactions with firebase need to
    // take place further along in the customer journey
    const authSuccess = (uid) => {
        dispatch({ type: "AUTHENTICATION_SUCCESS", payload: uid });
    };

    return (
        <authContext.Provider
            value={{
                attemptingLogin: state.attemptingLogin,
                isLoggedIn: state.isLoggedIn,
                attemptLogin,
                authSuccess,
            }}
        >
            {props.children}
        </authContext.Provider>
    );
};

export default AuthState;
