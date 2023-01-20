const initialState = {
    count: 1,
    changeVal: '1',
}

const counterReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'increment':
            return {
                ...state,
                count: state.count + parseInt(state.changeVal)
            };
        case 'decrement':
            return {
                ...state,
                count: state.count - parseInt(state.changeVal)
            };

        case 'changeValue':
            return {
                ...state,
                changeVal: action.payload
            };

        default:
            return state
    }
}

// counterReducer({type:"increment"})
// counterReducer({type:"decrement"})


export default counterReducer