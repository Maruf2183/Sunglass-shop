import { Button, Container, Paper, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import React from 'react';

const MakeAdmin = () => {
    return (
        <Container>
            <Paper elevation={2} sx={{p:5}}>
                <form >
                    <TextField fullWidth label="Admin E-mail" variant="standard" />
                  
                    <Button sx={{my:2}} variant="contained" endIcon={<SendIcon />}>
                        ADD
                    </Button>
                </form>







            </Paper>


        </Container>
    );
};

export default MakeAdmin;