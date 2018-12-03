import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

import imgUrl from '../img/bg_home.jpg';
import imgDestaque from '../img/logo_home.png';

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
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  bigAvatar: {
    margin: '10px',
    width: '250px',
    height: '250px',
  },


});

function Login(props) {
  const { classes } = props;

  return (
    <div className={`${classes.gbContainerLogin}`} justify="center" alignItems="center" >

      <Avatar alt="Logo" src={imgDestaque} className={`${classes.bigAvatar}`} />

      <Button variant="contained" color="primary" className={classes.button}>
        <Icon className={classes.icon}>games</Icon>Logar com Facebook
      </Button><br/>
      <Button variant="contained" color="secondary" className={classes.button}>
        <Icon className={classes.icon}>games</Icon> Logar com Google
      </Button>
      
    </div>
  );
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);