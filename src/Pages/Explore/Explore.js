import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Grid, CircularProgress } from '@mui/material';
import Navbar from '../HomePage/Navbar/Navbar';
import Product from '../HomePage/ProductsShow/Product';
import axios from 'axios';
import useAuth from '../../Hooks/useAuth';

const Explore = () => {
    const { loading } = useAuth();
    
  




    const [products, setProducts] = useState([{}, {}, {}, {}]);
    useEffect(() => {
        axios.get('https://limitless-springs-61236.herokuapp.com/products').then(data => setProducts(data.data))
    }, []);


    if (loading) {
        
        return (
            <Box sx={{ height: '600px', width: '100vw', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center' }}>
                <CircularProgress size={100} color="secondary" />
            </Box>

        )
    };


    return (

        <>
            <Navbar></Navbar>

            <Container sx={{ my: 5 }}>
                <Box sx={{ my: 5 }}>  <Typography variant='h2' component='div'> Latest Collection</Typography>
                    <Typography variant='h5' component='div'> WHERE ROYAL HAS A MEANING</Typography> </Box>
                <Grid container spacing={5}>

                    {products?.map(data => <Product
                        key={data._id} data={data}> </Product>)}


                </Grid>
            </Container>
        </>
    );
};

export default Explore;