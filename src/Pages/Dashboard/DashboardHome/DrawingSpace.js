import { Avatar, Container, Typography } from '@mui/material';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const DrawingSpace = () => {
    const { user } = useAuth();
    console.log(user);
    return (
        <Container>
            <Avatar
  alt="Remy Sharp"
  src={user.photoURL}
  sx={{ width: 100, height: 100 }}
/>
            <Typography variant='h5'>{user.displayName}</Typography>
            <Typography variant='h5'>E-mail: {user.email}</Typography>
            
        </Container>
    );
};

export default DrawingSpace;