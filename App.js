import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import AuthState from "./src/context/authentication/AuthState";
import AccountManagement from "./src/pages/AccountManagement";
import BottomNavigation from "./src/components/BottomNavigation";

const navigator = createSwitchNavigator(
    {
        AccountManagement: AccountManagement,
        Main: BottomNavigation,
    },
    {
        initialRouteName: "AccountManagement",
    }
);

const App = createAppContainer(navigator);

export default () => {
    return (
        <AuthState>
            <App />
        </AuthState>
    );
};
