import { Container, Grid, Typography } from '@mui/material';
import LocalCarWashIcon from '@mui/icons-material/LocalCarWash';
import ChatIcon from '@mui/icons-material/Chat';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import React from 'react';

const Extra1 = () => {
    return (
        <div style={{backgroundColor:'#e1ede4',padding:'90px 0px'}}>
             <Container>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid style={{
                    display: 'flex',
                    flexDirection:'column',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    justifyContent:'center'
                }} item xs={12} sm={12} md={4}>
                    <LocalCarWashIcon fontSize="large" > </LocalCarWashIcon>
                    <Typography sx={{my:2}} variant='h4'>Free Delivery</Typography>
                    <h4>Today’s most popular superstores have pretty much anything you need to buy. And most of them can get it to your door fast, usually for free .Why should we lag behind.You just order .It is our responsibility to deliver it to your home</h4>

                </Grid>
                <Grid  style={{
                    display: 'flex',
                    flexDirection:'column',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    justifyContent:'center'
                }} item xs={12} sm={12} md={4}>
                    <ChatIcon fontSize="large"></ChatIcon>
                    <Typography sx={{my:2}} variant='h4'>24/7 Customer Support</Typography>
                    <h4>You can contact us in any need,We are always ready to serve you We are always ready to help our customers with our best</h4>


                </Grid>
                <Grid  style={{
                    display: 'flex',
                    flexDirection:'column',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    justifyContent:'center'
                }} item xs={12} sm={12} md={4}>
                    <AssignmentReturnIcon fontSize="large"></AssignmentReturnIcon>
                    <Typography sx={{my:2}} variant='h4'>Return of Goods</Typography>

                    <h4>If you do not like our product, we offer you a refund.We value our customers' preferences the most You can order safely. If you don't like it, we will return our product.</h4>

                </Grid>

            </Grid>

        </Container>
       </div>
    );
};

export default Extra1;