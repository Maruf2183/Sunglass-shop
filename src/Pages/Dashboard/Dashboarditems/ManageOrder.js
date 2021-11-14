import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import axios from 'axios';




export default function ManageOrder() {

    const [datas, setDatas] = React.useState([]);
    const URL = `http://localhost:5000/orders`
    React.useEffect(() => {
        axios.get(URL).then(data => setDatas(data.data))
    }, [])
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="caption table">

                <TableHead>
                    <TableRow>

                        <TableCell aign="left" >Product Name</TableCell>
                        <TableCell align="left"> Customer email </TableCell>
                        <TableCell align="left"> Number </TableCell>
                        <TableCell align="left">Address</TableCell>
                        <TableCell align="left">price</TableCell>
                        <TableCell align="left">Cancel</TableCell>
                        <TableCell align="left">Accept</TableCell>


                    </TableRow>
                </TableHead>


                <TableBody>

                    {datas.map(data => (
                        <Row
                            key={data._id}
                            data={data}
                            datas={datas}
                            setDatas={setDatas}
                        />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const Row = ({ data, datas, setDatas }) => {
    const [openDelete, setOpenDelete] = React.useState(false);
    const [openUpdate, setOpenDeleteUpdate] = React.useState(false);

    const { email, phone, address, name, price, _id } = data;
    const dynamicURL = `http://localhost:5000/orders/${_id}`

    const handleRemove = () => {
        axios.delete(dynamicURL).then(datax=> {

            if (datax.data.deletedCount > 0) {
                const newValue = datas.filter(dataz => dataz._id !== _id);
                setDatas(newValue)
            }
        });
    }

    const handleUpdate = () => {
        axios.put(`http://localhost:5000/orders`,)
     }









    const handleOpenDelete = () => {
        setOpenDelete(true)
    }
    const handleOpenUpdate = () => {
        setOpenDeleteUpdate(true)
    }

    return (

        <>
            <TableRow >
                <TableCell align="left">  {name}</TableCell>
                <TableCell align="left"> {email} </TableCell>
                <TableCell align="left">  {phone} </TableCell>
                <TableCell align="left">  {address}</TableCell>
                <TableCell align="left">  {price}</TableCell>


                <TableCell align="left"> <Button onClick={handleOpenDelete} style={{ backgroundColor: "red", }}
                    variant='contained'>Delete</Button>
                </TableCell>
                <TableCell align="left"> <Button onClick={handleOpenUpdate} style={{ backgroundColor: "green", }}
                    variant='contained'>Accept</Button>
                </TableCell>
            </TableRow>


            <Dialog

                open={openDelete}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle
                    id="alert-dialog-title">
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
                        setOpenDelete(false)

                    }}>Disagree</Button>
                    <Button onClick={() => {
                        handleRemove();
                        setOpenDelete(false)
                    }} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog

                open={openUpdate}
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
                        setOpenDeleteUpdate(false)

                    }}>Disagree</Button>
                    <Button onClick={() => {
                        handleUpdate();
                        setOpenDeleteUpdate(false)
                    }} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </>



    )
};












