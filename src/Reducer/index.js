import { combineReducers } from "redux";
import Crud from "./CrudReducer";


const root = combineReducers({
    crud : Crud 
})

export default root