import { API_ROUTES } from '../../../../common/API_ROUTES';
import {
  ActionTypes,
} from './action-types';

/* 
export const fetchEmployees = () => async (dispatch) => {
    try {
      await API_ROUTES.GET.FETCH_EMPLOYEES().then(res => {
        dispatch(fetchEmployeesAction(res.data));
      }).catch(err => {
        dispatch({
            type: "ERROR",
            payload: err
        })
        console.log("Err:::", err);
      })
     
      
    } catch (err) {
      console.log(err);
      dispatch({
        type: "ERROR",
        payload: err
    })
    }
  }; */
  
  export const fetchEmployees = () => (dispatch)=>{
   
    dispatch({type: ActionTypes.EMPLOYEE_LOADING})
    API_ROUTES.GET.FETCH_EMPLOYEES().then(
      res => dispatch({type: ActionTypes.EMPLOYEE_LOADING_SUCCESS, data: res.data}),
      err => dispatch({type: ActionTypes.EMPLOYEE_LOADING_ERROR, error: err})
    );
  }


export const deleteEmployee = (id:any) => (dispatch)=>{
    dispatch({type: ActionTypes.EMPLOYEE_LOADING})
    API_ROUTES.DELETE.DELETE_EMPLOYEE(id).then(
      res => dispatch({type: ActionTypes.DELETE_EMPLOYEE, data: {id}}),
      err => dispatch({type: ActionTypes.EMPLOYEE_LOADING_ERROR, error: err})
    );
    

    dispatch({
      type: ActionTypes.DELETE_EMPLOYEE,
      data: id
    });

  }
  