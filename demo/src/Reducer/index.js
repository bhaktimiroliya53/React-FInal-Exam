import { combineReducers } from "redux";
import curdReducer from "./CrudReducer";

const rootReducer = combineReducers({
    crud : curdReducer
})

export default rootReducer;