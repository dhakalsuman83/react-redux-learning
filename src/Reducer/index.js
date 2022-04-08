import { combineReducers } from "redux";
import counterReducer from "./Counter";
import loggedReducer from "./isLogged";

const allReducer = combineReducers({
  count: counterReducer,
  isLogged: loggedReducer,
});

export default allReducer;
