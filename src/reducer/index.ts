import { combineReducers } from "redux";
import { employeeReducer } from "../components/pages/onboarding/reducer";

export const appReducers = combineReducers(
    {
        employeeData: employeeReducer
    }
)