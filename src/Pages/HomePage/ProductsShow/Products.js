import { Container, Grid, Box, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {

    const [productsFull, setProducts] = useState([{}, {}, {}, {}]);

    const products = productsFull.slice(0, 6);

    useEffect(() => {
        axios.get('https://limitless-springs-61236.herokuapp.com/products').then(data => setProducts(data.data))
    }, []);

    return (
        <Container sx={{ my: 5 }}>
            <Box sx={{ my: 5 }}>  <Typography variant='h2' component='div'> Latest Collection</Typography>
                <Typography variant='h5' component='div'> WHERE ROYAL HAS A MEANING</Typography> </Box>
            <Grid container spacing={5}>
                {products.map(data => <Product
                    key={data._id} data={data}> </Product>)}


            </Grid>
        </Container>




    );
};

export default Products;