import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RedditIcon from '@mui/icons-material/Reddit';

import { Container, Divider, Grid, Typography, Box } from '@mui/material';
import React from 'react';









const Footer = () => {
    return (
        <div style={{ backgroundColor: '#232323', color: 'white', padding: '80px 0px' }}>

            <Container>
                <Grid sx={{ textAlign: 'left' }} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                    <Grid item xs={6} sm={4} md={4}>
                        <Typography className='styled-bold' variant='h6' component='div' >ADDRESS</Typography>
                        <Typography variant='caption' component='div'> Address:Auto Parts StoreUnited States</Typography>
                        <Typography variant='caption' component='div'> Phone: (123) 456 789</Typography>
                        <Typography variant='caption' component='div'> Email: demo@demo.com</Typography>

                    </Grid>

                    <Grid item xs={6} sm={4} md={4}>
                        <Typography variant='h6' component='div'>OUR COMPANY</Typography>
                        <Typography variant='caption' component='div'> Delivery</Typography>
                        <Typography variant='caption' component='div'>Legal Notice</Typography>
                        <Typography variant='caption' component='div'> Terms and conditions of use</Typography>
                        <Typography variant='caption' component='div'>About Us</Typography>
                        <Typography variant='caption' component='div'> Secure payment</Typography>
                    </Grid>
                    <Grid item xs={6} sm={4} md={4}>
                        <Typography variant='h6' component='div'>YOUR ACCOUNT</Typography>
                        <Typography variant='caption' component='div'>Personal info</Typography>
                        <Typography variant='caption' component='div'> Orders</Typography>
                        <Typography variant='caption' component='div'> Credit slips</Typography>
                        <Typography variant='caption' component='div'>Addresses</Typography>
                        <Typography variant='caption' component='div'> My wishlists   </Typography>

                    </Grid>
                </Grid>
            </Container>
            <Divider sx={{ backgroundColor: 'blue', mt: 5 }}></Divider>



            <Container sx={{ my: 5 }}>

                <Grid container spacing={5}>


                    <Grid item xs={12} sm={12} md={4}  >
                        <Box component="div" sx={{ display: 'inline', p: 1, m: 1, }} >
                            <Grid container spacing={2}  >
                                <Grid item  >
                                    <TwitterIcon></TwitterIcon>
                                </Grid>
                                <Grid item >
                                    <RedditIcon></RedditIcon>
                                </Grid>
                                <Grid item >
                                    <InstagramIcon></InstagramIcon>
                                </Grid>
                                <Grid item >
                                    <YouTubeIcon></YouTubeIcon>
                                </Grid>
                                <Grid item >
                                    <PinterestIcon></PinterestIcon>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>











                    <Grid item xs={12} sm={12} md={4}  >
                        <Typography variant='caption'>© All Right reserved by eyeHouse-™  </Typography>
                         
                      
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} >
                        <img style={{maxWidth:'100%'}} src="https://i.ibb.co/HdVTh7H/payment-method-png-26072.png" alt="" />
                    </Grid>
                </Grid>
            </Container>

        </div>
    );
};

export default Footer;



































