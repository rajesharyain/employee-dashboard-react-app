import * as React from 'react';
import { Box } from '@mui/material';
import AppHeader from './AppHeader';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <Box mt={2}>
            <AppHeader></AppHeader>
            <Outlet />
       </Box>
    )
   
}
export default Layout;