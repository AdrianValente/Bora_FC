import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import ItemPosicionGame from '../ItemPanelStatus/PositionGame';
import ItemPainelStatusSpecial from '../ItemPanelStatus/Special';
import ItemCardStatus from '../ItemPanelStatus/CardStatus';
import GolsNumber from '../ItemPanelStatus/GolNumber';
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
    width: 50,
    height: 50,
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
  formatarposicionamentoRodape: {
    justifyContent: 'space-between',
    display: 'flex',
    marginTop: '10px',
  },
});

const grupo = `Tabajara Futebol Clube`;
const data = `14/12/2018 as 15:30h`;

function GameStatus(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>

          <Paper item xs={12} className={classes.paper}>

            <Grid container spacing={0}>
              <Grid item xs={2}>
                <Avatar className={classes.avatar} src={urlImagem} />
              </Grid>
              <Grid item xs={10} className={classes.formatarCampos}>
                Grupo: <b>{grupo}</b><br/>
                Data: <b>{data}</b><br/>
              </Grid>
              <Grid item xs={12} wrap="nowrap" className={classes.formatarposicionamentoRodape}>     
                <SpotlightPlayer /> 
                <ItemCardStatus />
                <ItemPosicionGame /> 
                <GolsNumber />
                <ItemPainelStatusSpecial />               
              </Grid>
            </Grid>

          </Paper>
          
        </Grid>
      </Grid>
    </div>
  );
}

GameStatus.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GameStatus);