import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './common/Layout';
import Home from './components/pages/home/Home';
import Dashboard from './components/pages/dashboard/Dashboard';
import NoMatch from './common/NoMatch';
import OnboardEmployee from './components/pages/onboarding/OnboardEmployee';
import EmployeeList from './components/pages/onboarding/EmployeeList';


function App() {
  return (
     <Routes>
        <Route  path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="employees" element={<EmployeeList />} />
          <Route path="employees/:id" element={<OnboardEmployee />} />
          <Route path="register" element= {<OnboardEmployee />} />
          <Route path="*" element={<NoMatch />} />
        </Route>  
     </Routes>
  );
}

export default App;
