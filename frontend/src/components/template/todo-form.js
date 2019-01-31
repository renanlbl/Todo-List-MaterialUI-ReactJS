import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import ControlPoint from '@material-ui/icons/ControlPoint';



const styles = {
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      maxWidth: '400px',
      margin: '20px auto'
    },
    input: {
      marginLeft: 8,
      flex: 1,
      width: '100%'
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      width: 1,
      height: 28,
      margin: 4,
    },
  };

const TodoForm = ({classes, handleAdd, description, handleChange}) => (
    <Paper className={classes.root} elevation={1}>      
      <InputBase className={classes.input} value={description} onChange={handleChange} placeholder="Adicionar nova tarefa!" />
      <IconButton className={classes.iconButton} aria-label="Search">
        <ControlPoint onClick={handleAdd} />
      </IconButton>  
    </Paper>
)

export default withStyles(styles)(TodoForm);
