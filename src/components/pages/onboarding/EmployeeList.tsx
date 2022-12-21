import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import Grid from "../../../common/utils/Grid";
import { Box, Button, Paper, Stack, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material';
import { Employee } from "./Employee";
import { useEffect, useState } from "react";
import { API_ROUTES } from '../../../common/API_ROUTES';
import CustomTable from '../../../common/utils/CustomTable';
import Loader from '../../../common/utils/Loader';
import { connect, useSelector } from "react-redux";
import { fetchEmployees, deleteEmployee } from './actions/action-creators';
import { useNavigate } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



const EmployeeList = ({ fetchEmployees, deleteEmployee, loading, data, error }) => {

  const navigate = useNavigate();

  const handleDelete = (id: any) => {

    console.log("id",id);
    deleteEmployee(id);
    navigate("/employees");
    /* console.log("id", id)

    API_ROUTES.DELETE.DELETE_EMPLOYEE(id).then(res => {
      navigate("/employees");

    }); */
  }
  //const [data, setData] = useState<Employee[]>();
  useEffect(() => {
    fetchEmployees()
    //console.log("employeesData", employeeData);
    //employeeData.loading ? setData(employeeData?.employees) : setData([]);
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
     
      {!loading ?

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                {cols.map((item) =>
                  <StyledTableCell key={item.field} >{item.headerName}</StyledTableCell>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell >{row.name}</StyledTableCell>
                  <StyledTableCell >{row.email}</StyledTableCell>
                  <StyledTableCell >{row.age}</StyledTableCell>
                  <StyledTableCell >{row.salary}</StyledTableCell>
                  <StyledTableCell >{row.joiningDate}</StyledTableCell>
                  <StyledTableCell >

                    <Stack spacing={2} direction="row">
                      <Button variant="contained" color='primary' onClick={() => navigate("/employees/" + row.id)}>Edit</Button>
                      <Button variant="contained" color='error' onClick={() => handleDelete(row.id)}>Delete</Button>
                    </Stack>

                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        : <Loader />}
    </div>
  )

}


const mapStateToProps = state => ({
  data: state.employeeData.data,
  loading: state.employeeData.loading,
  error: state.employeeData.error,
});

/*
const mapStateToProps = (state: { employees: any; }) => 
  { 
   return  employees: state.employees }
  }
*/


const mapDispatchToProps = {
  fetchEmployees,
  deleteEmployee
}
/*
const mapDispatchToProps = (dispatch) => {
  return {
    fetchEmployees: () => dispatch(fetchEmployees()),
    deleteEmployee: (id: any) => dispatch(deleteEmployee(id))
  }
}
*/


export default connect(mapStateToProps,
  mapDispatchToProps
)(EmployeeList);
//export default EmployeeList;