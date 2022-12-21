import { Reducer } from 'redux';
import { Employee } from './Employee';
import { ActionTypes } from './actions/action-types';

export interface EmployeesState {
    data: Employee[];
}


const initialState = {
    data: [],
    loading: true,
    error: ''
  };

export const employeeReducer: Reducer<EmployeesState> = (state:EmployeesState = initialState, action) => {

    console.log(action.payload);
    switch (action.type) {
        
        case "EMPLOYEE_LOADING":
            return {
                ...state,
                loading:true,
                error: '',
            }
        case "EMPLOYEE_LOADING_SUCCESS":
                return {
                    ...state,
                    loading:false,
                    error: '',
                    data: action.data
                }
        case "EMPLOYEE_LOADING_ERROR":
            return {
                ...state,
                loading:false,
                error: action.error,
            }
        case "RETRIEVE_EMPLOYEES":
            return {
                ...state,
                loading:false,
                error: '',
                data: action.payload
            }
        case ActionTypes.DELETE_EMPLOYEE:
            return {
                ...state,
                loading:false,
                data: state.data.filter( (employee) => employee.id != action.data.id)
            }
        default:
            return state
        
    }
}