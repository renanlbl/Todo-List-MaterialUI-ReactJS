import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    nav: {      
      display: 'flex',
      width: '250px',
      justifyContent: 'space-between'
    }, 
    a: {
      color: '#fff',
      textDecoration: 'none',
      fontWeight: 'bold'
    }
  };

  const Menu = ({ classes }) => {  
    return (
      <div className={classes.root}>
        <AppBar position="static" color="secondary">
          <Toolbar>          
            <Typography variant="h6" color="inherit" className={classes.grow}>
              TodoList
            </Typography>
            <nav className={classes.nav}>
              <a className={classes.a} href="#">Teste TvManager</a>              
            </nav>           
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  

export default withStyles(styles)(Menu);