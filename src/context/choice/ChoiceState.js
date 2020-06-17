import React, { useReducer } from "react";
import choiceContext from "./choiceContext";
import choiceReducer from "./choiceReducer";

const ChoiceState = (props) => {
    const initialState = {
        wine: "",
        pax: "",
        cheese: "",
    };
    const [state, dispatch] = useReducer(choiceReducer, initialState);

    const updateChoices = (input) => {
        dispatch({ type: "update_choice", payload: input });
    };
    return (
        <choiceContext.Provider
            value={{
                wine: state.wine,
                pax: state.pax,
                cheese: state.cheese,
                updateChoices,
            }}
        >
            {props.children}
        </choiceContext.Provider>
    );
};

export default ChoiceState;
