
import { Avatar, Rating,Box, Typography, Container, Tooltip} from '@mui/material';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'


const data = [
    1, 2, 4, 4, 5, 6, 7, 8, 9, 9, 6, 5, 4, 34,
]



const Review = () => {
    return (
        <Container sx={{ my: 5 }}>
            
            <Typography sx={{my:5}} variant='h4'> Our Happy Customer says</Typography>
            <Swiper
            spaceBetween={40}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {data.map(datas => (<SwiperSlide>
                <Tooltip  title='click and scroll left or right for more ' placement="top" >
                <Box style={{ height: '300px', backgroundColor: '#1769aa', padding:'30px'}}>
                    <Avatar
                        alt="Remy Sharp"
                        src="https://i.ibb.co/f0VC1VH/Top-10-Most-Beautiful-Girls-in-the-World-Pretty-Nice-Girl.jpg"
                        sx={{ width: 100, height: 100 ,mx:'auto'}}
                    />
                    <Typography sx={{mt:5}} align='center' variant='h6'>na re na ar tw parina mon amar nasajlsdjfl ajnaina bhai tumi jaw</Typography>
                    <Box sx={{display:"flex",alignItems:'center',justifyContent:'center'}}> <Rating name="half-rating" defaultValue={4} precision={1} readOnly /></Box>

                </Box>
               </Tooltip>

            </SwiperSlide>))}


        </Swiper>
        </Container>
    );
};

export default Review;