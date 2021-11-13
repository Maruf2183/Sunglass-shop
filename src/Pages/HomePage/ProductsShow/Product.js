import React from 'react';
import {Grid,Box, Typography, Divider, Button } from '@mui/material';

const Product = ({ data }) => {
    const {name, price } = data;
    return (
        <Grid item xs={12} sm={12} md={4} >
            <Box style={{backgroundColor:'#e4f0e6', padding:'20px'}}  >
                <img style={{ width: '100%' }} src='https://i.ibb.co/ysM3MH6/angus-gray-b-Sjqyquk-Cj-Y-unsplash.png' alt={`just pic`} />
                <Divider sx={{pt:3}} ></Divider>
                <Typography  align='center' sx={{p:3}} varinat='caption' component='div'> {name}</Typography>
                <Box sx={{display:'flex',justifyContent: 'space-between'}}>
                    <Typography variant='h4' component='div'> {price} <span>$</span></Typography>
                    <Button variant ='contained'> Buy Now </Button>
                </Box>
               
            </Box>


        </Grid>
    );
};

export default Product;