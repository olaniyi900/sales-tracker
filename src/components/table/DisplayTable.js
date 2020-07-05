import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const DisplayTable = (props) => {
        

    return (
        <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Serail Number</TableCell>
            <TableCell align="right">Item Description</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Sales Person</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { props.data.map( d =>
            <TableRow key={d.i}>
     <TableCell >{ d.serial_no }</TableCell> 
     <TableCell >{ d.item }</TableCell> 
     <TableCell >{ d.price }</TableCell> 
     <TableCell >{ d.quantity }</TableCell> 
     <TableCell >{ d.sales_person }</TableCell> 
             
            </TableRow>
          )
          }
        </TableBody>
      </Table>
    </TableContainer>
    )
}

export default DisplayTable;
