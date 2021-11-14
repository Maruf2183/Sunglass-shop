import React,{useState,useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import axios from 'axios';
import useAuth from '../../../Hooks/useAuth';



export default function MyOrder() {
    const { user } = useAuth();
    const { email } = user;
    console.log(email);
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        axios.post('http://localhost:5000/order', { email }).then(data => {
            setDatas(data.data)
        })
        
    }, []);
    
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
           
                <TableHead>
                    <TableRow>
                        <TableCell aign="left" >Product  Name</TableCell>
                        <TableCell align="left"> Price </TableCell>
                        <TableCell align="left"> Cencel</TableCell>
                        <TableCell align="left"> condition </TableCell>
                       


                    </TableRow>
                </TableHead>


                <TableBody>
                    {datas.map(info => (
                        <Rowx
                            key={info._id}
                            data={info}
                            datas={datas}
                            setDatas={setDatas}
                            />
                        
                        
                        

                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};


const Rowx = ({ data,datas,setDatas}) => {
    const { name, price, status,_id} = data;
    const [open, setOpen] = useState(false);
    const URL=`http://localhost:5000/orders/${_id}`
    const handleRemove = () => {
        axios.delete(URL).then(data => {
        
            if ( data.data.deletedCount > 0) {
                const AvailableData = datas.filter(data => data._id !== _id)
                setDatas(AvailableData)
            }
        });

    }
    const handlemodal = () => {
        setOpen(true)
    }
        
  

    return (

        <>
            

        <TableRow >
        
        <TableCell align="left"> {name}</TableCell>
        <TableCell align="left"> {price}</TableCell>
        
     

        <TableCell align="left"> <Button onClick={handlemodal} style={{ backgroundColor:"red",}} 
            variant='contained'>Cencel</Button>
        </TableCell>
        <TableCell align="left"> <Button style={{ backgroundColor:"green",}} 
                variant='contained'>{status}</Button>
        </TableCell>
           
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
                               
                               
                               

