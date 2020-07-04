import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const DisplayTable = () => {
    return (
        <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow >
              <TableCell component="th" scope="row">
                a
              </TableCell>
              <TableCell align="right">b</TableCell>
              <TableCell align="right">c</TableCell>
              <TableCell align="right">d</TableCell>
              <TableCell align="right">e</TableCell>
            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
    )
}

export default DisplayTable;
