import React from "react";
import { createAppContainer } from "react-navigation";
import { createSwitchNavigator } from "react-navigation";
import Landing from "./src/pages/Landing";
import Dashboard from "./src/pages/Dashboard";

const navigator = createSwitchNavigator({
    Authenticate: Landing,
    Main: Dashboard,
});

export default createAppContainer(navigator);
