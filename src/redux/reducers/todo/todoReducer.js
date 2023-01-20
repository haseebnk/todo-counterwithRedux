const initialState = [
    { id: 1, title: "title", content: "hello" }
]

const todoReducer = (state = initialState, action, payload) => {
    // console.log(payload ,"ayaa")
    switch (action.type) {
        case 'Add':
            return [
                ...state,
                {
                    id: Math.random(),
                    title: action.payload.title,
                    content: action.payload.content
                }
            ]
        case 'Remove':
            return state.filter((note) => action.payload !== note.id)


        case 'Update':
            console.log(action, "action")
            console.log(state, "statee")
            return state.map(record => {
                if (action.payload.id === record.id)
                    return action.payload
                else
                    return record
            })

        default:
            return state
    }
}

export default todoReducer