import React from "react";
import { createAppContainer } from "react-navigation";
import { createSwitchNavigator } from "react-navigation";
import AccountManagement from "./src/pages/AccountManagement";
import Dashboard from "./src/pages/Dashboard";

const navigator = createSwitchNavigator({
    AccountManagement: AccountManagement,
    Main: Dashboard,
});

const App = createAppContainer(navigator);

export default () => {
    return <App />;
};
