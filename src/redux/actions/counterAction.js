const incrementDecrementValueAction = (actions) => {
    switch (actions) {
        case 'increment':
            return { type: 'increment' }
        case 'decrement':
            return { type: 'decrement' }
    }
}
const setCustomValueAction = (text) => {
    return { type: 'changeValue', payload: text }
}

// const addTodoAction =()=>{
//     switch()
// }

export { incrementDecrementValueAction, setCustomValueAction }