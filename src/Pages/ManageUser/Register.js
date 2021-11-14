import React, { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, Container, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography, Box, Divider, Alert, AlertTitle, CircularProgress } from '@mui/material';
import { NavLink } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import useAuth from '../../Hooks/useAuth';
import { useForm, Controller } from "react-hook-form";






const Register = () => {
    const { loading, googleDirectsignin, signInWithEmail } = useAuth();


    //    password hide handle 
    const [values, setValues] = React.useState({ showPassword: false, });
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    const alignCenter = {
        height: '800px',
        width: '100%',

        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',

    }
    const formStyle = {
        backgroundColor: '#e3fff2',
        boxShadow: '2px 2px 10px grey',
        padding: '30px',
        borderRadius: '7px',
        maxWidth: '600px'
    };


    const [istmatch, setIsnmatch] = useState(false);

    const defaultValues = {
        name: '',
        email:'',
        password: '',
        password2: '',
    }
        
        
        
        

    const { control, formState: { errors }, handleSubmit, reset } = useForm(defaultValues)

    const onSubmit = ({email, password, password2,name}) => {
        const loggeddata={name,email,password,password2}
        console.log(loggeddata);
        if (password !== password2) {

            setIsnmatch(true)
            console.log(`password not match`, password, password2);
        }
        else if (password.length < 6) {
            alert(`input 6 careacter passsword please`)

        }
        else {
            signInWithEmail(email, password,name)
            reset(defaultValues)
            console.log(`password match`, password, password2);
            setIsnmatch(false)
        }
    };/* submit end here */






    if (loading) {

        return (
            <Box sx={{ height: '600px', width: '100vw', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center' }}>
                <CircularProgress size={100} color="secondary" />
            </Box>

        )
    }











    return (
        <Box style={{ backgroundColor: '#e6edf7' }}>
            <Container>
                <Box style={alignCenter}>
                    <form onSubmit={handleSubmit(onSubmit)} style={formStyle} >
                        <Typography variant='h4' element='div' sx={{ my: 4 }} >Register</Typography>

                        <Box style={{ margin: '30px 0px' }}>
                        <Controller
                            
                            name="name"
                            control={control}
                            type='email'
                            rules={{ required: true }}
                            defaultValue={""}
                            render={({ field }) => <TextField
                               
                                {...field}
                                sx={{ width: 1 }}
                                tuype='text'
                                id="name"
                                label='Name'
                            />
                            }
                        />
                       </Box>
                        {errors.email?.type === 'required' && <Typography variant='caption' align='left' sx={{ color: 'red' }}> Name  is required</Typography>}
                        <Controller
                            
                            name="email"
                            control={control}
                            type='email'
                            rules={{ required: true }}
                            defaultValue={""}
                            render={({ field }) => <TextField
                                {...field}
                                sx={{ width: 1 }}
                                tuype='email'
                                id="email"
                                label='E-mail'
                            />
                            }
                        />
                        {errors.email?.type === 'required' && <Typography variant='caption' align='left' sx={{ color: 'red' }}> email  is required</Typography>}

                        <Controller
                            name="password"
                            control={control}
                            rules={{ required: true }}
                            defaultValue={""}

                            render={({ field }) =>
                                <FormControl sx={{ my: 3, width: 1 }} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">password</InputLabel>
                                    <OutlinedInput
                                        {...field}
                                        id="password"
                                        name='password'
                                        type={values.showPassword ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                >
                                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                </FormControl>

                            }
                        />
                        {errors.password?.type === 'required' && <Typography variant='caption' align='left' sx={{ color: 'red' }}> PassWord  is required</Typography>}
                        {istmatch && <Alert severity="error">
                            <AlertTitle>Error</AlertTitle>
                            Password Doesnt't match — <strong>Type Carefully!</strong>
                        </Alert>}
                        <Controller
                            name="password2"
                            control={control}
                            defaultValue={""}
                            rules={{ required: true }}
                            render={({ field }) =>
                                <FormControl sx={{ my: 3, width: 1 }} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">password</InputLabel>
                                    <OutlinedInput
                                        {...field}
                                        id="password"
                                        name='password'
                                        type={values.showPassword ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                >
                                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                </FormControl>
                            }
                        />
                        {errors.password2?.type === 'required' && <Typography variant='caption' align='left' sx={{ color: 'red', width: "auto", }}> Confirm Password  is required</Typography>}
                        <Box style={{ textAlign: 'left' }} > <Button sx={{ px: 5, my: 3 }} type='submit' variant="contained">Register</Button>
                        </Box>
                        <Box style={{ textAlign: 'left' }} >
                            <NavLink style={{ textDecoration: 'none' }} to='/login'> Allready Registered ? Please Log In</NavLink>
                        </Box>

                        <Divider sx={{ my: 5 }} />
                        <Typography variant='caption'> Sign in with </Typography>
                        <Button onClick={googleDirectsignin} sx={{ mx: 2 }} variant='contained'>
                            <GoogleIcon />
                        </Button>
                    </form>
                </Box>
            </Container>
        </Box>
    );
};

export default Register;