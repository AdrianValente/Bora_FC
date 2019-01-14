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

});

const Nome = `Nome Do Jogador`;
const Posicao = `Goleiro`;

function UserOfGroup(props) {
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
                Nome: <b>{Nome}</b> (ADM) <br/>
                Posição: <b>{Posicao}</b><br/>
              </Grid>
              <Grid item xs={4} className="warpConteinerStatus" > 
                <CardStatus />         
                <PlayerHolder />            
              </Grid>
            </Grid>

          </Paper>
          
        </Grid>
      </Grid>
    </div>
  );
}

UserOfGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserOfGroup);