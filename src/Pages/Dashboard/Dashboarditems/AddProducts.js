import { Button, Container, Paper, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import React from 'react';
import { useForm, Controller } from "react-hook-form"
import axios from 'axios';

const AddProducts = () => {
      
    const defaultValues = {
        photoURL: '',
        name: '',
        price:''
  }


    const { control, handleSubmit, reset } = useForm(defaultValues);



    const handleAddingProduct = (data) => {
        console.log(data);
        axios.post('http://localhost:5000/products',data).then(data=>console.log(data))
        reset(defaultValues)
    }


        



        


    


    return (
        <Container>
            <Paper elevation={2} sx={{ p: 5 }}>
                <form onSubmit={handleSubmit(handleAddingProduct)} >

                    <Controller
                        name="photoURL"
                        control={control}
                        render={({ field }) => <TextField  {...field} fullWidth label="Image Url" variant="standard" />}
                    />




                    <Controller
                        name="name"
                        control={control}
                        defaultValue=''
                        render={({ field }) => <TextField   {...field} fullWidth label="name" variant="standard" />}
                    />
                    <Controller

                        name="price"
                        control={control}
                        defaultValue=''
                        render={({ field }) => <TextField    {...field} fullWidth label="price" variant="standard" />}
                    />

                    <Button type='submit' sx={{ my: 2 }} variant="contained" endIcon={<SendIcon />}>
                        ADD
                    </Button>


                </form>







            </Paper>


        </Container>
    );
};

export default AddProducts;