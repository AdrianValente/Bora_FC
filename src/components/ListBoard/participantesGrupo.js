import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

import PlayerHolder from '../ItemPanelStatus/PlayerHolder';
import CardStatus from '../ItemPanelStatus/CardStatus';
import urlImagem from '../../img/user_default.jpg';

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
    width: 55,
    height: 55,
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
  nomeJogadores: {
    fontSize: 14,
    fontWeight: 'bold',
  },

});

function participantesGrupo(props) {
  const { classes, nome, admin, posicao,} = props;

  return (
    <div className={classes.root}>
      <Grid spacing={0} xs={12}>

            <Paper item xs={12} className={classes.paper}>

              <Grid container wrap="nowrap"  alignItems="center" justifyContent="flex-between" spacing={0}>
                <Grid item xs={2}>
                  <Avatar className={classes.avatar} src={urlImagem} />
                </Grid>
                <Grid item xs={6} className={classes.formatarCampos}>
                  <span className={classes.nomeJogadores}> {nome} </span> {admin}<br/>
                  <b>{posicao}</b><br/>
                </Grid>
                <Grid item xs={4} className="warpConteinerStatus" > 
                  <CardStatus />         
                  <PlayerHolder />            
                </Grid>
              </Grid>

            </Paper>

        </Grid>
    </div>
  );
}

participantesGrupo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(participantesGrupo);