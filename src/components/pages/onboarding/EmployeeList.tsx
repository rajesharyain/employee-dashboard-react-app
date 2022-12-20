import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import Grid from "../../../common/utils/Grid";
import { Box } from '@mui/material';
import { Employee } from "./Employee";
import { useEffect, useState } from "react";
import { API_ROUTES } from '../../../common/API_ROUTES';
import CustomTable from '../../../common/utils/CustomTable';
import Loader from '../../../common/utils/Loader';

const EmployeeList = () => {

    const [data, setData] = useState<Employee[]>();
    useEffect(() => {
        //Runs only on the first render
        API_ROUTES.GET.FETCH_EMPLOYEES().then(res => {
            console.log(res.data);
             setData(res.data);
            });
      }, []);
      

    const cols: GridColDef[] = [
       
        { field: 'id', headerName: 'ID', width: 50 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'email', headerName: 'Email', width: 130 },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 90,
        },
        {
          field: 'salary',
          headerName: 'Salary',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
         
        },
        {
            field: 'joiningDate',
            headerName: 'Joining Date',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
           
          },
          {
              field: 'action',
              headerName: 'Action',
              sortable: false,
              width: 200
          }
      ];

    return (
        <div style={{ height: 600, width: '100%' }}>
              {/*   {data?.map((item) => <li key={item.email}>{item.name}, {item.email}, {item.age}</li>)} */}
            {data ? 
                
                <CustomTable
                        cols={cols}
                        rows={data}
                        />
        : <Loader />}
        </div>
    )

}
export default EmployeeList;