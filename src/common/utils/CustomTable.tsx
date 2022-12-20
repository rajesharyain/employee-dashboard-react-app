import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { API_ROUTES } from '../API_ROUTES';

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

interface CustomTableProperty {
    rows:any[];
    cols:any[];
}
export default function CustomTable(props:CustomTableProperty) {

    const { rows, cols } = props;
    const navigate = useNavigate();

    const handleDelete = (id:any) => {
      console.log("id", id)

      API_ROUTES.DELETE.DELETE_EMPLOYEE(id).then(res => {
        navigate("/employees");
    
      });
    }
    
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
              {cols.map( (item) => 
                <StyledTableCell>{item.headerName}</StyledTableCell>
              )}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {index+1}
              </StyledTableCell>
              <StyledTableCell >{row.name}</StyledTableCell>
              <StyledTableCell >{row.email}</StyledTableCell>
              <StyledTableCell >{row.age}</StyledTableCell>
              <StyledTableCell >{row.salary}</StyledTableCell>
              <StyledTableCell >{row.joiningDate}</StyledTableCell>
              <StyledTableCell >

                <Stack spacing={2} direction="row">
                <Button variant="contained" color='primary' onClick={() => navigate("/employees/"+row.id)}>Edit</Button>
                <Button variant="contained" color='error' onClick={() => handleDelete(row.id)}>Delete</Button>
                </Stack>

              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
