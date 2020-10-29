function reducer(state, action) {
    switch (action.type) {
        case "INCREASE_COUNTER":
            state.counter = state.counter + 1;
            return { ...state }

        case "DECREASE_COUNTER":
            state.counter = state.counter - 1;
            return { ...state }

        case "SET_USERNAME":
            console.log(action);
            state.userName = action.newUserName
            console.log(action);
            return { ...state }

        default:
            return state;
    }
}

export { reducer };