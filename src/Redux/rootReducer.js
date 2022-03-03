import { combineReducers } from "redux";
import CSharpReducer from './CSharp/CSharpReducer';
import React_Reudcer  from "./React/React_Reducer";
import PHP_Reudcer from './PHP/PHP_Reducer';
const rootReducer = combineReducers({
   CSharp_Call_Reducer: CSharpReducer,
   React_Call_Reducer:React_Reudcer,
   PHP_Call_Reducer:PHP_Reudcer
});
export default rootReducer;