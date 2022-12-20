import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Stack, Typography } from '@mui/material';
import './OnboardingEmployee.css';
import { API_ROUTES } from '../../../common/API_ROUTES';
import { Employee } from './Employee';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const employeeObj: Employee = {
  "name": "",
  "email": "",
  "age":0,
  "salary": 0,
  "joiningDate": ""
};

export default function OnboardEmployee() {
  const [isValid, setValid] = React.useState(false);
  const [values, setValue] = React.useState<Employee>(employeeObj);
  const navigate = useNavigate();

  let { id } = useParams();
  const isAddMode = !id;

  useEffect(() =>{
    setValue(employeeObj);
    if(id){
      API_ROUTES.GET.FETCH_EMPLOYEE_BY_ID(id).then(res => {
          console.log(res.data);
          setValue(res.data);
        });
    }
  },[id])
  
  const handleOnInputChange = (event: any) => {
    const target = event.target;
    const value =  target.value;
    const name = target.name;
    setValue(oldValues=> ({...oldValues, [name]: value}));
  }

  const handleSubmit = (event: any) => {
    //Save employee.
    API_ROUTES.POST.SAVE_EMPLOYEE(values);
    setValue(employeeObj);
    navigate("/employees");
  }

  const handleCancel = () => {
    navigate("/employees");
  }

  return (

    <Box
      component="form"
      sx={{
        'display':'flex',
        'flexDirection':'column',
        'justifyContent':'center',
        'alignItems':'center',
        'height': '500px',
        '& .MuiTextField-root': { m: 1, width: '25ch' 
      
        },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <Typography>{isAddMode ? 'Register' : 'Edit'} an Employee</Typography>
      </div>
      
      <div className='fullName'>
        <TextField
          fullWidth
          required
          error={isValid}
          id="outlined-error"
          label="Name"
          variant="outlined"
          name="name"
          value={values.name}
          onChange={handleOnInputChange}

        />
      </div>
      <div>
        <TextField
          required
          error={isValid}
          id="filled-error"
          label="Email"
          variant="outlined" 
          name="email"
          value={values.email}
          onChange={handleOnInputChange}
        />
        <TextField
          error={isValid}
          id="filled-error-helper-text"
          label="Age"
          helperText=""
          variant="outlined" 
          name="age"
          value={values.age}
          onChange={handleOnInputChange}
        />
      </div>
      <div>
        <TextField
          error={isValid}
          id="standard-error"
          label="Salary"
          variant="outlined" 
          name="salary"
          value={values.salary}
          onChange={handleOnInputChange}
        />
        <TextField
          error={isValid}
          id="standard-error-helper-text"
          label="Joining Date"
          helperText=""
          variant="outlined" 
          name="joiningDate"
          value={values.joiningDate}
          onChange={handleOnInputChange}
        />
      </div>
      <Stack spacing={2} direction="row">
        {!isAddMode && 
          <Button variant='contained' onClick={handleCancel}>Cancel</Button>
        }
        <Button variant='contained' onClick={handleSubmit}>{isAddMode ? 'Submit' : 'Update'}</Button>
        </Stack>
    </Box>
  );
}