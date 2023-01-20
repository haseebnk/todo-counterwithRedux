import { combineReducers } from "redux";
// imported reducers we make
import counterReducer from "./counter/counterReducer";
import userReducer from "./user/userReducer";
import todoReducer from "./todo/todoReducer";
const rootReducer = combineReducers({
    counter : counterReducer,
    user : userReducer,
    todo : todoReducer
})
export default rootReducer

