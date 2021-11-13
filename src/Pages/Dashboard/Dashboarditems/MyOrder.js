import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
];

export default function MyOrder() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="caption table">

                <TableHead>
                    <TableRow>
                        <TableCell aign="right" >Product  Name</TableCell>
                        <TableCell align="right"> Price </TableCell>
                        <TableCell align="right"> Cencel</TableCell>
                        <TableCell align="right"> condition </TableCell>
                       


                    </TableRow>
                </TableHead>


                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right"> 254</TableCell>
                            
                         

                            <TableCell align="right"> <Button style={{ backgroundColor:"red",}} 
                                variant='contained'>Cencel</Button>
                            </TableCell>
                            <TableCell align="right"> <Button style={{ backgroundColor:"green",}} 
                                variant='contained'>Pending</Button>
                            </TableCell>
                               
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
                               
                               
                               

