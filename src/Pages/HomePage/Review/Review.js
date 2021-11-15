
import { Avatar, Rating, Box, Typography, Container, Tooltip } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'






const Review = () => {
    const [revieData, setrevieData] = useState([]);
    console.log(revieData);

    useEffect(() => {
        axios.get(`https://limitless-springs-61236.herokuapp.com/review`).then(result => setrevieData(result.data));
    }, []);
    return (
        <Container sx={{ my: 5 }}>


            <Typography sx={{ my: 5 }} variant='h4'> Our Happy Customer says</Typography>
            <Swiper
                spaceBetween={40}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {revieData.map(datas => (<SwiperSlide>
                    <Tooltip title='click and scroll left or right for more ' placement="top" >
                        <Box style={{ height: '300px', backgroundColor: '#1769aa', padding: '30px' }}>
                            <Avatar
                                alt="Remy Sharp"
                                src={'image not found'}
                                sx={{ width: 100, height: 100, mx: 'auto' }}
                            />
                            <Typography sx={{ mt: 5 }} align='center' variant='h6'>{datas.comment}</Typography>
                            <Box sx={{ display: "flex", alignItems: 'center', justifyContent: 'center' }}> <Rating name="half-rating" defaultValue={datas.value} precision={1} readOnly /></Box>

                        </Box>
                    </Tooltip>

                </SwiperSlide>))}


            </Swiper>
        </Container>
    );
};

export default Review;