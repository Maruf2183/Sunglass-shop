import { Button, Container, Paper, Snackbar, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import React from 'react';
import axios from 'axios';
import { useForm, Controller } from "react-hook-form";


const MakeAdmin = () => {
    const defaultValues = {
        email: ''
    }
    const { control, handleSubmit, reset } = useForm(defaultValues)
    const handleMakeAdmin = ({ email }) => {
        axios.put('https://limitless-springs-61236.herokuapp.com/users/admin', { email: email }).then(result => {
            console.log(result.data);
            if (result.data.matchedCount === 0) {
                alert(`This user not logged in sir`)
                reset(defaultValues)
            }
            if (result.data.modifiedCount > 0) {
                reset(defaultValues)
                setNotify(true)
            }
            else if (result.data.modifiedCount === 0 && result.data.matchedCount > 0) {
                alert(`Already added sir`)
                reset(defaultValues)
            }
        }).catch(error => alert(error.message));
    };
    const [notify, setNotify] = React.useState(false);
    const handleClose = () => {
        setNotify(false)
    }

    return (
        <>
            <Snackbar
                autoHideDuration={3000}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={notify}
                onClose={handleClose}
                message='Admin Created Successfully'
            />
            <Container>
                <Paper elevation={2} sx={{ p: 5 }}>
                    <form onSubmit={handleSubmit(handleMakeAdmin)} >

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
                                label='email'
                            />
                            }
                        />

                        <Button type='submit' handleMakeAdmin sx={{ my: 2 }} variant="contained" endIcon={<SendIcon />}>
                            ADD
                        </Button>
                    </form>







                </Paper>


            </Container>
        </>
    );
};

export default MakeAdmin;