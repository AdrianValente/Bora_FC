import React from 'react';
import './Style.css';

import PropTypes from 'prop-types';
import {  withStyles, MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

import imgUrl from '../../img/bg_home.jpg';
import imgDestaque from '../../img/logo_home.png';

import indigo from '@material-ui/core/colors/indigo';
import red from '@material-ui/core/colors/red';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
  },
  gbContainerLogin: {
    backgroundImage: 'url(' + imgUrl + ')',
    backgroundRepeat  : 'repeat-x',
    backgroundPosition: 'center',
    height: '100vh',
    textAlign: 'center',
  },
  facebookButton: {
    margin: theme.spacing.unit,
    borderRadius: '24px',
    width: '80%',
    color: theme.palette.getContrastText(indigo[500]),
    backgroundColor: indigo[500],
    '&:hover': {
      backgroundColor: indigo[700],
    },    
  },
  googlePlusButton: {
    margin: theme.spacing.unit,
    borderRadius: '24px',
    width: '80%',
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
    },
  },
  input: {
    display: 'none',
  },
  bigAvatar: {
    margin: '50px 10px',
    width: '280px',
    height: '250px',
    borderRadius: '0%',
    display: 'inline-flex',
  },
});

function Login(props) {
  const { classes } = props;

  return (
    <div className={`${classes.gbContainerLogin}`} justify="center" alignItems="center" >

      <Avatar alt="Logo" src={imgDestaque} className={`${classes.bigAvatar}`} />
      <br/>
      <Button variant="contained" color="primary" className={classes.facebookButton}>
        <Icon className={classes.icon}>games</Icon> Logar com Facebook
      </Button><br/>
      <Button variant="contained" color="secondary" className={classes.googlePlusButton}>
        <Icon className={classes.icon}>games</Icon> Logar com Google
      </Button>
      
    </div>
  );
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);