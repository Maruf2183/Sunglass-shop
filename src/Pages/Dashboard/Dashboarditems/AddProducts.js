import { Button, Container, Paper, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import React from 'react';

const AddProducts = () => {
    return (
        <Container>
            <Paper elevation={2} sx={{p:5}}>
                <form >
                    <TextField fullWidth label="Image Url" variant="standard" />
                    <TextField fullWidth label="Price" variant="standard" />
                    <TextField fullWidth label="Name" variant="standard" />
                    <Button sx={{my:2}} variant="contained" endIcon={<SendIcon />}>
                        ADD
                    </Button>
                </form>







            </Paper>


        </Container>
    );
};

export default AddProducts;