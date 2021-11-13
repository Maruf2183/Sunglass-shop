import { CircularProgress, Box } from '@mui/material';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';


const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();



    if (loading) {

        return (
            <Box sx={{ height:'600px',width:'100vw',display:'flex',alignItems:'center',justifyItems:'center',justifyContent:'center' }}>
                <CircularProgress size={100} color="secondary" />
            </Box>

        )
    }

    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }

                }}


            ></Redirect>}



        >

        </Route>
    );
};

export default PrivateRoute;