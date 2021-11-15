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
import { Snackbar } from '@mui/material';

export default function ManageProducts() {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        axios.get('https://limitless-springs-61236.herokuapp.com/products').then(data => setAllProducts(data.data))
    }, []);
    const [notify, setNotify] = useState(false);
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
                message='Delete Successful'
            />
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
                                setNotify={setNotify}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
const TableRows = ({ data, products, setProducts, setNotify }) => {
    // dialog function start here 
    const [open, setOpen] = useState(false);
    const { name, price, _id } = data;
    const dynamicRoute = `https://limitless-springs-61236.herokuapp.com/products/${_id}`
    const handleRemove = () => {
        axios.delete(dynamicRoute).then(data => {
            if (data.data.deletedCount > 0) {
                setNotify(true)
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
                <DialogTitle sx={{ color: 'blue' }} id="alert-dialog-title">
                    Are you sure !
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">

                        If You delete this item will delete from UI and database too
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => {
                        setOpen(false)
                    }} sx={{ color: 'green' }}>NO</Button>
                    <Button onClick={() => {
                        handleRemove();
                        setOpen(false)
                    }} sx={{ color: 'red' }} autoFocus>
                        YES
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
};




















































































