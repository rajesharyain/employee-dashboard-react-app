import { get, post, http_delete } from '../api';

export const API_ROUTES = {

    GET:{
        FETCH_EMPLOYEES :() => get('/api/employees'),
        FETCH_EMPLOYEE_BY_ID : (id:any) => get(`/api/employee/${id}`)
    },
    POST:{
        SAVE_EMPLOYEE : (data: any) => post('/api/employee', data)
    },
    DELETE: {
        DELETE_EMPLOYEE: (id:any) => http_delete(`/api/employee/${id}`)
    }
}