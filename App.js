import React from "react";
import { createAppContainer } from "react-navigation";
import { createSwitchNavigator } from "react-navigation";
import Welcome from "./src/pages/Welcome";
import HowItWorks from "./src/pages/HowItWorks";
import GetStarted from "./src/pages/GetStarted";
import Dashboard from "./src/pages/Dashboard";
import ChoiceState from "./src/context/choice/ChoiceState";

const navigator = createSwitchNavigator({
    Onboarding: createSwitchNavigator({
        welcome: Welcome,
        howitworks: HowItWorks,
        getstarted: GetStarted,
    }),
    Main: Dashboard,
});

const App = createAppContainer(navigator);

export default () => {
    return (
        <ChoiceState>
            <App />
        </ChoiceState>
    );
};
