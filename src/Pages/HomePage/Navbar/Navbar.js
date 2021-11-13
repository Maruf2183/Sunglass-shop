import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { Button } from '@mui/material';




const Navbar = () => {
  const { logOUt, user } = useAuth();
   console.log(user);
  return (
    <Box  sx={{ flexGrow: 1,textAlign: 'center' }}>
    <AppBar position="static">
      <Toolbar>
          <img src={'/home'} alt={`this is just`}/>
          
          <Typography to='/dashboard' variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {
          user?.email?  <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/dashboard' >  Dashboard </NavLink>
                : 
              <h3> WELCOME</h3>
           }
        </Typography>
       
          {user?.email? <Button variant='contained' onClick={logOUt} >Log out</Button>
            :

            <NavLink to='/login' style={{ textDecoration: 'none', color: 'white' }} >Login</NavLink>
            }
          

      </Toolbar>
    </AppBar>
  </Box>
    
      
     

  
  );
};

export default Navbar;