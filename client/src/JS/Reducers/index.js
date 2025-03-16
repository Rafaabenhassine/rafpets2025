import { combineReducers } from "redux";
import ListReducer from './ProductReducer';
import userReducer from "./userReducer";


const rootReducer=combineReducers({ListReducer,userReducer})
export default rootReducer