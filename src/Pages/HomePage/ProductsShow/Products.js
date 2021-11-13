import { Container, Grid,Box, Typography } from '@mui/material';
import React from 'react';
import Product from './Product';

const Products = () => {
    const fakedata=[
        {id:'1', name: 'Rim spectacle Frame', price: 100, },
        {id:'2',name:'Aviator UniPex Sunglasses',price:200},
        {id:'3',name:'Around UniPex Sunglasses',price:100},
        {id:'4', name: 'Aviator frame glasses', price: 100 },
        {id:'5',name:'Cot-Out Fasion Frame',price:59},
        {id:'6',name:'Goggles Aviator Sunglasses',price:59},
    ]


    return (
        <Container sx={{my:5}}> 
            <Box sx={{my:5}}>  <Typography variant='h2' component='div'> Latest Collection</Typography> 
            <Typography variant='h5' component='div'> WHERE ROYAL HAS A MEANING</Typography> </Box>
            <Grid container spacing={5}>
                {fakedata.map(data => <Product
                key={data.id} data={data}> </Product>)}
                
                
            </Grid>
        </Container>
              


           
    );
};

export default Products;