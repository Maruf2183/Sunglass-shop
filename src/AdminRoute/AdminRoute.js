import { CircularProgress, Box } from '@mui/material';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';


const AdminRoute = ({ children, ...rest }) => {
    const { admin,loading,user} = useAuth();



    if (loading) {

        return (
            <Box sx={{ height:'600px',width:'100vw',display:'flex',alignItems:'center',justifyItems:'center',justifyContent:'center' }}>
                <CircularProgress size={100} color="secondary" />
            </Box>

        )
    };
console.log(admin,user.email);
    return (
        <Route
            {...rest}
            render={({ location }) => admin && user.email? children : <Redirect
                to={{
                    pathname: "/home",
                    state: { from: location }

                }}


            ></Redirect>}



        >

        </Route>
    );
};

export default AdminRoute;