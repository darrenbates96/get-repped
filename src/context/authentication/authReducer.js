import { ActionSheetIOS, AsyncStorage } from "react-native";

export default (state, action) => {
    switch (action.type) {
        case "ATTEMPT_LOGIN":
            return { ...state, attemptingLogin: true };
        case "AUTHENTICATION_SUCCESS":
            return { ...state, isLoggedIn: action.payload };
        default:
            return state;
    }
};
