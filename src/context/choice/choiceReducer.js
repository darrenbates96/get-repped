export default (state, action) => {
    switch (action.type) {
        case "update_choice":
            console.log(action.payload);
            return {
                ...state,
                wine: action.payload.Wine,
                pax: action.payload.Pax,
                cheese: action.payload.Cheese,
            };
        default:
            return state;
    }
};
