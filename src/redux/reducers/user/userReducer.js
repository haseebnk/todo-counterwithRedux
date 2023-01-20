
const initialState = {
    uid: '1',
    userName: "haseeb",
    userData: [],
    isUserLogin: true,
}

const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'setId':
            return {
                ...state,
                uid: action.id
            }
        case 'setName':
            return {
                ...state,
                userName: action.uname
            }
        case 'setData':
            return {
                ...state,
                uid: action.data.uid,
                userName: action.data.userName,
            }
        case 'setIsUserLogin':
            return {
                ...state,
                isUserLogin:action.isUserAuthenicate
            }
        default :
        return state
    }
}

// userReducer({ type: 'setId', id: 1 })
// userReducer({ type: 'setName' , uname :'haseeb' })
// userReducer({ type: 'setData', data: { uid: '1', userName: 'haseeb' } })
// userReducer({ type: 'setIsUserLogin' , isUserAuthenicate:true})



export default userReducer