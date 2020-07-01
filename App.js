import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import AccountManagement from "./src/pages/AccountManagement";
import Dashboard from "./src/pages/Dashboard";
import Gym from "./src/pages/Gym";
import Diet from "./src/pages/Diet";

const navigator = createSwitchNavigator(
    {
        AccountManagement: AccountManagement,
        Main: Dashboard,
        Gym: Gym,
        Diet: Diet,
    },
    {
        initialRouteName: "AccountManagement",
    }
);

const App = createAppContainer(navigator);

export default () => {
    return <App />;
};
