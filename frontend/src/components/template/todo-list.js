import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: '1000px', 
      overflowX: 'auto',
      margin: '20px auto'
    },
    table: {
      minWidth: 700,
    },
  });



const TodoList = ({ classes, list, handleRemove, handleMarkAsDone, handleMarkingAsPending }) => (    
    <div>
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Descrição</TableCell>
            <TableCell align="right">Marcar</TableCell> 
            <TableCell align="right">Desmarcar</TableCell> 
            <TableCell align="right">Excluir</TableCell> 
          </TableRow>
        </TableHead>
        <TableBody> 
            {list.map((row) => (        
            <TableRow>
              <TableCell className={row.status ? 'markedAsDone' : ''} component="th" scope="row">
                {row.description}
              </TableCell>
              <TableCell align="right"><button onClick={() => handleMarkAsDone(row)}>Check</button></TableCell>              
              <TableCell align="right"><button onClick={() => handleMarkingAsPending(row)}>Uncheck</button></TableCell>              
              <TableCell align="right"><button onClick={() => handleRemove(row)}>Excluir</button></TableCell>              
            </TableRow>             
            ))}
        </TableBody>
      </Table>
    </Paper>
    </div>
)

export default withStyles(styles)(TodoList);