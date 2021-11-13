import { Typography, Box, Button } from '@mui/material';
import './Banner.css'

import React from 'react';
import { NavLink } from 'react-router-dom';


const Banner = () => {
    




    return (
        <Box className='banner'>
            
            
            <Box className='banner-text' >
                <Typography  sx={{ color: '#F4F6F7', }} variant='h4'> WELCOME TO OUR EYEHOUSE</Typography>
                <Typography sx={{ color: '#F4F6F7', my: 3 }} variant='h4'> We Provide all the best glasses for you</Typography>
                <Button  variant='contained'> <NavLink style={{textDecoration:'none',color:'white'}} to='/explore'> Explore Now</NavLink> </Button>


            </Box>

        </Box>
    );
};

export default Banner;