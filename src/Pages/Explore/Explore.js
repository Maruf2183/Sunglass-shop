import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import Navbar from '../HomePage/Navbar/Navbar';
import Product from '../HomePage/ProductsShow/Product';
import axios from 'axios';

const Explore = () => {
    const [products, setProducts] = useState([{},{},{},{}]);
    useEffect(() => {
        axios.get('http://localhost:5000/products').then(data => setProducts(data.data))
    }, []);





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