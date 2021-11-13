import { Button, Container, Paper, TextField, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import React from 'react';

const Review = () => {
    const [value, setValue] = React.useState(2);
    console.log(value);



    return (
        <Container>

            <Paper elevation={3} sx={{ p: 5, }}>

                <Typography sx={{ py: 3 }} variant='h4'>  Add Your Comment and Rating here</Typography>

                <form onSubmit={onsubmit}> 
                <Rating
                    size='large'
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
                    <TextField
                        sx={{my:3}}
                    id="outlined-multiline-flexible"
                    label="Comment"
                    fullWidth
                    multiline
                    Rows={6}
                    defaultValue='Your comment'
                    />
                    <Button size='large' variant='contained' type='submit'>Submit</Button>
                </form>




            </Paper>
        </Container>
    );
};

export default Review;