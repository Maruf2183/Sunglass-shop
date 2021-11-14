import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';








export default function ManageProducts() {

    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/products').then(data => setAllProducts(data.data))
    }, []);














    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="caption table">

                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Manage</TableCell>


                        </TableRow>
                    </TableHead>


                    <TableBody>
                        {allProducts?.map((data) => (
                            <TableRows
                                key={data._id}
                                data={data}
                                products={allProducts}
                                setProducts={setAllProducts}


                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>



        </>
    );
}





const TableRows = ({ data, products, setProducts }) => {

    // dialog function start here 
    const [open, setOpen] = useState(false);



    const { name, price, _id } = data;
    const dynamicRoute = `http://localhost:5000/products/${_id}`

    const handleRemove = () => {
        axios.delete(dynamicRoute).then(data => {
        
            if ( data.data.deletedCount > 0) {
                const AvailableData = products.filter(data => data._id !== _id)
                setProducts(AvailableData)
            }
        });

    }

    return (
        <>
            <TableRow>
                <TableCell component="th" scope="row">
                    {name}
                </TableCell>
                <TableCell align="right">{price}</TableCell>


                <TableCell align="right"> <Button onClick={() => {
                    setOpen(true)

                }} style={{ backgroundColor: "red", }}
                    variant='contained'>Delete</Button> </TableCell>

            </TableRow>





            <Dialog

                open={open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are you sure ?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you Sure ...?
                        You really Want to delete thid item...?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => {
                        setOpen(false)

                    }}>Disagree</Button>
                    <Button onClick={() => {
                        handleRemove();
                        setOpen(false)
                    }} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>



        </>




    )
}






















