import { Container, Box, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, useParams, useHistory } from 'react-router-dom';
import { useForm, Controller } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';


const PlaceOrder = () => {
    const { user } = useAuth();
    const { email } = user;
    const history = useHistory()
    const { id } = useParams();
    const URL = `https://limitless-springs-61236.herokuapp.com/products/${id}`;
    const [data, setData] = useState({});
    const { name, price } = data;
    useEffect(() => {
        axios.get(URL).then(data => setData(data.data))
    }, [])

    const defaultValue = {
        email2: '',
        phone: '',
        address: ''
    }
    const { control, handleSubmit, reset } = useForm(defaultValue)
    const onSubmit = (data) => {
        const newData = { ...data, name, price, status: 'pending', email: email };
        axios.post('https://limitless-springs-61236.herokuapp.com/orders', newData).then(result => {
            if (result.data.acknowledged) {
                reset(defaultValue)
                history.push('/dashboard')
            }
        })

    };/* submit function end here */


    const border = {
        boxShadow: '2px 2px 10px grey',
        borderRadius: '5px'
    }
    return (
        <div>
            <Container sx={{ ...border, py: 5, backgroundColor: '#b0ebc0' }}>
                <NavLink to='/home'> Back to Home</NavLink>
                <Typography align='center' variant='h3' sx={{ py: 2 }}> Giv us Your  information for shipping</Typography>
                <Box sx={{ mx: 'auto', ...border, width: '75%', p: 5 }}>

                    <form onSubmit={handleSubmit(onSubmit)} sx={{ mx: 'auto' }}>


                        <Controller
                            name="email2"
                            control={control}
                            rules={{ required: true }}
                            defaultValue={""}
                            render={({ field }) => <TextField
                                {...field}
                                sx={{ width: 1 }}
                                tuype='email'
                                id="email"
                                label='E-mail'
                                required
                            />
                            }
                        />

                        <br />
                        <Controller
                            name="phone"
                            control={control}
                            rules={{ required: true }}
                            defaultValue={""}
                            render={({ field }) => <TextField
                                {...field}
                                sx={{ width: 1, my: 2 }}
                                type='text'
                                id="phone"
                                label='Phone'
                                required
                            />
                            }
                        />

                        <br />
                        <Controller
                            name="address"
                            control={control}
                            rules={{ required: true }}
                            defaultValue={""}
                            render={({ field }) => <TextField
                                {...field}
                                sx={{ width: 1 }}
                                type='text'
                                id="address"
                                label='Address'
                                required
                            />
                            }
                        />

                        <br />
                        <Button sx={{ px: 5, my: 3 }} type='submit' variant="contained">Submit</Button>
                    </form>
                </Box>
            </Container >
        </div>

    );
};

export default PlaceOrder;







