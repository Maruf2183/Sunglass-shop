import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, Container, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography, Box, Divider, CircularProgress } from '@mui/material';
import React from 'react';
import { NavLink ,useHistory} from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import useAuth from '../../Hooks/useAuth';
import { useForm, Controller } from "react-hook-form";



const Login = () => {
    const { loading,error,googleDirectsignin,emailLogin} = useAuth();

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
        maxWidth:'600px'
    };

    const history=useHistory();


    //form data collection and  login function start here
    const { control, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = ({ email, password }) => {
        emailLogin(email, password,history)

    };/* submit function end here */
    if (loading) {

        return (
            <Box sx={{ height:'600px',width:'100vw',display:'flex',alignItems:'center',justifyItems:'center',justifyContent:'center' }}>
                <CircularProgress size={100} color="secondary" />
            </Box>

        )
    }
        


        

    return (
        <Box style={{ backgroundColor: '#e6edf7' }}>
            <Container>
                <Box style={alignCenter}>
                    <form onSubmit={handleSubmit(onSubmit)} style={formStyle} >
                        {error}

                        <Typography variant='h4' element='div' sx={{ my: 4 }} > Log In</Typography>
                        <Controller
                            name="email"
                            control={control}
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
                        {errors.password?.type === 'required' && <Typography variant='caption' align='left' sx={{ color: 'red' }}> Password  is required</Typography>}

                        <Box style={{ textAlign: 'left' }} > <Button sx={{ px: 5, my: 3 }} type='submit' variant="contained">Log In</Button>
                        </Box>
                        <Box style={{ textAlign: 'left' }} >
                            <NavLink style={{ textDecoration: 'none' }} to='/register'> Not Registered ? Please Register</NavLink>
                        </Box>
                        <Divider sx={{ my: 3 }} />
                        <Typography variant='caption'> Sign in with </Typography>
                        <Button onClick={googleDirectsignin} sx={{ mx: 3 }} variant='contained'>
                            <GoogleIcon />
                        </Button>
                    </form>
                </Box>
            </Container>
        </Box>
    );
};

export default Login;