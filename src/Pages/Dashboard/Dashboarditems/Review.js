import { Button, Container, Paper, TextField, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import axios from 'axios';
import React from 'react';
import { useForm, Controller } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';

const Review = () => {
    const { user } = useAuth();
    const { displayName } = user;
    const [value, setValue] = React.useState(2);
    console.log(value);
    const defaultValue = {
        ratin: '',
        comment: "",
    }
    const { control, handleSubmit, reset } = useForm(defaultValue)
    const handlSending = ({ comment }) => {
        axios.post(`https://limitless-springs-61236.herokuapp.com/review`, { value, comment, displayName }).then(result => {
            if (result.data.acknowledged) {
                reset(defaultValue);
            }
        })

        console.log(comment);

    }
    return (
        <Container>
            <Paper elevation={3} sx={{ p: 5, }}>
                <Typography sx={{ py: 3 }} variant='h4'>  Add Your Comment and Rating here</Typography>
                <form onSubmit={handleSubmit(handlSending)}>

                    <Rating
                        size='large'
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />


                    <Controller
                        name="comment"
                        control={control}
                        rules={{ required: true }}
                        defaultValue={""}
                        render={({ field }) => <TextField
                            {...field}
                            sx={{ my: 3 }}
                            id="outlined-multiline-flexible"
                            label="Comment"
                            fullWidth
                            multiline
                            Rows={6}
                            defaultValue='Your comment'
                        />
                        }
                    />
                    <Button size='large' variant='contained' type='submit'>Submit</Button>
                </form>

            </Paper>

        </Container>
    );
};
export default Review;