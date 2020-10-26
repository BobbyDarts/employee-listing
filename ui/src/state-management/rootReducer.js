import { combineReducers } from "redux";
import employeeReducer from "./features/employee/employeeSlice";

const rootReducer = combineReducers({
  employee: employeeReducer,
});

export default rootReducer;
