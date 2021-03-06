import React from 'react';
import {NavLink,} from "react-router-dom"
import {Grid,Box, Typography, Divider, Button } from '@mui/material';


const Product = ({ data }) => {
    const { name, price, photoURL, _id } = data;
      const dynamicURL=`/home/placeorder/${_id}`

    return (
        <Grid item xs={12} sm={12} md={4} >
            <Box style={{backgroundColor:'#e4f0e6', padding:'20px'}}  >
                <img style={{ width: '100%' }} src={photoURL} alt={`just pic`} />
                <Divider sx={{pt:3}} ></Divider>
                <Typography  align='center' sx={{p:3}} varinat='caption' component='div'> {name}</Typography>
                <Box sx={{display:'flex',justifyContent: 'space-between'}}>
                    <Typography variant='h4' component='div'> {price} <span>$</span></Typography>
                    <Button     variant ='contained'> <NavLink to={dynamicURL}> are bhai now</NavLink></Button>
                </Box>
               
            </Box>


        </Grid>
    );
};

export default Product;