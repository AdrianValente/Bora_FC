import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import SpotlightPlayer from '../ItemPanelStatus/SpotlightPlayer';

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
  dataJogo: {
    fontSize: 14,
    fontWeight: 'bold',
  },

});

const data = `14/12/2018`;

function UserPlay(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid spacing={0} xs={12}>
        <Paper item xs={12} className={classes.paper}>
          <Grid container wrap="nowrap"  alignItems="center" justifyContent="flex-between" spacing={0}>

              <Grid item xs={2}>
                <span className={classes.dataJogo}>{data}</span>
              </Grid>              
              <Grid item xs={6} className="warpConteinerStatus" >          
                <SpotlightPlayer />                              
              </Grid>
              <Grid item xs={4} className={classes.formatarCampos}>
                Avaliação Geral do Jogo:
                <br/>estrelinhas
              </Grid>

            </Grid>
        </Paper>          
      </Grid>
    </div>
  );
}

UserPlay.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserPlay);