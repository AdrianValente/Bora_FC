import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import urlImagem from '../../img/group_default.jpg';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 8,
    color: theme.palette.text.secondary,
    margin: 5,
  },
  card: {
    maxWidth: '100%',
    margin: 5,
  },
  avatar: {
    width: 40,
    height: 40,
  },
  button: {
    margin: 10,
    fontSize: 10,
    padding: 5,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
    fontSize: 15,
  },
  formatarCampos: {
    fontSize: 12,
  },
  formatarDestaqueCampos: {
    
  },
});

const grupo = `Tabajara Futebol Clube`;
const data = `14/12/2018 as 15:30h`;
const local = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut dignissim est.`;

function AvaliableItens(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>

          <Paper item xs={12} className={classes.paper}>

            <Grid container wrap="nowrap" spacing={0}>
              <Grid item xs={2}>
                <Avatar className={classes.avatar} src={urlImagem} />
              </Grid>
              <Grid item xs={6} className={classes.formatarCampos}>
                Grupo: <b>{grupo}</b><br/>
                Data: <b>{data}</b><br/>
                Local: <b>{local}</b>
              </Grid>
              <Grid item xs={4} >
                <Button variant="contained" color="primary" className={classes.button}>
                  <Icon className={classes.extendedIcon}>send</Icon>Avaliar Jogo
                  {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
                </Button>
              </Grid>
            </Grid>

          </Paper>
          
        </Grid>
      </Grid>
    </div>
  );
}

AvaliableItens.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AvaliableItens);